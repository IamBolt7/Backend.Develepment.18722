(() => {
  const GITHUB_BASE = 'https://github.com/IamBolt7/Backend.Develepment.18722';

  const GRID_SVG =
    '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>';
  const READER_SVG =
    '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>';

  const DOCS = [
    {
      path: 'README.md',
      title: 'Main Repository Hub',
      group: 'Overview',
      category: 'all',
      badge: 'Root',
      summary: 'Master documentation index connecting every lab, theory module, and application in Backend Development 18722. Made by Arnav Daftuar.',
      tags: ['Hub', 'Architecture', 'Node.js', 'Python', 'Databases']
    },
    {
      path: 'LABS/README.md',
      title: 'LABS Directory Index',
      group: 'Laboratory Work',
      category: 'labs',
      badge: 'Index',
      summary: 'Overview of all 12 practical laboratory projects spanning HTML and CSS fundamentals, Express, Django, databases, Socket.IO, and Docker.',
      tags: ['Labs', 'Express', 'Django', 'MongoDB', 'PostgreSQL']
    },
    {
      path: 'LABS/django_todo_app/README.md',
      title: 'Django To-Do App',
      group: 'Laboratory Work',
      category: 'labs',
      badge: 'Django',
      summary: 'Database-backed task manager built with Django MVT, ModelForm validation, CSRF protection, SQLite persistence, and view tests.',
      tags: ['Python', 'Django', 'SQLite', 'CSRF']
    },
    {
      path: 'LABS/EXP-1/README.md',
      title: 'EXP-1 — HTML & CSS Intro',
      group: 'Laboratory Work',
      category: 'labs',
      badge: 'HTML/CSS',
      demo: 'LABS/EXP-1/arnav.html',
      summary: 'Semantic HTML5 and responsive CSS card introduction webpage.',
      tags: ['HTML5', 'CSS3', 'Responsive']
    },
    {
      path: 'LABS/Lab Test-1 Experiment/README.md',
      title: 'Lab Test-1 — Simple CMS Blog',
      group: 'Laboratory Work',
      category: 'labs',
      badge: 'Express',
      summary: 'Blog content management system built with Node.js, Express.js, EJS templates, and MongoDB.',
      tags: ['Node.js', 'Express', 'EJS', 'MongoDB']
    },
    {
      path: 'LABS/Lab Test-1 Experiment/Report.md',
      title: 'Lab Test-1 — Full Report',
      group: 'Laboratory Work',
      category: 'labs',
      badge: 'Report',
      summary: 'Detailed project report documenting the Simple CMS Blog implementation and testing.',
      tags: ['Report', 'CMS', 'MongoDB']
    },
    {
      path: 'LABS/Lab Test-2 Experiment/README.md',
      title: 'Lab Test-2 — Responsive Web Page',
      group: 'Laboratory Work',
      category: 'labs',
      badge: 'Grid/Flex',
      demo: 'LABS/Lab Test-2 Experiment/index.html',
      summary: 'Zero-framework responsive webpage using CSS Grid, Flexbox, clamp(), and media queries.',
      tags: ['HTML5', 'CSS Grid', 'Flexbox', 'Media Queries']
    },
    {
      path: 'LABS/Lab Test-3 Experiment/README.md',
      title: 'Lab Test-3 — Express & EJS',
      group: 'Laboratory Work',
      category: 'labs',
      badge: 'Express',
      summary: 'Express routing, URL and query parameters, POST handling, dynamic EJS templates, and Nodemon.',
      tags: ['Node.js', 'Express', 'EJS', 'Nodemon']
    },
    {
      path: 'LABS/Lab Test-4 Experiment/README.md',
      title: 'Lab Test-4 — Express + Mongoose',
      group: 'Laboratory Work',
      category: 'labs',
      badge: 'Mongoose',
      summary: 'User registration, login, and MongoDB schema and model persistence using Mongoose ODM.',
      tags: ['Node.js', 'Express', 'Mongoose', 'MongoDB']
    },
    {
      path: 'LABS/Lab Test-5 Experiment/README.md',
      title: 'Lab Test-5 — PostgreSQL vs MongoDB',
      group: 'Laboratory Work',
      category: 'labs',
      badge: 'SQL/NoSQL',
      demo: 'LABS/Lab Test-5 Experiment/ui/index.html',
      summary: 'Comparison of relational PostgreSQL, MongoDB documents, JSONB extensions, and an interactive companion UI.',
      tags: ['PostgreSQL', 'MongoDB', 'JSONB', 'CRUD']
    },
    {
      path: 'LABS/Lab Test-5 Experiment/comparison.md',
      title: 'Lab Test-5 — DB Comparison Notes',
      group: 'Laboratory Work',
      category: 'labs',
      badge: 'Notes',
      summary: 'Comparison between relational and document-oriented persistence models.',
      tags: ['PostgreSQL', 'MongoDB', 'Architecture']
    },
    {
      path: 'LABS/Lab Test-5 Experiment/RUN_ON_MAC.md',
      title: 'Lab Test-5 — macOS Setup Guide',
      group: 'Laboratory Work',
      category: 'labs',
      badge: 'Guide',
      summary: 'Step-by-step macOS installation and execution guide for PostgreSQL 16 and MongoDB Community.',
      tags: ['macOS', 'Homebrew', 'PostgreSQL', 'MongoDB']
    },
    {
      path: 'LABS/Lab Test-6 Experiment/README.md',
      title: 'Lab Test-6 — Express Middleware',
      group: 'Laboratory Work',
      category: 'labs',
      badge: 'Middleware',
      summary: 'Custom request logger, body parsers, static serving, header authentication guard, 404, and central error handling.',
      tags: ['Express', 'Middleware', 'Auth Guard', 'Error Handling']
    },
    {
      path: 'LABS/Lab Test-7 Experiment/README.md',
      title: 'Lab Test-7 — EJS Templating',
      group: 'Laboratory Work',
      category: 'labs',
      badge: 'EJS',
      summary: 'Server-rendered student directory, parameterized detail views, form validation, and custom 404 pages.',
      tags: ['Express', 'EJS', 'SSR', 'Forms']
    },
    {
      path: 'LABS/Lab Test-8 Experiment/README.md',
      title: 'Lab Test-8 — REST API & JWT',
      group: 'Laboratory Work',
      category: 'labs',
      badge: 'JWT',
      summary: 'RESTful Books CRUD API with query filtering, bcrypt password hashing, and JWT Bearer protection.',
      tags: ['REST API', 'JWT', 'bcrypt', 'Express']
    },
    {
      path: 'LABS/Lab Test-9 Experiment/README.md',
      title: 'Lab Test-9 — Security & Docker',
      group: 'Laboratory Work',
      category: 'labs',
      badge: 'Docker',
      summary: 'Helmet security headers, CORS allowlist, rate limiting, health checks, and Docker Compose setup.',
      tags: ['Helmet', 'CORS', 'Rate Limit', 'Docker']
    },
    {
      path: 'LABS/Lab Test-10 Experiment/README.md',
      title: 'Lab Test-10 — Socket.IO Chat',
      group: 'Laboratory Work',
      category: 'labs',
      badge: 'WebSocket',
      summary: 'Real-time bidirectional group chat with online user tracking and join/leave system events.',
      tags: ['Socket.IO', 'WebSockets', 'Express', 'Real-Time']
    },
    {
      path: 'Theory/README.md',
      title: 'Theory Directory Index',
      group: 'Theory & Units',
      category: 'theory',
      badge: 'Index',
      summary: 'Overview of all theory assignments, lecture labs, and unit exercises covering storage, databases, authentication, Django, and Docker.',
      tags: ['Theory', 'Web Storage', 'JSONB', 'JWT', 'Docker']
    },
    {
      path: 'Theory/Assignment-1-Notes-App/README.md',
      title: 'Assignment 1 — NoteSpace App',
      group: 'Theory & Units',
      category: 'theory',
      badge: 'Storage',
      demo: 'Theory/Assignment-1-Notes-App/index.html',
      summary: 'Client-side notes application with localStorage persistence, sessionStorage drafts, a JSON playground, and export/import.',
      tags: ['JavaScript', 'localStorage', 'sessionStorage', 'JSON']
    },
    {
      path: 'Theory/Assignment 2/README.md',
      title: 'Assignment 2 — PostgreSQL JSONB',
      group: 'Theory & Units',
      category: 'theory',
      badge: 'JSONB',
      demo: 'Theory/Assignment 2/index.html',
      summary: 'PostgreSQL hybrid experiment with JSONB operators, GIN indexes, and an interactive query playground.',
      tags: ['PostgreSQL', 'JSONB', 'GIN Index', 'SQL']
    },
    {
      path: 'Theory/JWT-Authentication-Lab/README.md',
      title: 'JWT Authentication Lab (FastAPI)',
      group: 'Theory & Units',
      category: 'theory',
      badge: 'FastAPI',
      summary: 'FastAPI and SQLAlchemy Student Management API implementing bcrypt hashing, JWT tokens, expiry, and authorization.',
      tags: ['Python', 'FastAPI', 'SQLAlchemy', 'JWT']
    },
    {
      path: 'Theory/JWT-Authentication-Lab/docs/LECTURE_NOTES.md',
      title: 'JWT Lab — Lecture 20 Notes',
      group: 'Theory & Units',
      category: 'theory',
      badge: 'Notes',
      summary: 'Lecture 20 theory notes on Basic Auth, Token Auth, JWT structure, and security practices.',
      tags: ['Lecture Notes', 'JWT', 'Security']
    },
    {
      path: 'Theory/Theory 1/README.md',
      title: 'Theory 1 — Express & Flask',
      group: 'Theory & Units',
      category: 'theory',
      badge: 'Dual Stack',
      summary: 'Parallel server implementations comparing Node.js (Express + EJS) and Python (Flask) side-by-side.',
      tags: ['Express', 'EJS', 'Python', 'Flask']
    },
    {
      path: 'Theory/Unit 3/README.md',
      title: 'Unit 3 — Django Student System',
      group: 'Theory & Units',
      category: 'theory',
      badge: 'Django',
      summary: 'Django project architecture exposing HTTP and JSON API routes for student management.',
      tags: ['Python', 'Django', 'JsonResponse']
    },
    {
      path: 'Theory/Unit 4/README.md',
      title: 'Unit 4 — Docker & Express',
      group: 'Theory & Units',
      category: 'theory',
      badge: 'Docker',
      summary: 'Container filesystem preservation with Java and containerizing an Express API with Dockerfile.',
      tags: ['Docker', 'Ubuntu', 'Express', 'Java']
    },
    {
      path: 'Applications/README.md',
      title: 'Applications Directory Index',
      group: 'Applications',
      category: 'apps',
      badge: 'Index',
      summary: 'Overview of integrated backend applications in this repository.',
      tags: ['Applications', 'Full-Stack']
    },
    {
      path: 'Applications/cms-lab/README.md',
      title: 'CMS Lab Application',
      group: 'Applications',
      category: 'apps',
      badge: 'Full App',
      summary: 'Blog CMS built with Express, EJS, and MongoDB featuring validation, custom 404s, and demo fallback mode.',
      tags: ['Node.js', 'Express', 'EJS', 'MongoDB']
    }
  ];

  const state = {
    currentDoc: 'README.md',
    filter: 'all',
    query: '',
    view: 'reader'
  };

  const els = {
    sidebar: document.getElementById('sidebar'),
    sidebarBackdrop: document.getElementById('sidebarBackdrop'),
    menuToggle: document.getElementById('menuToggle'),
    sidebarNav: document.getElementById('sidebarNav'),
    searchInput: document.getElementById('searchInput'),
    themeToggle: document.getElementById('themeToggle'),
    themeToggleLabel: document.getElementById('themeToggleLabel'),
    viewToggle: document.getElementById('viewToggle'),
    viewToggleIcon: document.getElementById('viewToggleIcon'),
    viewToggleLabel: document.getElementById('viewToggleLabel'),
    browseGridBtn: document.getElementById('browseGridBtn'),
    gridView: document.getElementById('gridView'),
    readerView: document.getElementById('readerView'),
    projectGrid: document.getElementById('projectGrid'),
    gridCount: document.getElementById('gridCount'),
    markdownBody: document.getElementById('markdownBody'),
    breadcrumbs: document.getElementById('breadcrumbs'),
    liveDemoBtn: document.getElementById('liveDemoBtn'),
    githubDocBtn: document.getElementById('githubDocBtn'),
    tocList: document.getElementById('tocList'),
    tocPanel: document.getElementById('tocPanel'),
    pagerNav: document.getElementById('pagerNav'),
    statTotalDocs: document.getElementById('statTotalDocs')
  };

  function encodeRepoPath(p) {
    return p.split('/').map(encodeURIComponent).join('/');
  }

  function resolveRelativePath(baseDocPath, href) {
    if (!href || /^(https?:|mailto:|tel:|#)/i.test(href)) return null;
    const [cleanHref] = href.split('#');
    if (!cleanHref) return null;
    const baseParts = baseDocPath.split('/').slice(0, -1);
    const relParts = decodeURIComponent(cleanHref).split('/');
    const stack = [...baseParts];
    for (const part of relParts) {
      if (!part || part === '.') continue;
      if (part === '..') stack.pop();
      else stack.push(part);
    }
    return stack.join('/');
  }

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function slugify(text) {
    return text
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .trim()
      .replace(/\s+/g, '-');
  }

  function parseInline(text, currentDocPath) {
    let out = escapeHtml(text);

    out = out.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, (_, alt, src) => {
      return `<img class="badge-img" src="${escapeHtml(src)}" alt="${escapeHtml(alt)}" loading="lazy">`;
    });

    out = out.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_, label, href) => {
      const isExt = /^https?:\/\//i.test(href);
      const docMatch = href.match(/#doc=([^&]+)/);
      if (docMatch) {
        const target = decodeURIComponent(docMatch[1]);
        return `<a href="#doc=${encodeRepoPath(target)}" data-doc="${escapeHtml(target)}">${label}</a>`;
      }
      const resolved = resolveRelativePath(currentDocPath, href);
      if (resolved !== null) {
        const normalized = resolved.endsWith('/') ? `${resolved}README.md` : resolved;
        if (DOCS.some((d) => d.path === normalized)) {
          return `<a href="#doc=${encodeRepoPath(normalized)}" data-doc="${escapeHtml(normalized)}">${label}</a>`;
        }
        if (normalized.endsWith('.html')) {
          return `<a href="${encodeRepoPath(normalized)}" target="_blank" rel="noopener noreferrer">${label}</a>`;
        }
        const ghType = href.endsWith('/') ? 'tree' : 'blob';
        return `<a href="${GITHUB_BASE}/${ghType}/main/${encodeRepoPath(resolved)}" target="_blank" rel="noopener noreferrer">${label}</a>`;
      }
      return `<a href="${escapeHtml(href)}"${isExt ? ' target="_blank" rel="noopener noreferrer"' : ''}>${label}</a>`;
    });

    out = out.replace(/`([^`]+)`/g, '<code>$1</code>');
    out = out.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
    out = out.replace(/\*([^*]+)\*/g, '<em>$1</em>');
    return out;
  }

  function renderMarkdown(md, currentDocPath) {
    const lines = md.replace(/\r\n/g, '\n').split('\n');
    const html = [];
    const toc = [];
    let i = 0;

    while (i < lines.length) {
      const line = lines[i];

      const fenceMatch = line.match(/^```([a-zA-Z0-9_-]*)\s*$/);
      if (fenceMatch) {
        const lang = fenceMatch[1] || 'text';
        const codeLines = [];
        i++;
        while (i < lines.length && !/^```\s*$/.test(lines[i])) {
          codeLines.push(lines[i]);
          i++;
        }
        i++;
        const rawCode = codeLines.join('\n');
        html.push(
          `<div class="code-block"><div class="code-header"><span>${escapeHtml(lang)}</span><button class="copy-btn" type="button">Copy</button></div><pre><code>${escapeHtml(rawCode)}</code></pre></div>`
        );
        continue;
      }

      if (/^---+\s*$/.test(line)) {
        html.push('<hr>');
        i++;
        continue;
      }

      const headingMatch = line.match(/^(#{1,6})\s+(.+)$/);
      if (headingMatch) {
        const level = headingMatch[1].length;
        const rawText = headingMatch[2].trim();
        const id = slugify(rawText) || `section-${i}`;
        if (level === 2 || level === 3) {
          toc.push({ level, id, text: rawText.replace(/[*_`]/g, '') });
        }
        html.push(`<h${level} id="${id}">${parseInline(rawText, currentDocPath)}</h${level}>`);
        i++;
        continue;
      }

      if (/^>\s?/.test(line)) {
        const quoteLines = [];
        while (i < lines.length && /^>\s?/.test(lines[i])) {
          quoteLines.push(lines[i].replace(/^>\s?/, ''));
          i++;
        }
        html.push(`<blockquote><p>${quoteLines.map((q) => parseInline(q, currentDocPath)).join('<br>')}</p></blockquote>`);
        continue;
      }

      if (line.includes('|') && i + 1 < lines.length && /^\s*\|?[:\s-|]+\|[:\s-|]*$/.test(lines[i + 1])) {
        const parseRow = (row) =>
          row
            .trim()
            .replace(/^\|/, '')
            .replace(/\|$/, '')
            .split('|')
            .map((cell) => cell.trim());

        const headers = parseRow(line);
        i += 2;
        const rows = [];
        while (i < lines.length && lines[i].includes('|') && lines[i].trim() !== '') {
          rows.push(parseRow(lines[i]));
          i++;
        }
        const thead = `<thead><tr>${headers.map((h) => `<th>${parseInline(h, currentDocPath)}</th>`).join('')}</tr></thead>`;
        const tbody = `<tbody>${rows
          .map((r) => `<tr>${r.map((c) => `<td>${parseInline(c, currentDocPath)}</td>`).join('')}</tr>`)
          .join('')}</tbody>`;
        html.push(`<div class="table-scroll"><table>${thead}${tbody}</table></div>`);
        continue;
      }

      if (/^\s*[-*]\s+/.test(line)) {
        const items = [];
        while (i < lines.length && /^\s*[-*]\s+/.test(lines[i])) {
          const itemText = lines[i].replace(/^\s*[-*]\s+/, '');
          const taskMatch = itemText.match(/^\[(x| )\]\s+(.+)$/i);
          if (taskMatch) {
            const checked = taskMatch[1].toLowerCase() === 'x';
            items.push(
              `<li class="task-item"><span class="task-box ${checked ? 'checked' : ''}" aria-hidden="true"></span>${parseInline(taskMatch[2], currentDocPath)}</li>`
            );
          } else {
            items.push(`<li>${parseInline(itemText, currentDocPath)}</li>`);
          }
          i++;
        }
        html.push(`<ul>${items.join('')}</ul>`);
        continue;
      }

      if (/^\s*\d+\.\s+/.test(line)) {
        const items = [];
        while (i < lines.length && /^\s*\d+\.\s+/.test(lines[i])) {
          items.push(`<li>${parseInline(lines[i].replace(/^\s*\d+\.\s+/, ''), currentDocPath)}</li>`);
          i++;
        }
        html.push(`<ol>${items.join('')}</ol>`);
        continue;
      }

      if (line.trim() === '') {
        i++;
        continue;
      }

      const paraLines = [];
      while (
        i < lines.length &&
        lines[i].trim() !== '' &&
        !/^(#{1,6}\s|```|---+|>\s?|\s*[-*]\s+|\s*\d+\.\s+)/.test(lines[i])
      ) {
        paraLines.push(lines[i]);
        i++;
      }
      html.push(`<p>${paraLines.map((p) => parseInline(p, currentDocPath)).join('<br>')}</p>`);
    }

    return { html: html.join('\n'), toc };
  }

  async function loadDocContent(docPath) {
    if (window.location.protocol !== 'file:') {
      try {
        const res = await fetch(encodeRepoPath(docPath));
        if (res.ok) return await res.text();
      } catch (_) {
        // Fallback to embedded bundle below
      }
    }
    if (window.DOCS_BUNDLE && window.DOCS_BUNDLE[docPath]) {
      return window.DOCS_BUNDLE[docPath];
    }
    return `# Document Not Found\n\nCould not load \`${docPath}\`.`;
  }

  function getFilteredDocs() {
    const q = state.query.trim().toLowerCase();
    return DOCS.filter((d) => {
      const catOk = state.filter === 'all' || d.category === 'all' || d.category === state.filter;
      if (!catOk) return false;
      if (!q) return true;
      return (
        d.title.toLowerCase().includes(q) ||
        d.summary.toLowerCase().includes(q) ||
        d.path.toLowerCase().includes(q) ||
        d.tags.some((t) => t.toLowerCase().includes(q))
      );
    });
  }

  function renderSidebar() {
    const docs = getFilteredDocs();
    const groups = ['Overview', 'Laboratory Work', 'Theory & Units', 'Applications'];
    const parts = [];

    for (const group of groups) {
      const items = docs.filter((d) => d.group === group);
      if (!items.length) continue;
      parts.push(`
        <section>
          <h3 class="nav-group-title">${group}</h3>
          <ul class="nav-list">
            ${items
              .map(
                (d) => `
              <li>
                <button class="nav-item ${d.path === state.currentDoc ? 'active' : ''}" type="button" data-doc="${escapeHtml(d.path)}">
                  <span class="nav-item-label"><span>${escapeHtml(d.title)}</span></span>
                  <span class="nav-badge">${escapeHtml(d.badge)}</span>
                </button>
              </li>
            `
              )
              .join('')}
          </ul>
        </section>
      `);
    }

    els.sidebarNav.innerHTML = parts.length
      ? parts.join('')
      : '<p style="color:var(--muted);font-size:0.85rem;padding:8px;">No matching documents found.</p>';
  }

  function renderGrid() {
    const docs = getFilteredDocs().filter((d) => d.path !== 'README.md');
    els.gridCount.textContent = `${docs.length} module${docs.length === 1 ? '' : 's'}`;
    els.projectGrid.innerHTML = docs
      .map(
        (d) => `
      <article class="project-card">
        <div class="project-card-top">
          <span class="cat-tag">${escapeHtml(d.group)}</span>
          <span class="nav-badge">${escapeHtml(d.badge)}</span>
        </div>
        <h3>${escapeHtml(d.title)}</h3>
        <p>${escapeHtml(d.summary)}</p>
        <div class="tech-row">
          ${d.tags.map((t) => `<span class="tech-pill">${escapeHtml(t)}</span>`).join('')}
        </div>
        <div class="card-actions">
          <button class="btn btn-primary" style="padding:7px 14px;font-size:0.79rem;" type="button" data-doc="${escapeHtml(d.path)}">Read Docs</button>
          ${
            d.demo
              ? `<a class="btn btn-secondary" style="padding:7px 14px;font-size:0.79rem;" href="${encodeRepoPath(d.demo)}" target="_blank" rel="noopener noreferrer">Live Demo</a>`
              : ''
          }
          <a class="btn btn-ghost" style="padding:7px 14px;font-size:0.79rem;" href="${GITHUB_BASE}/blob/main/${encodeRepoPath(d.path)}" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </article>
    `
      )
      .join('');
  }

  function renderBreadcrumbs(docMeta) {
    const crumbs = [`<button type="button" data-doc="README.md">Main README</button>`];
    if (docMeta.path !== 'README.md') {
      if (docMeta.path.startsWith('LABS/') && docMeta.path !== 'LABS/README.md') {
        crumbs.push('<span>/</span>', `<button type="button" data-doc="LABS/README.md">LABS</button>`);
      } else if (docMeta.path.startsWith('Theory/') && docMeta.path !== 'Theory/README.md') {
        crumbs.push('<span>/</span>', `<button type="button" data-doc="Theory/README.md">Theory</button>`);
      } else if (docMeta.path.startsWith('Applications/') && docMeta.path !== 'Applications/README.md') {
        crumbs.push('<span>/</span>', `<button type="button" data-doc="Applications/README.md">Applications</button>`);
      }
      crumbs.push('<span>/</span>', `<span>${escapeHtml(docMeta.title)}</span>`);
    }
    els.breadcrumbs.innerHTML = crumbs.join(' ');
  }

  function renderPager(docPath) {
    const idx = DOCS.findIndex((d) => d.path === docPath);
    const prev = idx > 0 ? DOCS[idx - 1] : null;
    const next = idx >= 0 && idx < DOCS.length - 1 ? DOCS[idx + 1] : null;

    els.pagerNav.innerHTML = `
      ${
        prev
          ? `<a class="pager-card prev" href="#doc=${encodeRepoPath(prev.path)}" data-doc="${escapeHtml(prev.path)}"><small>Previous</small><strong>${escapeHtml(prev.title)}</strong></a>`
          : '<div></div>'
      }
      ${
        next
          ? `<a class="pager-card next" href="#doc=${encodeRepoPath(next.path)}" data-doc="${escapeHtml(next.path)}"><small>Next</small><strong>${escapeHtml(next.title)}</strong></a>`
          : '<div></div>'
      }
    `;
  }

  async function openDoc(docPath, updateHash = true) {
    const normalized = DOCS.some((d) => d.path === docPath) ? docPath : 'README.md';
    state.currentDoc = normalized;
    setView('reader');

    if (updateHash) {
      history.replaceState(null, '', `#doc=${encodeRepoPath(normalized)}`);
    }

    const meta = DOCS.find((d) => d.path === normalized) || DOCS[0];
    renderSidebar();
    renderBreadcrumbs(meta);
    renderPager(normalized);

    els.githubDocBtn.href = `${GITHUB_BASE}/blob/main/${encodeRepoPath(normalized)}`;
    if (meta.demo) {
      els.liveDemoBtn.hidden = false;
      els.liveDemoBtn.href = encodeRepoPath(meta.demo);
    } else {
      els.liveDemoBtn.hidden = true;
    }

    els.markdownBody.innerHTML = '<p style="color:var(--muted);">Loading documentation...</p>';
    const rawMd = await loadDocContent(normalized);
    const { html, toc } = renderMarkdown(rawMd, normalized);
    els.markdownBody.innerHTML = html;

    els.tocList.innerHTML = toc.length
      ? toc.map((t) => `<a class="toc-link level-${t.level}" href="#${t.id}">${escapeHtml(t.text)}</a>`).join('')
      : '<span style="font-size:0.8rem;color:var(--muted);">No subsections</span>';
    els.tocPanel.style.display = toc.length ? '' : 'none';

    closeMobileSidebar();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function setView(mode) {
    state.view = mode;
    const isGrid = mode === 'grid';
    els.gridView.hidden = !isGrid;
    els.readerView.hidden = isGrid;
    els.viewToggleIcon.innerHTML = isGrid ? READER_SVG : GRID_SVG;
    els.viewToggleLabel.textContent = isGrid ? 'Docs Reader' : 'Project Grid';
    if (isGrid) renderGrid();
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('b18-theme', theme);
    els.themeToggleLabel.textContent = theme === 'dark' ? 'Light' : 'Dark';
  }

  function toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme') || 'light';
    applyTheme(current === 'dark' ? 'light' : 'dark');
  }

  function openMobileSidebar() {
    els.sidebar.classList.add('open');
    els.sidebarBackdrop.hidden = false;
    els.menuToggle.setAttribute('aria-expanded', 'true');
  }

  function closeMobileSidebar() {
    els.sidebar.classList.remove('open');
    els.sidebarBackdrop.hidden = true;
    els.menuToggle.setAttribute('aria-expanded', 'false');
  }

  function initEvents() {
    document.addEventListener('click', (e) => {
      const docTrigger = e.target.closest('[data-doc]');
      if (docTrigger) {
        e.preventDefault();
        openDoc(docTrigger.getAttribute('data-doc'));
        return;
      }

      const copyBtn = e.target.closest('.copy-btn');
      if (copyBtn) {
        const pre = copyBtn.closest('.code-block')?.querySelector('pre');
        if (pre) {
          navigator.clipboard?.writeText(pre.textContent).then(() => {
            copyBtn.textContent = 'Copied';
            setTimeout(() => (copyBtn.textContent = 'Copy'), 1500);
          });
        }
      }
    });

    document.querySelectorAll('.filter-chip').forEach((btn) => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.filter-chip').forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
        state.filter = btn.dataset.filter;
        renderSidebar();
        if (state.view === 'grid') renderGrid();
      });
    });

    els.searchInput.addEventListener('input', (e) => {
      state.query = e.target.value;
      renderSidebar();
      if (state.view === 'grid') renderGrid();
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === '/' && document.activeElement !== els.searchInput && !/INPUT|TEXTAREA/.test(document.activeElement.tagName)) {
        e.preventDefault();
        els.searchInput.focus();
      }
    });

    els.themeToggle.addEventListener('click', toggleTheme);
    els.viewToggle.addEventListener('click', () => setView(state.view === 'grid' ? 'reader' : 'grid'));
    els.browseGridBtn.addEventListener('click', () => setView('grid'));
    els.menuToggle.addEventListener('click', openMobileSidebar);
    els.sidebarBackdrop.addEventListener('click', closeMobileSidebar);

    window.addEventListener('hashchange', () => {
      const m = window.location.hash.match(/^#doc=(.+)$/);
      if (m) openDoc(decodeURIComponent(m[1]), false);
    });
  }

  function bootstrap() {
    const savedTheme = localStorage.getItem('b18-theme') || 'light';
    applyTheme(savedTheme);
    els.viewToggleIcon.innerHTML = GRID_SVG;
    els.statTotalDocs.textContent = String(DOCS.length);

    initEvents();
    renderSidebar();

    const hashMatch = window.location.hash.match(/^#doc=(.+)$/);
    const initialDoc = hashMatch ? decodeURIComponent(hashMatch[1]) : 'README.md';
    openDoc(initialDoc, false);
  }

  bootstrap();
})();
