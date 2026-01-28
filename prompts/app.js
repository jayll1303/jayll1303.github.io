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
let selectedIndex = -1; // Autocomplete index
let filteredCommands = [];

// Interact Mode State
let isInteractMode = false;
let focusedCardIndex = -1;

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
    interact: {
        description: 'keyboard navigation mode',
        action: enableInteractMode
    },
    help: {
        description: 'show available commands',
        action: showHelp
    },
    theme: {
        description: 'change terminal theme',
        action: (args) => changeTheme(args)
    }
};

// ============================================
// Initialize
// ============================================
document.addEventListener('DOMContentLoaded', async () => {
    commandInput.focus();
    commandInput.focus();
    setupCommandListeners();
    setupInteractListeners(); // New Interact Mode Listeners

    // Load saved theme
    const savedTheme = localStorage.getItem('terminal-theme');
    if (savedTheme) {
        const themeLink = document.getElementById('theme-style');
        if (themeLink) themeLink.href = `../themes/${savedTheme}.css`;
    }

    await loadAllPrompts();

    // Global click to close autocomplete
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.input-container')) {
            hideAutocomplete();
        }
    });

    // Handle clicks outside of gallery to exit interact mode if needed?
    // Maybe better to just rely on ESC or clicking input
    document.addEventListener('click', (e) => {
        if (isInteractMode && !e.target.closest('.card')) {
            // Optional: exit interact mode if clicking empty space?
            // disableInteractMode(); 
            // kept simple for now
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
            prompt: 'A futuristic terminal interface glitching out',
            tag: 'glitch',
            imageUrl: 'https://picsum.photos/seed/glitch1/400/225'
        },
        {
            id: 'sample-002',
            title: 'Neon Cityscape',
            prompt: 'Cyberpunk city at night',
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

    gallery.innerHTML = items.map((item, index) => `
        <article 
            class="card" 
            id="card-${index}"
            data-index="${index}"
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
        // Note: keydown on card is handled globally in Interact Mode or here for standard tab nav
        card.addEventListener('keydown', (e) => {
            if ((e.key === 'Enter' || e.key === ' ') && !isInteractMode) {
                e.preventDefault();
                handleCardClick({ currentTarget: card });
            }
        });
    });
}

function filterPrompts(query) {
    const cleanQuery = query.startsWith('/') ? query.slice(1).trim() : query;

    // Check if query ends with " interact"
    let shouldEnterInteract = false;
    let actualQuery = cleanQuery;

    if (cleanQuery.endsWith(' interact')) {
        shouldEnterInteract = true;
        actualQuery = cleanQuery.replace(' interact', '').trim();
    }

    if (!actualQuery || actualQuery.length === 0) {
        filteredPrompts = [...allPrompts];
        updateHeaderTip(false);
    } else {
        filteredPrompts = allPrompts.filter(item =>
            item.title.toLowerCase().includes(actualQuery) ||
            item.prompt.toLowerCase().includes(actualQuery) ||
            item.tag.toLowerCase().includes(actualQuery)
        );
        updateHeaderTip(true);
    }

    renderGallery(filteredPrompts);

    if (shouldEnterInteract) {
        // Must delay slightly to ensure rendering is done
        setTimeout(enableInteractMode, 50);
    }
}

// Click-to-Copy Handler
async function handleCardClick(e) {
    const card = e.currentTarget;
    const promptText = decodeURIComponent(card.dataset.prompt);

    // Visual feedback
    card.style.borderColor = 'var(--accent-yellow)';
    setTimeout(() => {
        card.style.borderColor = '';
    }, 200);

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
        // ESCAPE LOGIC
        if (e.key === 'Escape') {
            if (isInteractMode) {
                disableInteractMode();
                return;
            }

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

        // SLASH SHORTCUT
        if (e.key === '/' && document.activeElement !== commandInput && !isInteractMode) {
            e.preventDefault();
            commandInput.focus();
            commandInput.value = '/';
            filterPrompts('');
        }

        // TOGGLE INTERACT MODE (Ctrl + I)
        if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'i') {
            e.preventDefault();
            if (isInteractMode) {
                disableInteractMode();
            } else {
                enableInteractMode();
            }
        }
    });
}

function handleInput(e) {
    const value = e.target.value;
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

    // 3. AUTOCOMPLETE MODE
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
                // If ending with " interact", it's handled in filterPrompts
                // But we should check here too just in case input event didn't catch the last char
                if (val.endsWith(' interact')) {
                    filterPrompts(val.slice(1)); // re-run filter to catch interact trigger
                }
            } else {
                executeCommand(val);
            }
            break;
    }
}

// ============================================
// Interact Mode Logic (Keyboard Navigation)
// ============================================

function enableInteractMode() {
    if (filteredPrompts.length === 0) {
        showSystemMessage('No items to interact with');
        return;
    }

    isInteractMode = true;
    focusedCardIndex = 0;

    // Blur input so arrows don't move cursor
    commandInput.blur();

    // Add visual indicator
    updateFocusVisuals();
    showSystemMessage('Interact Mode: Use Arrows to move, Enter to copy, ESC to exit');
}

function disableInteractMode() {
    isInteractMode = false;
    focusedCardIndex = -1;

    // Remove focus class from all
    document.querySelectorAll('.card').forEach(c => c.classList.remove('focused'));

    commandInput.focus();
    showSystemMessage('Interact Mode exited');
}

function setupInteractListeners() {
    document.addEventListener('keydown', (e) => {
        if (!isInteractMode) return;

        const cards = document.querySelectorAll('.card');
        if (cards.length === 0) return;

        // Calculate grid columns for Up/Down navigation
        // We can estimate columns by checking offsetLeft of first two items
        let columns = 1;
        if (cards.length > 1) {
            if (cards[1].offsetTop === cards[0].offsetTop) {
                // Determine how many fit in one row
                for (let i = 1; i < cards.length; i++) {
                    if (cards[i].offsetTop > cards[0].offsetTop) {
                        columns = i;
                        break;
                    }
                }
            }
        }

        switch (e.key) {
            case 'ArrowRight':
                e.preventDefault();
                focusedCardIndex = Math.min(focusedCardIndex + 1, cards.length - 1);
                updateFocusVisuals();
                break;

            case 'ArrowLeft':
                e.preventDefault();
                focusedCardIndex = Math.max(focusedCardIndex - 1, 0);
                updateFocusVisuals();
                break;

            case 'ArrowDown':
                e.preventDefault();
                focusedCardIndex = Math.min(focusedCardIndex + columns, cards.length - 1);
                updateFocusVisuals();
                break;

            case 'ArrowUp':
                e.preventDefault();
                focusedCardIndex = Math.max(focusedCardIndex - columns, 0);
                updateFocusVisuals();
                break;

            case 'Enter':
                e.preventDefault();
                if (focusedCardIndex >= 0 && cards[focusedCardIndex]) {
                    // Trigger click functionality directly
                    // We can reuse handleCardClick but we need to pass a fake event
                    const card = cards[focusedCardIndex];
                    const prompt = decodeURIComponent(card.dataset.prompt);
                    // Copy logic duplicated for simplicity without event object issues
                    navigator.clipboard.writeText(prompt).then(() => {
                        showSystemMessage('Copied to clipboard');
                        // Flash effect
                        card.style.borderColor = 'var(--accent-yellow)';
                        setTimeout(() => card.style.borderColor = '', 200);
                    });
                }
                break;
        }
    });
}

function updateFocusVisuals() {
    const cards = document.querySelectorAll('.card');
    cards.forEach((c, i) => {
        if (i === focusedCardIndex) {
            c.classList.add('focused');
            // Ensure visible in scroll view
            c.scrollIntoView({ behavior: 'smooth', block: 'center' });
        } else {
            c.classList.remove('focused');
        }
    });
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

window.selectAutocompleteItem = selectAutocompleteItem;


// ============================================
// Command Execution
// ============================================
function executeCommand(fullCmd) {
    const args = fullCmd.trim().split(' ');
    const cmdName = args[0].toLowerCase();
    const cmdArgs = args.slice(1);

    if (COMMANDS[cmdName]) {
        COMMANDS[cmdName].action(cmdArgs);
        commandInput.value = '';
    } else {
        showSystemMessage(`Command not found. Try 'help' or '/keyword'`);
    }
}

function changeTheme(args) {
    if (!args || args.length === 0) {
        showSystemMessage('Usage: theme [default|amber|dracula|cyberpunk]');
        return;
    }

    const theme = args[0].toLowerCase();
    const validThemes = ['default', 'amber', 'dracula', 'cyberpunk'];

    if (validThemes.includes(theme)) {
        const themeLink = document.getElementById('theme-style');
        if (themeLink) {
            themeLink.href = `../themes/${theme}.css`;
            showSystemMessage(`Theme changed to: ${theme}`);

            // Save preference
            localStorage.setItem('terminal-theme', theme);
        } else {
            showSystemMessage('Error: Theme stylesheet not found');
        }
    } else {
        showSystemMessage(`Invalid theme. Available: ${validThemes.join(', ')}`);
    }
}

function showHelp() {
    const helpText = Object.entries(COMMANDS)
        .map(([cmd, data]) => `<div style="display:flex; justify-content:space-between; width:250px"><span>${cmd}</span> <span style="opacity:0.6">${data.description}</span></div>`)
        .join('');

    const slashHelp = `<div style="margin-top:8px; padding-top:8px; border-top:1px solid rgba(255,255,255,0.1)">
        <div style="display:flex; justify-content:space-between; width:250px"><span>/query</span> <span style="opacity:0.6">filter prompts</span></div>
        <div style="display:flex; justify-content:space-between; width:250px"><span>Ctrl + I</span> <span style="opacity:0.6">toggle interact</span></div>
    </div>`;

    showSystemMessageHTML(`<div style="text-align:left; font-family:monospace; font-size:12px;">${helpText}${slashHelp}</div>`, 8000);
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

function updateHeaderTip(show) {
    const tipContainer = document.querySelector('.output-text');
    if (!tipContainer) return;

    if (show) {
        // Safe query display
        const query = commandInput.value.replace('/', '');
        const safeQuery = query.replace(/[<>]/g, '');

        tipContainer.innerHTML = `ls -la ./collection | grep <span class="highlight-query">"${safeQuery}"</span> <span class="tip-separator">TIP:</span> <span class="interact-tip">Try pressing <span class="key-combo">Ctrl + I</span> to interact!</span>`;
    } else {
        tipContainer.innerHTML = 'ls -la ./collection --format=grid';
    }
}
