/**
 * JayLL Resume - Terminal Edition
 * Handles resume loading and terminal interaction
 */

// ============================================
// State
// ============================================
let resumeData = null;
let commandHistory = [];
let historyIndex = -1;
let filteredCommands = [];
let selectedIndex = -1;

// ============================================
// DOM Elements
// ============================================
const terminalOutput = document.getElementById('terminal-output');
const resumeContent = document.getElementById('resume-content');
const commandInput = document.getElementById('command-input');
const autocomplete = document.getElementById('autocomplete');
const loadingLine = document.getElementById('loading-line');

// ============================================
// Command Registry
// ============================================
const COMMANDS = {
    home: {
        description: 'return to home',
        action: () => window.location.href = '/'
    },
    print: {
        description: 'download resume (pdf)',
        action: () => {
            const link = document.createElement('a');
            link.href = 'resume.pdf';
            link.download = 'Pham_Phu_Ngoc_Trai_Resume.pdf';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            appendOutput('Downloading resume PDF...', 'success');
        }
    },
    help: {
        description: 'show available commands',
        action: showHelp
    },
    clear: {
        description: 'clear terminal output',
        action: () => {
            renderResume(resumeData);
            appendOutput('Screen cleared (Resume re-rendered)', 'success');
        }
    },
    theme: {
        description: 'change terminal theme',
        action: (args) => changeTheme(args)
    }
};

// ============================================
// Mobile Viewport Height Handler
// ============================================
function setAppHeight() {
    const vh = window.visualViewport ? window.visualViewport.height : window.innerHeight;
    document.documentElement.style.setProperty('--app-height', `${vh}px`);
}

// ============================================
// Initialize
// ============================================
document.addEventListener('DOMContentLoaded', async () => {
    // Set initial viewport height
    setAppHeight();

    commandInput.focus();
    setupEventListeners();

    // Load saved theme
    const savedTheme = localStorage.getItem('terminal-theme');
    if (savedTheme) {
        const themeLink = document.getElementById('theme-style');
        if (themeLink) themeLink.href = `../themes/${savedTheme}.css`;
    }

    // Handle viewport resize (mobile keyboard)
    if (window.visualViewport) {
        window.visualViewport.addEventListener('resize', setAppHeight);
        window.visualViewport.addEventListener('scroll', setAppHeight);
    } else {
        window.addEventListener('resize', setAppHeight);
    }

    await loadResume();
});

// Focus input when clicking anywhere on terminal body
document.addEventListener('click', (e) => {
    // allow selecting text
    if (window.getSelection().toString().length > 0) return;

    // focus input unless clicking on a link
    if (e.target.tagName !== 'A') {
        commandInput.focus();
    }
});

// ============================================
// Resume Logic
// ============================================
async function loadResume() {
    try {
        const response = await fetch('resume.json');
        if (!response.ok) throw new Error('Failed to load resume data');

        resumeData = await response.json();

        // Hide loading
        if (loadingLine) loadingLine.style.display = 'none';

        renderResume(resumeData);

        // Initial success message
        appendCommandLine('cat ./resume.json | render-markdown', true);

    } catch (error) {
        console.error(error);
        if (loadingLine) loadingLine.innerHTML = `<div class="output-error">Error loading resume: ${error.message}</div>`;
    }
}

function renderResume(data) {
    if (!data) return;

    let html = `
        <div class="resume-container">
            <header class="resume-header">
                <div>
                    <h1 class="resume-name">${escapeHtml(data.basics?.name || 'Name')}</h1>
                    <div class="resume-title">${escapeHtml(data.basics?.label || '')}</div>
                </div>
                <div class="resume-contact">
                     ${data.basics?.email ? `<div>Email: <a href="mailto:${data.basics.email}" class="resume-link">${data.basics.email}</a></div>` : ''}
                     ${data.basics?.url ? `<div>Web: <a href="${data.basics.url}" target="_blank" class="resume-link">${data.basics.url.replace(/^https?:\/\//, '')}</a></div>` : ''}
                </div>
            </header>

            <div class="resume-section">
                <p class="job-summary">${escapeHtml(data.basics?.summary || '')}</p>
            </div>
    `;

    // Experience
    if (data.experience && data.experience.length > 0) {
        html += `
            <div class="resume-section">
                <h2 class="section-title"><span class="section-icon">💼</span> Experience</h2>
                ${data.experience.map(job => `
                    <div class="timeline-item">
                        <div class="job-header">
                            <span class="job-role">${escapeHtml(job.position)}</span>
                            <span class="job-company">@ ${escapeHtml(job.company)}</span>
                            <span class="job-date">${escapeHtml(job.startDate)} - ${escapeHtml(job.endDate)}</span>
                        </div>
                        <p class="job-summary">${escapeHtml(job.summary)}</p>
                    </div>
                `).join('')}
            </div>
        `;
    }

    // Projects (if any)
    if (data.projects && data.projects.length > 0) {
        html += `
            <div class="resume-section">
                <h2 class="section-title"><span class="section-icon">🚀</span> Projects</h2>
                ${data.projects.map(proj => `
                    <div class="timeline-item">
                        <div class="job-header">
                            <span class="job-role">${escapeHtml(proj.name)}</span>
                            ${proj.url ? `<a href="${proj.url}" target="_blank" class="resume-link" style="font-size:12px">View Project ↗</a>` : ''}
                        </div>
                        <p class="job-summary">${escapeHtml(proj.description)}</p>
                    </div>
                `).join('')}
            </div>
        `;
    }

    // Skills
    if (data.skills && data.skills.length > 0) {
        html += `
            <div class="resume-section">
                <h2 class="section-title"><span class="section-icon">⚡</span> Skills</h2>
                <div class="skills-grid">
                    ${data.skills.map(skill => `<span class="skill-tag">${escapeHtml(skill)}</span>`).join('')}
                </div>
            </div>
        `;
    }

    // Education
    if (data.education && data.education.length > 0) {
        html += `
            <div class="resume-section">
                <h2 class="section-title"><span class="section-icon">🎓</span> Education</h2>
                ${data.education.map(edu => `
                    <div class="edu-item">
                        <div class="edu-school">${escapeHtml(edu.institution)}</div>
                        <div class="edu-degree">${escapeHtml(edu.studyType)} in ${escapeHtml(edu.area)}</div>
                        <div class="job-date">${escapeHtml(edu.startDate)} - ${escapeHtml(edu.endDate)}</div>
                    </div>
                `).join('')}
            </div>
        `;
    }

    html += `</div>`; // Close container
    resumeContent.innerHTML = html;
}

// ============================================
// Terminal Logic
// ============================================

function setupEventListeners() {
    commandInput.addEventListener('input', handleInput);
    commandInput.addEventListener('keydown', handleKeyDown);

    // Global Shortcuts
    document.addEventListener('keydown', (e) => {
        // ESC to clear/focus
        if (e.key === 'Escape') {
            if (document.activeElement !== commandInput) {
                commandInput.focus();
            }
            commandInput.value = '';
            hideAutocomplete();
        }
    });
}

function handleInput(e) {
    const value = e.target.value.toLowerCase().trim();

    if (value.length === 0) {
        hideAutocomplete();
        return;
    }

    // Autocomplete logic
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
    // SCROLLING LOGIC (Priority)
    const SCROLL_STEP = 50;

    if (['ArrowUp', 'ArrowDown', 'PageUp', 'PageDown', 'Home', 'End'].includes(e.key)) {
        // If autocomplete is visible, up/down navigates it
        if (autocomplete.classList.contains('visible') && (e.key === 'ArrowUp' || e.key === 'ArrowDown')) {
            e.preventDefault();
            if (e.key === 'ArrowDown') selectedIndex = Math.min(selectedIndex + 1, filteredCommands.length - 1);
            else selectedIndex = Math.max(selectedIndex - 1, 0);
            renderAutocomplete();
            return;
        }

        // Otherwise handle SCROLLING
        e.preventDefault();

        switch (e.key) {
            case 'ArrowUp':
                terminalOutput.scrollBy({ top: -SCROLL_STEP, behavior: 'auto' });
                break;
            case 'ArrowDown':
                terminalOutput.scrollBy({ top: SCROLL_STEP, behavior: 'auto' });
                break;
            case 'PageUp':
                terminalOutput.scrollBy({ top: -terminalOutput.clientHeight * 0.8, behavior: 'smooth' });
                break;
            case 'PageDown':
                terminalOutput.scrollBy({ top: terminalOutput.clientHeight * 0.8, behavior: 'smooth' });
                break;
            case 'Home':
                terminalOutput.scrollTo({ top: 0, behavior: 'smooth' });
                break;
            case 'End':
                terminalOutput.scrollTo({ top: terminalOutput.scrollHeight, behavior: 'smooth' });
                break;
        }
        return;
    }

    // Standard Terminal Logic
    if (e.key === 'Tab') {
        e.preventDefault();
        if (filteredCommands.length > 0 && selectedIndex >= 0) {
            commandInput.value = filteredCommands[selectedIndex].cmd;
            hideAutocomplete();
        }
    } else if (e.key === 'Enter') {
        e.preventDefault();
        executeCommand();
    }
}

// ============================================
// Autocomplete UI
// ============================================
function showAutocomplete() {
    const inputRect = commandInput.getBoundingClientRect();
    const spaceBelow = window.innerHeight - inputRect.bottom;
    autocomplete.className = spaceBelow < 200 ? 'autocomplete dropup visible' : 'autocomplete dropdown visible';
}

function hideAutocomplete() {
    autocomplete.classList.remove('visible');
    selectedIndex = -1;
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
    executeCommand();
}

window.selectAutocompleteItem = selectAutocompleteItem;

// ============================================
// Command Execution
// ============================================
function executeCommand() {
    const input = commandInput.value.trim().toLowerCase();
    if (input.length === 0) return;

    // Show executed command
    appendCommandLine(input);

    // Execute command
    const args = input.split(' ');
    const cmdName = args[0];
    const cmdArgs = args.slice(1);

    if (COMMANDS[cmdName]) {
        COMMANDS[cmdName].action(cmdArgs);
    } else {
        appendOutput(`Command not found: ${input}`, 'error');
    }

    commandInput.value = '';
    hideAutocomplete();

    // Auto scroll to bottom only if it was a command execution? 
    // For resume page, we might NOT want to lose scroll position if user types something benign.
    // But typically terminal scrolls to bottom. 
    // Let's scroll to bottom if it's an error or small output.
    // Actually, preserve scroll position if possible? 
    // No, standard terminal always appends.
    // But here resume is "above" the command line.
    scrollToBottom();
}

// ============================================
// Output Helpers
// ============================================
function appendCommandLine(cmd, isSystem = false) {
    const line = document.createElement('div');
    line.className = 'output-line';
    line.innerHTML = `
        <div class="output-command">
            <span class="output-prompt">❯</span>
            <span class="output-text">${escapeHtml(cmd)}</span>
        </div>
    `;
    // If system initiated (like initial load), insert before resume? No, standard append.
    // The resume content is inside "resume-content" div which is part of output.
    // We should append commands BELOW resume content.
    terminalOutput.appendChild(line);
}

function appendOutput(text, type = 'result') {
    const line = document.createElement('div');
    line.className = `output-${type}`;
    line.style.paddingLeft = '20px';
    line.innerHTML = text;
    terminalOutput.appendChild(line);
}

function showHelp() {
    const helpHtml = Object.entries(COMMANDS).map(([cmd, data]) =>
        `<div><span style="color:var(--accent-yellow)">${cmd}</span> - <span style="color:var(--text-muted)">${data.description}</span></div>`
    ).join('');
    appendOutput(helpHtml);
}

function scrollToBottom() {
    terminalOutput.scrollTo({
        top: terminalOutput.scrollHeight,
        behavior: 'smooth'
    });
}

function escapeHtml(text) {
    if (!text) return '';
    return text
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

function changeTheme(args) {
    if (!args || args.length === 0) {
        appendOutput('Usage: theme [default|amber|dracula|cyberpunk]', 'result');
        return;
    }

    const theme = args[0].toLowerCase();
    const validThemes = ['default', 'amber', 'dracula', 'cyberpunk'];

    if (validThemes.includes(theme)) {
        const themeLink = document.getElementById('theme-style');
        if (themeLink) {
            themeLink.href = `../themes/${theme}.css`;
            appendOutput(`Theme changed to: ${theme}`, 'success');

            // Save preference
            localStorage.setItem('terminal-theme', theme);
        } else {
            appendOutput('Error: Theme stylesheet not found.', 'error');
        }
    } else {
        appendOutput(`Invalid theme. Available: ${validThemes.join(', ')}`, 'error');
    }
}
