(function() {
  'use strict';
  
  // DOM elements
  const body = document.body;
  const pageContent = document.querySelector('.page-content');
  const sidebar = document.getElementById('sidebar');
  const layout = document.getElementById('layout');
  const toggleBtn = document.getElementById('themeToggle');
  const newChatBtn = document.getElementById('newChatBtn');
  const brandHome = document.getElementById('brandHome');
  const composerInput = document.querySelector('.composer__input');
  const scrollEl = document.querySelector('.sidebar__scroll');
  const sidebarOverlay = document.getElementById('sidebarOverlay');
  
  // Constants
  const THEME_KEY = 'ui-theme';
  const SIDEBAR_KEY = 'sidebar-collapsed';
  const SCROLL_KEY = 'sidebar:scrollTop';
  
  // Utility: Safe localStorage access
  const storage = {
    get: (key) => {
      try { return localStorage.getItem(key); } catch(e) { return null; }
    },
    set: (key, value) => {
      try { localStorage.setItem(key, value); } catch(e) {}
    }
  };
  
  const session = {
    get: (key) => {
      try { return sessionStorage.getItem(key); } catch(e) { return null; }
    },
    set: (key, value) => {
      try { sessionStorage.setItem(key, value); } catch(e) {}
    }
  };
  
  // Theme management
  function setThemeIcon() {
    if (!toggleBtn) return;
    const isLight = body.classList.contains('app--light');
    toggleBtn.textContent = isLight ? '☀️' : '🌙';
    updateCategoryIcons();
  }
  
  function updateCategoryIcons() {
    const isLight = body.classList.contains('app--light');
    const categoryItems = document.querySelectorAll('.category-item');
    categoryItems.forEach(item => {
      const iconElement = item.querySelector('.category-icon');
      if (iconElement) {
        const iconLight = item.getAttribute('data-icon-light');
        const iconDark = item.getAttribute('data-icon-dark');
        if (isLight && iconLight) {
          iconElement.textContent = iconLight;
        } else if (!isLight && iconDark) {
          iconElement.textContent = iconDark;
        }
      }
    });
  }
  
  function loadTheme() {
    const saved = storage.get(THEME_KEY);
    if (saved === 'light') {
      body.classList.remove('app--dark');
      body.classList.add('app--light');
    } else if (saved === 'dark') {
      body.classList.remove('app--light');
      body.classList.add('app--dark');
    } else {
      const prefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
      if (prefersLight) {
        body.classList.remove('app--dark');
        body.classList.add('app--light');
      }
    }
    setThemeIcon();
  }
  
  if (toggleBtn) {
    toggleBtn.addEventListener('click', function() {
      const toLight = !body.classList.contains('app--light');
      body.classList.toggle('app--light', toLight);
      body.classList.toggle('app--dark', !toLight);
      storage.set(THEME_KEY, toLight ? 'light' : 'dark');
      setThemeIcon();
    });
  }
  
  // Sidebar management
  // Cập nhật overlay khi resize
  function updateSidebarOverlay() {
    if (!sidebar || !sidebarOverlay) return;
    const isMobile = window.innerWidth <= 640;
    const isCollapsed = sidebar.classList.contains('sidebar--collapsed');
    
    if (isMobile && !isCollapsed) {
      sidebarOverlay.classList.add('is-active');
    } else {
      sidebarOverlay.classList.remove('is-active');
    }
  }
  
  function loadSidebarState() {
    if (!sidebar || !layout) return;
    const saved = storage.get(SIDEBAR_KEY);
    if (saved === 'true') {
      sidebar.classList.add('sidebar--collapsed');
      layout.classList.add('layout--sidebar-collapsed');
    }
    // Cập nhật overlay sau khi load state
    updateSidebarOverlay();
  }
  
  function toggleSidebar() {
    if (!sidebar || !layout) return;
    const isCollapsed = sidebar.classList.toggle('sidebar--collapsed');
    layout.classList.toggle('layout--sidebar-collapsed', isCollapsed);
    storage.set(SIDEBAR_KEY, isCollapsed ? 'true' : 'false');
    // Cập nhật overlay
    updateSidebarOverlay();
  }
  
  // Collapse sidebar không có animation (dùng khi sidebar đã collapsed sẵn)
  function collapseSidebarNoAnimation() {
    if (!sidebar || !layout) return;
    if (sidebar.classList.contains('sidebar--collapsed')) return; // Đã collapsed rồi thì không làm gì
    
    // Tạm thời disable transition
    const sidebarStyle = sidebar.style.transition;
    const layoutStyle = layout.style.transition;
    sidebar.style.transition = 'none';
    layout.style.transition = 'none';
    
    // Collapse sidebar
    sidebar.classList.add('sidebar--collapsed');
    layout.classList.add('layout--sidebar-collapsed');
    storage.set(SIDEBAR_KEY, 'true');
    updateSidebarOverlay();
    
    // Khôi phục transition sau một frame
    requestAnimationFrame(function() {
      sidebar.style.transition = sidebarStyle;
      layout.style.transition = layoutStyle;
    });
  }
  
  // Collapse sidebar với animation (dùng khi sidebar đang mở)
  function collapseSidebarWithAnimation() {
    if (!sidebar || !layout) return;
    if (sidebar.classList.contains('sidebar--collapsed')) return; // Đã collapsed rồi thì không làm gì
    
    toggleSidebar(); // Dùng toggleSidebar để có animation
  }
  
  // Đóng sidebar khi click overlay
  if (sidebarOverlay) {
    sidebarOverlay.addEventListener('click', function() {
      if (sidebar && !sidebar.classList.contains('sidebar--collapsed')) {
        toggleSidebar();
      }
    });
  }
  
  window.addEventListener('resize', updateSidebarOverlay);
  
  // Navigation
  function goHomeState() {
    body.classList.add('is-home');
    if (pageContent) pageContent.innerHTML = '';
    if (composerInput) composerInput.focus();
    const mainContent = document.querySelector('.main__content');
    if (mainContent && typeof mainContent.scrollTo === 'function') {
      mainContent.scrollTo({ top: 0, behavior: 'instant' });
    }
  }
  
  if (newChatBtn) {
    newChatBtn.addEventListener('click', function(e) {
      e.preventDefault();
      goHomeState();
    });
  }
  
  if (brandHome) {
    brandHome.addEventListener('click', function(e) {
      e.preventDefault();
      toggleSidebar();
    });
    brandHome.addEventListener('keypress', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleSidebar();
      }
    });
  }
  
  // Sidebar scroll persistence
  if (scrollEl) {
    const saved = session.get(SCROLL_KEY);
    if (saved !== null) {
      scrollEl.scrollTop = parseInt(saved, 10) || 0;
    }
    
    const persistScroll = () => session.set(SCROLL_KEY, String(scrollEl.scrollTop));
    
    window.addEventListener('beforeunload', persistScroll);
    document.addEventListener('click', function(e) {
      const link = e.target && e.target.closest ? e.target.closest('a') : null;
      if (link && link.getAttribute('href')) persistScroll();
    }, true);
  }
  
  // Active link highlighting và auto-collapse sidebar trên mobile
  try {
    // Xử lý chat links
    const chatLinks = document.querySelectorAll('.chat__link');
    if (chatLinks.length) {
      const currentPath = location.pathname.replace(/\/+$/, '');
      chatLinks.forEach(function(link) {
        const href = (link.getAttribute('href') || '').replace(location.origin, '').replace(/\/+$/, '');
        if (href === currentPath) link.classList.add('is-active');
        
        // Trên mobile, tự động collapse sidebar khi click vào chat link
        link.addEventListener('click', function() {
          const isMobile = window.innerWidth <= 640;
          if (isMobile && sidebar) {
            if (sidebar.classList.contains('sidebar--collapsed')) {
              // Đã collapsed rồi thì không làm gì
              return;
            } else {
              // Đang mở thì collapse với animation
              collapseSidebarWithAnimation();
            }
          }
        });
      });
    }
    
    // Xử lý category links (nav__item có href bắt đầu bằng '/categories/')
    const categoryLinks = document.querySelectorAll('.sidebar__section .nav__item[href^="/categories/"]');
    if (categoryLinks.length) {
      categoryLinks.forEach(function(link) {
        // Trên mobile, tự động collapse sidebar khi click vào category link
        link.addEventListener('click', function() {
          const isMobile = window.innerWidth <= 640;
          if (isMobile && sidebar) {
            if (sidebar.classList.contains('sidebar--collapsed')) {
              // Đã collapsed rồi thì không làm gì
              return;
            } else {
              // Đang mở thì collapse với animation
              collapseSidebarWithAnimation();
            }
          }
        });
      });
    }
  } catch(e) {}
  
  // Transform post content into chat bubbles
  if (pageContent && !body.classList.contains('is-home')) {
    const h2s = pageContent.querySelectorAll('h2');
    if (h2s.length) {
      const thread = document.createElement('div');
      thread.className = 'chat-thread';
      
      const createMessage = (msgClass) => {
        const div = document.createElement('div');
        div.className = 'message ' + msgClass;
        return div;
      };
      
      // Handle content before first H2
      const firstH2 = h2s[0];
      let cursor = pageContent.firstChild;
      if (cursor && cursor !== firstH2) {
        const preBot = createMessage('message--bot');
        while (cursor && cursor !== firstH2) {
          const next = cursor.nextSibling;
          preBot.appendChild(cursor);
          cursor = next;
        }
        if (preBot.childNodes.length) thread.appendChild(preBot);
      }
      
      // Handle each H2 and following content
      for (let i = 0; i < h2s.length; i++) {
        const h2 = h2s[i];
        const afterH2 = h2.nextSibling;
        
        const userMsg = createMessage('message--user');
        userMsg.appendChild(h2);
        thread.appendChild(userMsg);
        
        const botMsg = createMessage('message--bot');
        const stopAt = h2s[i + 1] || null;
        let node = afterH2;
        while (node && node !== stopAt) {
          const next = node.nextSibling;
          botMsg.appendChild(node);
          node = next;
        }
        if (botMsg.childNodes.length) thread.appendChild(botMsg);
      }
      
      pageContent.innerHTML = '';
      pageContent.appendChild(thread);
      
      // Enhance code blocks with copy button
      const allCodeBlocks = pageContent.querySelectorAll('pre > code');
      allCodeBlocks.forEach(function(code) {
        const pre = code.parentElement;
        if (pre.parentElement && pre.parentElement.classList.contains('codeblock')) return;
        
        // Create wrapper
        const wrap = document.createElement('div');
        wrap.className = 'codeblock';
        
        const btn = document.createElement('button');
        btn.className = 'codeblock__btn';
        btn.type = 'button';
        btn.innerHTML = '❏';
        btn.setAttribute('aria-label', 'Copy code');
        
        pre.parentElement.insertBefore(wrap, pre);
        wrap.appendChild(pre);
        wrap.appendChild(btn);
        
        // Copy functionality
        btn.addEventListener('click', function() {
          const text = code.innerText;
          const done = () => {
            btn.innerHTML = '✓';
            setTimeout(() => btn.innerHTML = '📋', 1200);
          };
          
          const fallbackCopy = () => {
            try {
              const ta = document.createElement('textarea');
              ta.value = text;
              document.body.appendChild(ta);
              ta.select();
              document.execCommand('copy');
              document.body.removeChild(ta);
              done();
            } catch(e) {}
          };
          
          if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(text).then(done).catch(fallbackCopy);
          } else {
            fallbackCopy();
          }
        });
      });
    }
  }
  
  // Initialize
  loadTheme();
  loadSidebarState();
})();

