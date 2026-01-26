/**
 * JayLL Prompts - Terminal Edition
 * Handles gallery loading and terminal interaction
 */

// ============================================
// State
// ============================================
let allPrompts = [];
let filteredPrompts = [];
let commandHistory = [];
let historyIndex = -1;
let selectedIndex = -1;
let filteredCommands = [];

// ============================================
// DOM Elements
// ============================================
const gallery = document.getElementById('gallery');
const emptyState = document.getElementById('emptyState');
const loading = document.getElementById('loading');
const toast = document.getElementById('toast');
const terminalOutput = document.getElementById('terminal-output');
const commandInput = document.getElementById('command-input');
const autocomplete = document.getElementById('autocomplete');

// ============================================
// Command Registry
// ============================================
const COMMANDS = {
    home: {
        description: 'return to home',
        action: () => window.location.href = '/'
    },
    help: {
        description: 'show available commands',
        action: showHelp
    }
};

// ============================================
// Initialize
// ============================================
document.addEventListener('DOMContentLoaded', async () => {
    commandInput.focus();
    setupCommandListeners();
    await loadAllPrompts();

    // Global click to close autocomplete
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.input-container')) {
            hideAutocomplete();
        }
    });
});

// ============================================
// Gallery Logic
// ============================================
async function loadAllPrompts() {
    loading.classList.add('visible');
    gallery.innerHTML = '';

    try {
        const indexResponse = await fetch('data/index.json');
        if (!indexResponse.ok) throw new Error('Could not load index.json');
        const { collections } = await indexResponse.json();

        const loadPromises = collections.map(async (tag) => {
            try {
                const response = await fetch(`data/${tag}.json`);
                if (!response.ok) return null;
                const items = await response.json();
                return items.map(p => ({ ...p, tag }));
            } catch (e) {
                return null;
            }
        });

        const results = await Promise.all(loadPromises);

        allPrompts = [];
        results.forEach(items => {
            if (items) allPrompts.push(...items);
        });

        await loadPromptContents();

        if (allPrompts.length === 0) {
            allPrompts = getSamplePrompts();
        }

        filteredPrompts = [...allPrompts];
        renderGallery(filteredPrompts);
    } catch (error) {
        console.error('Error loading prompts:', error);
        allPrompts = getSamplePrompts();
        filteredPrompts = [...allPrompts];
        renderGallery(filteredPrompts);
    } finally {
        loading.classList.remove('visible');
    }
}

async function loadPromptContents() {
    const loadPromises = allPrompts.map(async (item) => {
        if (item.promptFile) {
            try {
                const response = await fetch(`data/${item.promptFile}`);
                if (response.ok) {
                    item.prompt = await response.text();
                } else {
                    item.prompt = item.prompt || '';
                }
            } catch (error) {
                item.prompt = item.prompt || '';
            }
        }
        return item;
    });
    await Promise.all(loadPromises);
}

function getSamplePrompts() {
    return [
        {
            id: 'sample-001',
            title: 'System Crash',
            prompt: 'A futuristic terminal interface glitching out, red error messages cascading down a black screen, matrix digital rain effect, cyberpunk aesthetic, high contrast, detailed',
            tag: 'glitch',
            imageUrl: 'https://picsum.photos/seed/glitch1/400/225'
        },
        {
            id: 'sample-002',
            title: 'Neon Cityscape',
            prompt: 'Cyberpunk city at night, wet streets reflecting neon signs, flying cars, towering skyscrapers, rain, cinematic lighting, photorealistic, 8k',
            tag: 'cyberpunk',
            imageUrl: 'https://picsum.photos/200/300'
        }
    ];
}

function renderGallery(items) {
    if (items.length === 0) {
        gallery.innerHTML = '';
        emptyState.classList.add('visible');
        return;
    }

    emptyState.classList.remove('visible');

    gallery.innerHTML = items.map(item => `
        <article 
            class="card" 
            data-prompt="${encodeURIComponent(item.prompt)}"
            tabindex="0" 
            role="button" 
            aria-label="Copy prompt: ${item.title}"
        >
             <img 
                src="${item.imageUrl}" 
                alt="${item.title}" 
                class="card-image"
                loading="lazy"
                onerror="this.src='https://placehold.co/400x225/1e293b/475569?text=No+Image'"
            >
            <div class="card-content">
                <h3 class="card-title">${item.title}</h3>
            </div>
            <div class="card-overlay">
                <span class="overlay-title">${item.title}</span>
                <span class="overlay-tag">${item.tag}</span>
                <span class="overlay-hint">click to copy</span>
            </div>
        </article>
    `).join('');

    document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('click', handleCardClick);
        card.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleCardClick({ currentTarget: card });
            }
        });
    });
}

function filterPrompts(query) {
    const cleanQuery = query.startsWith('/') ? query.slice(1).trim() : query;

    if (!cleanQuery || cleanQuery.length === 0) {
        filteredPrompts = [...allPrompts];
        renderGallery(filteredPrompts);
        return;
    }

    filteredPrompts = allPrompts.filter(item =>
        item.title.toLowerCase().includes(cleanQuery) ||
        item.prompt.toLowerCase().includes(cleanQuery) ||
        item.tag.toLowerCase().includes(cleanQuery)
    );

    renderGallery(filteredPrompts);
}

// Click-to-Copy Handler
async function handleCardClick(e) {
    const card = e.currentTarget;
    const promptText = decodeURIComponent(card.dataset.prompt);

    try {
        await navigator.clipboard.writeText(promptText);
        showSystemMessage('Copied to clipboard');
    } catch (err) {
        const textarea = document.createElement('textarea');
        textarea.value = promptText;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        showSystemMessage('Copied to clipboard');
    }
}

// ============================================
// Terminal Logic
// ============================================

function setupCommandListeners() {
    commandInput.addEventListener('input', handleInput);
    commandInput.addEventListener('keydown', handleKeyDown);

    // Global Shortcuts
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if (document.activeElement === commandInput) {
                if (commandInput.value !== '') {
                    commandInput.value = '';
                    filterPrompts('');
                    hideAutocomplete();
                }
            } else {
                commandInput.focus();
            }
        }

        if (e.key === '/' && document.activeElement !== commandInput) {
            e.preventDefault();
            commandInput.focus();
            commandInput.value = '/';
            filterPrompts('');
        }
    });
}

function handleInput(e) {
    const value = e.target.value; // Keep original case for filter
    const lowerValue = value.toLowerCase();

    // 1. FILTER MODE (Starts with /)
    if (value.startsWith('/')) {
        hideAutocomplete();
        filterPrompts(value.slice(1));
        return;
    }

    // 2. Clear filter if empty
    if (value.length === 0) {
        filterPrompts('');
        hideAutocomplete();
        return;
    }

    // 3. AUTOCOMPLETE MODE (Normal typing)
    filteredCommands = Object.entries(COMMANDS)
        .filter(([cmd]) => cmd.startsWith(lowerValue))
        .map(([cmd, data]) => ({ cmd, ...data }));

    if (filteredCommands.length > 0) {
        showAutocomplete();
        selectedIndex = 0;
        renderAutocomplete();
    } else {
        hideAutocomplete();
    }
}

function handleKeyDown(e) {
    switch (e.key) {
        case 'ArrowDown':
            if (autocomplete.classList.contains('visible')) {
                e.preventDefault();
                selectedIndex = Math.min(selectedIndex + 1, filteredCommands.length - 1);
                renderAutocomplete();
            }
            break;

        case 'ArrowUp':
            if (autocomplete.classList.contains('visible')) {
                e.preventDefault();
                selectedIndex = Math.max(selectedIndex - 1, 0);
                renderAutocomplete();
            }
            break;

        case 'Tab':
            if (autocomplete.classList.contains('visible') && filteredCommands.length > 0) {
                e.preventDefault();
                commandInput.value = filteredCommands[selectedIndex].cmd;
                hideAutocomplete();
            }
            break;

        case 'Enter':
            e.preventDefault();
            const val = commandInput.value.trim();
            if (val.startsWith('/')) {
                // Filter is live, just keep it focus
            } else {
                executeCommand(val);
            }
            break;
    }
}

// ============================================
// Autocomplete UI
// ============================================
function showAutocomplete() {
    positionAutocomplete();
    autocomplete.classList.add('visible');
}

function hideAutocomplete() {
    autocomplete.classList.remove('visible');
    selectedIndex = -1;
}

function positionAutocomplete() {
    const inputRect = commandInput.getBoundingClientRect();
    const spaceBelow = window.innerHeight - inputRect.bottom;
    autocomplete.classList.remove('dropdown', 'dropup');

    // Default to dropup for bottom input
    autocomplete.classList.add('dropup');
}

function renderAutocomplete() {
    autocomplete.innerHTML = filteredCommands.map((item, index) => `
        <div class="autocomplete-item ${index === selectedIndex ? 'selected' : ''}" 
             onclick="selectAutocompleteItem('${item.cmd}')">
            <span class="autocomplete-cmd">${item.cmd}</span>
            <span class="autocomplete-desc">${item.description}</span>
        </div>
    `).join('');
}

function selectAutocompleteItem(cmd) {
    commandInput.value = cmd;
    hideAutocomplete();
    commandInput.focus();
    executeCommand(cmd);
}

// Make globally available
window.selectAutocompleteItem = selectAutocompleteItem;


// ============================================
// Command Execution
// ============================================
function executeCommand(cmd) {
    const lowerCmd = cmd.toLowerCase();

    if (COMMANDS[lowerCmd]) {
        COMMANDS[lowerCmd].action();
        commandInput.value = '';
    } else {
        showSystemMessage(`Command not found. Try 'help' or '/keyword'`);
    }
}

function showHelp() {
    // Show help in a modal overlay or temporary toast? 
    // Since we don't have a command output log in gallery mode, 
    // let's use a creative overlay toast.

    const helpText = Object.entries(COMMANDS)
        .map(([cmd, data]) => `<div style="display:flex; justify-content:space-between; width:200px"><span>${cmd}</span> <span style="opacity:0.6">${data.description}</span></div>`)
        .join('');

    const slashHelp = `<div style="display:flex; justify-content:space-between; width:200px; margin-top:8px; padding-top:8px; border-top:1px solid rgba(255,255,255,0.1)"><span>/query</span> <span style="opacity:0.6">filter prompts</span></div>`;

    showSystemMessageHTML(`<div style="text-align:left; font-family:monospace; font-size:12px;">${helpText}${slashHelp}</div>`, 5000);
}

// ============================================
// Toast System
// ============================================
let toastTimeout;

function showSystemMessage(msg) {
    const toastText = toast.querySelector('.toast-text');
    toastText.innerText = `System: ${msg}`;

    clearTimeout(toastTimeout);
    toast.classList.add('visible');
    toastTimeout = setTimeout(() => {
        toast.classList.remove('visible');
    }, 2500);
}

function showSystemMessageHTML(html, duration = 2500) {
    const toastText = toast.querySelector('.toast-text');
    toastText.innerHTML = html;

    clearTimeout(toastTimeout);
    toast.classList.add('visible');
    toastTimeout = setTimeout(() => {
        toast.classList.remove('visible');
    }, duration);
}
