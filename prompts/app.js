/**
 * jayLL AI Collection - Prompt Gallery
 * Features: Dark/Light mode, Click-to-copy, Tag-based data loading
 */

// State
let allPrompts = [];
let filteredPrompts = [];

// DOM Elements
const gallery = document.getElementById('gallery');
const searchInput = document.getElementById('searchInput');
const clearBtn = document.getElementById('clearSearch');
const emptyState = document.getElementById('emptyState');
const loading = document.getElementById('loading');
const toast = document.getElementById('toast');
const themeToggle = document.getElementById('themeToggle');

// Initialize
document.addEventListener('DOMContentLoaded', async () => {
    initTheme();
    setupEventListeners();
    await loadAllPrompts();
});

// Theme Management
function initTheme() {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme = savedTheme || (prefersDark ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', theme);
}

function toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
}

// Load Prompts from Data Files
async function loadAllPrompts() {
    loading.classList.add('visible');
    gallery.innerHTML = '';

    try {
        // Load collections list from index.json
        const indexResponse = await fetch('data/index.json');
        if (!indexResponse.ok) throw new Error('Could not load index.json');
        const { collections } = await indexResponse.json();

        // Load all collections in parallel
        const loadPromises = collections.map(tag => loadPromptCollection(tag));
        const results = await Promise.allSettled(loadPromises);

        allPrompts = [];
        results.forEach((result, index) => {
            if (result.status === 'fulfilled' && result.value) {
                const tag = collections[index];
                const promptsWithTag = result.value.map(p => ({ ...p, tag }));
                allPrompts.push(...promptsWithTag);
            }
        });

        // Load prompt content from separate files if promptFile is specified
        await loadPromptContents();

        if (allPrompts.length === 0) {
            // Fallback to sample data if no files loaded
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

// Load prompt contents from separate files
async function loadPromptContents() {
    const loadPromises = allPrompts.map(async (item) => {
        // If promptFile is specified, load content from that file
        if (item.promptFile) {
            try {
                const response = await fetch(`data/${item.promptFile}`);
                if (response.ok) {
                    item.prompt = await response.text();
                } else {
                    console.warn(`Could not load prompt file: ${item.promptFile}`);
                    item.prompt = item.prompt || '';
                }
            } catch (error) {
                console.warn(`Error loading ${item.promptFile}:`, error.message);
                item.prompt = item.prompt || '';
            }
        }
        return item;
    });

    await Promise.all(loadPromises);
}

async function loadPromptCollection(tag) {
    try {
        const response = await fetch(`data/${tag}.json`);
        if (!response.ok) throw new Error(`Failed to load ${tag}`);
        return await response.json();
    } catch (error) {
        console.warn(`Could not load ${tag}.json:`, error.message);
        return null;
    }
}

// Fallback Sample Data
function getSamplePrompts() {
    return [
        {
            id: 'sample-001',
            title: 'Cyberpunk City Night',
            prompt: 'A sprawling cyberpunk cityscape at night, neon lights reflecting off wet streets, towering holographic advertisements, flying cars weaving between massive skyscrapers, rain falling through beams of colorful light, ultra detailed, cinematic lighting, 8k resolution',
            tag: 'sci-fi',
            imageUrl: 'https://picsum.photos/seed/cyber1/400/400'
        },
        {
            id: 'sample-002',
            title: 'Enchanted Forest Portal',
            prompt: 'A magical portal in an enchanted forest, glowing with ethereal blue and purple light, ancient trees with luminescent leaves, fireflies dancing around mystical runes carved into stone pillars, fantasy atmosphere, digital art, highly detailed',
            tag: 'fantasy',
            imageUrl: 'https://picsum.photos/seed/forest1/400/400'
        },
        {
            id: 'sample-003',
            title: 'Minimalist Professional',
            prompt: 'A minimalist professional avatar, clean geometric background, soft studio lighting, confident expression, business casual attire, modern corporate style, high quality portrait',
            tag: 'avatar',
            imageUrl: 'https://picsum.photos/seed/avatar3/400/400'
        }
    ];
}

// Render Gallery Cards
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
            aria-label="Click to copy: ${item.title}"
        >
            <img 
                src="${item.imageUrl}" 
                alt="${item.title}" 
                class="card-image"
                loading="lazy"
            >
            <div class="card-content">
                <h3 class="card-title">${item.title}</h3>
            </div>
            <div class="card-overlay">
                <span class="overlay-title">${item.title}</span>
                <span class="overlay-tag">${item.tag}</span>
                <span class="overlay-hint">Click to copy prompt</span>
            </div>
        </article>
    `).join('');

    // Attach click-to-copy event listeners
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

// Event Listeners
function setupEventListeners() {
    // Theme toggle
    themeToggle.addEventListener('click', toggleTheme);

    // Real-time search
    searchInput.addEventListener('input', handleSearch);

    // Clear button
    clearBtn.addEventListener('click', () => {
        searchInput.value = '';
        clearBtn.classList.remove('visible');
        filteredPrompts = [...allPrompts];
        renderGallery(filteredPrompts);
        searchInput.focus();
    });

    // Show/hide clear button
    searchInput.addEventListener('input', () => {
        clearBtn.classList.toggle('visible', searchInput.value.length > 0);
    });
}

// Search Handler
function handleSearch(e) {
    const query = e.target.value.toLowerCase().trim();

    if (query.length === 0) {
        filteredPrompts = [...allPrompts];
        renderGallery(filteredPrompts);
        return;
    }

    filteredPrompts = allPrompts.filter(item =>
        item.title.toLowerCase().includes(query) ||
        item.prompt.toLowerCase().includes(query) ||
        item.tag.toLowerCase().includes(query)
    );

    renderGallery(filteredPrompts);
}

// Click-to-Copy Handler
async function handleCardClick(e) {
    const card = e.currentTarget;
    const promptText = decodeURIComponent(card.dataset.prompt);

    try {
        await navigator.clipboard.writeText(promptText);
        showToast();
    } catch (err) {
        // Fallback for older browsers
        const textarea = document.createElement('textarea');
        textarea.value = promptText;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        showToast();
    }
}

// Toast Notification
let toastTimeout;
function showToast() {
    clearTimeout(toastTimeout);
    toast.classList.add('visible');

    toastTimeout = setTimeout(() => {
        toast.classList.remove('visible');
    }, 2000);
}
