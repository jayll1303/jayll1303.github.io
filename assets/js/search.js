(function() {
  'use strict';

  const container = document.querySelector('.search-container');
  if (!container) return;

  const input = document.querySelector('.composer__input');
  const resultsContainer = document.getElementById('searchResults');
  const tagCloud = document.getElementById('tagCloud');
  const dataEl = document.getElementById('searchData');
  const navSearch = document.getElementById('searchNav');

  if (navSearch) {
    navSearch.classList.add('is-active');
  }

  let posts = [];
  if (dataEl) {
    try {
      posts = JSON.parse(dataEl.textContent.trim()) || [];
    } catch (e) {
      console.error('Không thể đọc dữ liệu tìm kiếm', e);
    }
  }

  const uniqueTags = Array.from(new Set(posts.flatMap(function(post) {
    return Array.isArray(post.tags) ? post.tags : [];
  }))).sort(function(a, b) {
    return a.localeCompare(b, undefined, { sensitivity: 'base' });
  });

  function createResultItem(post) {
    const item = document.createElement('a');
    item.className = 'search-result';
    item.href = post.url;
    item.role = 'listitem';

    const title = document.createElement('div');
    title.className = 'search-result__title';
    title.textContent = post.title;

    const meta = document.createElement('div');
    meta.className = 'search-result__meta';
    const date = document.createElement('span');
    date.textContent = post.date || '';
    const tagsWrap = document.createElement('span');
    tagsWrap.className = 'search-result__tags';
    if (Array.isArray(post.tags)) {
      post.tags.forEach(function(tag) {
        const tagEl = document.createElement('span');
        tagEl.className = 'search-tag';
        tagEl.textContent = '#' + tag;
        tagsWrap.appendChild(tagEl);
      });
    }

    meta.appendChild(date);
    if (tagsWrap.childNodes.length) {
      meta.appendChild(document.createTextNode(' · '));
      meta.appendChild(tagsWrap);
    }

    item.appendChild(title);
    item.appendChild(meta);
    return item;
  }

  function renderEmptyState(text) {
    resultsContainer.innerHTML = '';
    const p = document.createElement('p');
    p.className = 'search-placeholder';
    p.textContent = text;
    resultsContainer.appendChild(p);
  }

  function filterPosts(query) {
    if (!query) return posts.slice(0, 12);
    const terms = query.split(/[,\s]+/).map(function(term) {
      return term.trim().toLowerCase();
    }).filter(Boolean);
    if (!terms.length) return posts.slice(0, 12);

    return posts.filter(function(post) {
      if (!Array.isArray(post.tags) || !post.tags.length) return false;
      const postTags = post.tags.map(function(tag) { return tag.toLowerCase(); });
      return terms.every(function(term) {
        return postTags.some(function(tag) { return tag.indexOf(term) !== -1; });
      });
    });
  }

  function renderResults(query) {
    const trimmed = query.trim();
    const matches = filterPosts(trimmed);

    if (!matches.length) {
      if (!posts.length) {
        renderEmptyState('Hiện chưa có bài viết nào.');
      } else if (!trimmed) {
        renderEmptyState('Chưa có bài viết nào trong danh sách này.');
      } else {
        renderEmptyState('Không tìm thấy bài viết với tag này.');
      }
      return;
    }

    resultsContainer.innerHTML = '';
    matches.forEach(function(post) {
      resultsContainer.appendChild(createResultItem(post));
    });
  }

  function renderTags() {
    if (!tagCloud) return;
    tagCloud.innerHTML = '';
    if (!uniqueTags.length) {
      const span = document.createElement('span');
      span.className = 'search-placeholder';
      span.textContent = 'Hiện chưa có tag nào.';
      tagCloud.appendChild(span);
      return;
    }

    uniqueTags.forEach(function(tag) {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'tag-chip';
      btn.textContent = '#' + tag;
      btn.addEventListener('click', function() {
        input.value = tag;
        input.focus();
        renderResults(tag);
      });
      tagCloud.appendChild(btn);
    });
  }

  if (input) {
    input.placeholder = 'Tìm theo tag...';
    input.addEventListener('input', function(e) {
      const value = e.target.value || '';
      if (!value.trim()) {
        renderResults('');
        return;
      }
      renderResults(value);
    });
    input.focus();
  }

  renderTags();
  renderResults('');
})();

