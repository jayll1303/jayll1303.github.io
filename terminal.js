/**
 * JayLL Terminal - Interactive Command Line Interface
 * Features: Command execution, autocomplete, keyboard navigation
 */

// ============================================
// Command Registry
// ============================================
const COMMANDS = {
    prompts: {
        description: 'Navigate to prompts gallery',
        action: () => navigateTo('/prompts/')
    },
    resume: {
        description: 'View professional resume',
        action: () => navigateTo('/resume/')
    },
    help: {
        description: 'Show available commands',
        action: showHelp
    },
    clear: {
        description: 'Clear terminal output',
        action: clearTerminal
    },
    about: {
        description: 'About JayLL',
        action: showAbout
    },
    github: {
        description: 'Open GitHub profile',
        action: () => {
            window.open('https://github.com/jayll1303', '_blank');
            appendOutput('Opening GitHub...', 'success');
        }
    },
    home: {
        description: 'Go to home page',
        action: () => {
            appendOutput('Already at home!', 'success');
        }
    }
};

// ============================================
// State
// ============================================
let selectedIndex = -1;
let filteredCommands = [];
let commandHistory = [];
let historyIndex = -1;

// ============================================
// DOM Elements
// ============================================
const terminalOutput = document.getElementById('terminal-output');
const commandInput = document.getElementById('command-input');
const autocomplete = document.getElementById('autocomplete');
const currentPath = document.getElementById('current-path');

// ============================================
// Initialize
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    showWelcome();
    setupEventListeners();
    commandInput.focus();
});

// Focus input when clicking anywhere on terminal body
document.querySelector('.terminal-body')?.addEventListener('click', () => {
    commandInput.focus();
});

// ============================================
// Event Listeners
// ============================================
function setupEventListeners() {
    // Input events
    commandInput.addEventListener('input', handleInput);
    commandInput.addEventListener('keydown', handleKeyDown);

    // Global keyboard shortcuts
    document.addEventListener('keydown', handleGlobalKeys);

    // Click outside to close autocomplete
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.input-container')) {
            hideAutocomplete();
        }
    });
}

// ============================================
// Input Handling
// ============================================
function handleInput(e) {
    const value = e.target.value.toLowerCase().trim();

    if (value.length === 0) {
        hideAutocomplete();
        return;
    }

    // Filter commands
    filteredCommands = Object.entries(COMMANDS)
        .filter(([cmd]) => cmd.startsWith(value))
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
            e.preventDefault();
            if (autocomplete.classList.contains('visible')) {
                selectedIndex = Math.min(selectedIndex + 1, filteredCommands.length - 1);
                renderAutocomplete();
            } else if (commandHistory.length > 0) {
                // Navigate command history
                historyIndex = Math.min(historyIndex + 1, commandHistory.length - 1);
                commandInput.value = commandHistory[historyIndex] || '';
            }
            break;

        case 'ArrowUp':
            e.preventDefault();
            if (autocomplete.classList.contains('visible')) {
                selectedIndex = Math.max(selectedIndex - 1, 0);
                renderAutocomplete();
            } else if (commandHistory.length > 0) {
                // Navigate command history
                historyIndex = Math.max(historyIndex - 1, 0);
                commandInput.value = commandHistory[historyIndex] || '';
            }
            break;

        case 'Tab':
            e.preventDefault();
            if (filteredCommands.length > 0 && selectedIndex >= 0) {
                commandInput.value = filteredCommands[selectedIndex].cmd;
                hideAutocomplete();
            }
            break;

        case 'Enter':
            e.preventDefault();
            executeCommand();
            break;

        case 'Escape':
            if (commandInput.value.length > 0) {
                commandInput.value = '';
                hideAutocomplete();
            }
            break;
    }
}

function handleGlobalKeys(e) {
    // ESC to focus input and clear
    if (e.key === 'Escape' && document.activeElement !== commandInput) {
        commandInput.focus();
        commandInput.value = '';
        hideAutocomplete();
    }
}

// ============================================
// Autocomplete
// ============================================
function showAutocomplete() {
    positionAutocomplete();
    autocomplete.classList.add('visible');
}

function hideAutocomplete() {
    autocomplete.classList.remove('visible');
    selectedIndex = -1;
    filteredCommands = [];
}

function positionAutocomplete() {
    const inputRect = commandInput.getBoundingClientRect();
    const spaceBelow = window.innerHeight - inputRect.bottom;
    const spaceAbove = inputRect.top;

    // Remove both classes first
    autocomplete.classList.remove('dropdown', 'dropup');

    // Add appropriate class based on available space
    if (spaceBelow < 200 && spaceAbove > spaceBelow) {
        autocomplete.classList.add('dropup');
    } else {
        autocomplete.classList.add('dropdown');
    }
}

function renderAutocomplete() {
    autocomplete.innerHTML = filteredCommands.map((item, index) => `
        <div class="autocomplete-item ${index === selectedIndex ? 'selected' : ''}" 
             data-cmd="${item.cmd}"
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
    executeCommand();
}

// ============================================
// Command Execution
// ============================================
function executeCommand() {
    const input = commandInput.value.trim().toLowerCase();

    if (input.length === 0) return;

    // Add to history
    if (commandHistory[commandHistory.length - 1] !== input) {
        commandHistory.push(input);
    }
    historyIndex = commandHistory.length;

    // Show command in output
    appendCommandLine(input);

    // Execute command
    const command = COMMANDS[input];
    if (command) {
        command.action();
    } else {
        appendOutput(`Command not found: ${input}. Type 'help' to see available commands.`, 'error');
    }

    // Clear input
    commandInput.value = '';
    hideAutocomplete();

    // Scroll to bottom
    scrollToBottom();
}

// ============================================
// Output Functions
// ============================================
function appendCommandLine(cmd) {
    const line = document.createElement('div');
    line.className = 'output-line';
    line.innerHTML = `
        <div class="output-command">
            <span class="output-prompt">❯</span>
            <span class="output-text">${escapeHtml(cmd)}</span>
        </div>
    `;
    terminalOutput.appendChild(line);
}

function appendOutput(text, type = 'result') {
    const line = document.createElement('div');
    line.className = `output-${type}`;
    line.innerHTML = text;

    // Find last output-line and append to it, or create new one
    const lastLine = terminalOutput.querySelector('.output-line:last-child');
    if (lastLine) {
        lastLine.appendChild(line);
    } else {
        const wrapper = document.createElement('div');
        wrapper.className = 'output-line';
        wrapper.appendChild(line);
        terminalOutput.appendChild(wrapper);
    }

    scrollToBottom();
}

function appendCustomOutput(html) {
    const line = document.createElement('div');
    line.className = 'output-line';
    line.innerHTML = html;
    terminalOutput.appendChild(line);
    scrollToBottom();
}

function scrollToBottom() {
    terminalOutput.scrollTo({
        top: terminalOutput.scrollHeight,
        behavior: 'smooth'
    });
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// ============================================
// Command Actions
// ============================================
function showWelcome() {
    const asciiArt = `
     ██╗ █████╗ ██╗   ██╗██╗     ██╗     
     ██║██╔══██╗╚██╗ ██╔╝██║     ██║     
     ██║███████║ ╚████╔╝ ██║     ██║     
██   ██║██╔══██║  ╚██╔╝  ██║     ██║     
╚█████╔╝██║  ██║   ██║   ███████╗███████╗
 ╚════╝ ╚═╝  ╚═╝   ╚═╝   ╚══════╝╚══════╝`;

    const welcomeHtml = `
        <div class="welcome-block">
            <pre class="ascii-art">${asciiArt}</pre>
            <p class="welcome-text">Welcome to JayLL Terminal v1.0</p>
            <p class="welcome-hint">Type <span class="highlight">help</span> to see available commands, or start typing to explore.</p>
        </div>
    `;

    terminalOutput.innerHTML = welcomeHtml;
}

function showHelp() {
    const helpHtml = `
        <div class="output-result">
            <div class="help-table">
                ${Object.entries(COMMANDS).map(([cmd, data]) => `
                    <div class="help-row">
                        <span class="help-command">${cmd}</span>
                        <span class="help-desc">${data.description}</span>
                    </div>
                `).join('')}
            </div>
        </div>
    `;

    const lastLine = terminalOutput.querySelector('.output-line:last-child');
    if (lastLine) {
        lastLine.innerHTML += helpHtml;
    }
}

function showAbout() {
    const aboutHtml = `
        <div class="output-result">
            <div class="about-block">
                <div class="about-row">
                    <span class="about-label">Name:</span>
                    <span class="about-value">JayLL</span>
                </div>
                <div class="about-row">
                    <span class="about-label">Role:</span>
                    <span class="about-value">Developer & Creator</span>
                </div>
                <div class="about-row">
                    <span class="about-label">GitHub:</span>
                    <a href="https://github.com/jayll1303" target="_blank" class="about-link">github.com/jayll1303</a>
                </div>
                <div class="about-row">
                    <span class="about-label">Projects:</span>
                    <span class="about-value">AI Prompts, Games, Web Apps</span>
                </div>
            </div>
        </div>
    `;

    const lastLine = terminalOutput.querySelector('.output-line:last-child');
    if (lastLine) {
        lastLine.innerHTML += aboutHtml;
    }
}

function clearTerminal() {
    terminalOutput.innerHTML = '';
    appendOutput('Terminal cleared.', 'success');
}

// ============================================
// Navigation
// ============================================
function navigateTo(path) {
    // Show transition
    const transition = document.querySelector('.page-transition');
    if (transition) {
        transition.classList.add('active');
        setTimeout(() => {
            window.location.href = path;
        }, 300);
    } else {
        window.location.href = path;
    }
}

// Make functions globally available for onclick handlers
window.selectAutocompleteItem = selectAutocompleteItem;
