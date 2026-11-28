(() => {
  const GITHUB_BASE = 'https://github.com/IamBolt7/Backend.Develepment.18722';

  const DOCS = [
    {
      path: 'README.md',
      title: 'Main Repository Hub',
      group: 'Overview',
      category: 'all',
      badge: 'Root',
      featured: 'black',
      kicker: 'Repository Hub',
      summary: 'Master documentation index connecting every lab, theory module, and application in Backend Development 18722.',
      tags: ['Index', 'Node.js', 'Python', 'Databases']
    },
    {
      path: 'LABS/README.md',
      title: 'LABS Directory Index',
      group: 'Laboratory Work',
      category: 'labs',
      badge: 'Index',
      summary: 'Complete overview of all twelve practical laboratory experiments from HTML and CSS to WebSockets and Docker.',
      tags: ['Labs', 'Express', 'Django', 'Databases']
    },
    {
      path: 'LABS/django_todo_app/README.md',
      title: 'Django To-Do App',
      group: 'Laboratory Work',
      category: 'labs',
      badge: 'Django',
      summary: 'Database-backed task manager built with Django MVT, ModelForm validation, CSRF protection, SQLite persistence, and automated tests.',
      tags: ['Python', 'Django', 'SQLite', 'CSRF']
    },
    {
      path: 'LABS/EXP-1/README.md',
      title: 'EXP-1 — HTML and CSS Intro',
      group: 'Laboratory Work',
      category: 'labs',
      badge: 'HTML/CSS',
      demo: 'LABS/EXP-1/arnav.html',
      summary: 'Semantic HTML5 and responsive CSS card webpage with custom properties and Grid centering.',
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
      summary: 'Detailed project report documenting the Simple CMS Blog implementation and test results.',
      tags: ['Report', 'CMS', 'MongoDB']
    },
    {
      path: 'LABS/Lab Test-2 Experiment/README.md',
      title: 'Lab Test-2 — Responsive Web Page',
      group: 'Laboratory Work',
      category: 'labs',
      badge: 'Grid/Flex',
      demo: 'LABS/Lab Test-2 Experiment/index.html',
      summary: 'Zero-framework responsive webpage using CSS Grid, Flexbox, fluid sizing with clamp(), and media queries.',
      tags: ['HTML5', 'CSS Grid', 'Flexbox', 'Media Queries']
    },
    {
      path: 'LABS/Lab Test-3 Experiment/README.md',
      title: 'Lab Test-3 — Express and EJS',
      group: 'Laboratory Work',
      category: 'labs',
      badge: 'Express',
      summary: 'Express routing, URL and query parameters, POST form processing, dynamic EJS templates, and Nodemon.',
      tags: ['Node.js', 'Express', 'EJS', 'Nodemon']
    },
    {
      path: 'LABS/Lab Test-4 Experiment/README.md',
      title: 'Lab Test-4 — Express and Mongoose',
      group: 'Laboratory Work',
      category: 'labs',
      badge: 'Mongoose',
      summary: 'User registration, login, and MongoDB schema and model persistence using Mongoose ODM.',
      tags: ['Node.js', 'Express', 'Mongoose', 'MongoDB']
    },
    {
      path: 'LABS/Lab Test-5 Experiment/README.md',
      title: 'PostgreSQL vs MongoDB',
      group: 'Laboratory Work',
      category: 'labs',
      badge: 'SQL/NoSQL',
      featured: 'charcoal',
      kicker: 'Databases',
      demo: 'LABS/Lab Test-5 Experiment/ui/index.html',
      summary: 'Side-by-side comparison of relational PostgreSQL, MongoDB documents, JSONB extensions, and an interactive companion UI.',
      tags: ['PostgreSQL', 'MongoDB', 'JSONB', 'CRUD']
    },
    {
      path: 'LABS/Lab Test-5 Experiment/comparison.md',
      title: 'Lab Test-5 — DB Comparison Notes',
      group: 'Laboratory Work',
      category: 'labs',
      badge: 'Notes',
      summary: 'Architectural comparison between relational schemas and document-oriented collections.',
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
      title: 'REST API & JWT Authentication',
      group: 'Laboratory Work',
      category: 'labs',
      badge: 'JWT',
      featured: 'white',
      kicker: 'Security',
      summary: 'RESTful Books CRUD API with query filtering, bcrypt password hashing, and JWT Bearer token protection.',
      tags: ['REST API', 'JWT', 'bcrypt', 'Express']
    },
    {
      path: 'LABS/Lab Test-9 Experiment/README.md',
      title: 'Security hardening & Docker',
      group: 'Laboratory Work',
      category: 'labs',
      badge: 'Docker',
      featured: 'white',
      kicker: 'Deployment',
      summary: 'Helmet security headers, CORS allowlist, rate limiting, health checks, and Docker Compose packaging.',
      tags: ['Helmet', 'CORS', 'Rate Limit', 'Docker']
    },
    {
      path: 'LABS/Lab Test-10 Experiment/README.md',
      title: 'Real-time Chat with Socket.IO',
      group: 'Laboratory Work',
      category: 'labs',
      badge: 'WebSocket',
      featured: 'black',
      kicker: 'Real-Time',
      summary: 'Bidirectional group chat with online user tracking, join and leave events, and WebSocket messaging.',
      tags: ['Socket.IO', 'WebSockets', 'Express']
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
      title: 'NoteSpace Web Storage App',
      group: 'Theory & Units',
      category: 'theory',
      badge: 'Storage',
      featured: 'white',
      kicker: 'Client Storage',
      demo: 'Theory/Assignment-1-Notes-App/index.html',
      summary: 'Notes workspace powered by localStorage persistence, sessionStorage drafts, JSON inspection, and export/import.',
      tags: ['JavaScript', 'localStorage', 'sessionStorage', 'JSON']
    },
    {
      path: 'Theory/Assignment 2/README.md',
      title: 'Assignment 2 — PostgreSQL JSONB',
      group: 'Theory & Units',
      category: 'theory',
      badge: 'JSONB',
      demo: 'Theory/Assignment 2/index.html',
      summary: 'PostgreSQL hybrid modeling with JSONB operators, GIN indexes, and an interactive query playground.',
      tags: ['PostgreSQL', 'JSONB', 'GIN Index', 'SQL']
    },
    {
      path: 'Theory/JWT-Authentication-Lab/README.md',
      title: 'JWT Authentication Lab (FastAPI)',
      group: 'Theory & Units',
      category: 'theory',
      badge: 'FastAPI',
      summary: 'FastAPI and SQLAlchemy Student Management API implementing bcrypt hashing, JWT expiry, and route authorization.',
      tags: ['Python', 'FastAPI', 'SQLAlchemy', 'JWT']
    },
    {
      path: 'Theory/JWT-Authentication-Lab/docs/LECTURE_NOTES.md',
      title: 'JWT Lab — Lecture 20 Notes',
      group: 'Theory & Units',
      category: 'theory',
      badge: 'Notes',
      summary: 'Lecture 20 notes on Basic Auth, Token Auth, JWT structure, and authentication security practices.',
      tags: ['Lecture Notes', 'JWT', 'Security']
    },
    {
      path: 'Theory/Theory 1/README.md',
      title: 'Theory 1 — Express and Flask',
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
      title: 'Unit 4 — Docker and Express',
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
      featured: 'charcoal',
      kicker: 'Application',
      summary: 'Full Blog CMS built with Express, EJS, and MongoDB featuring validation, custom 404s, and demo fallback mode.',
      tags: ['Node.js', 'Express', 'EJS', 'MongoDB']
    }
  ];

  const state = {
    view: 'showcase',
    filter: 'all',
    query: '',
    currentDoc: 'README.md'
  };

  const els = {
    showcaseView: document.getElementById('showcaseView'),
    readerView: document.getElementById('readerView'),
    featuredTrack: document.getElementById('featuredTrack'),
    shelfPrev: document.getElementById('shelfPrev'),
    shelfNext: document.getElementById('shelfNext'),
    catalogGroups: document.getElementById('catalogGroups'),
    catalogHeading: document.getElementById('catalogHeading'),
    inlineFilterInput: document.getElementById('inlineFilterInput'),
    readerSidebarNav: document.getElementById('readerSidebarNav'),
    markdownBody: document.getElementById('markdownBody'),
    breadcrumbs: document.getElementById('breadcrumbs'),
    liveDemoBtn: document.getElementById('liveDemoBtn'),
    githubDocBtn: document.getElementById('githubDocBtn'),
    tocList: document.getElementById('tocList'),
    tocPanel: document.getElementById('tocPanel'),
    pagerNav: document.getElementById('pagerNav'),
    backToShowcaseBtn: document.getElementById('backToShowcaseBtn'),
    navHomeBtn: document.getElementById('navHomeBtn'),
    themeToggle: document.getElementById('themeToggle'),
    mobileMenuBtn: document.getElementById('mobileMenuBtn'),
    mobileDrawer: document.getElementById('mobileDrawer'),
    openSearchBtn: document.getElementById('openSearchBtn'),
    closeSearchBtn: document.getElementById('closeSearchBtn'),
    searchOverlay: document.getElementById('searchOverlay'),
    searchInput: document.getElementById('searchInput'),
    searchResults: document.getElementById('searchResults'),
    countAll: document.getElementById('countAll'),
    countLabs: document.getElementById('countLabs'),
    countTheory: document.getElementById('countTheory'),
    countApps: document.getElementById('countApps'),
    countDemos: document.getElementById('countDemos')
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
        html.push(
          `<div class="code-block"><div class="code-header"><span>${escapeHtml(lang)}</span><button class="copy-btn" type="button">Copy</button></div><pre><code>${escapeHtml(codeLines.join('\n'))}</code></pre></div>`
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

  function renderFeatured() {
    const featured = DOCS.filter((d) => d.featured);
    els.featuredTrack.innerHTML = featured
      .map(
        (d) => `
      <article class="feature-card tone-${d.featured}" data-doc="${escapeHtml(d.path)}">
        <div>
          <div class="feature-kicker">${escapeHtml(d.kicker || d.group)}</div>
          <h3 class="feature-title">${escapeHtml(d.title)}</h3>
          <p class="feature-desc">${escapeHtml(d.summary)}</p>
        </div>
        <div class="feature-bottom">
          <div class="feature-tags">
            ${d.tags.slice(0, 3).map((t) => `<span class="feature-tag">${escapeHtml(t)}</span>`).join('')}
          </div>
          <span class="feature-cta">${d.demo ? 'Explore & Demo' : 'Read guide'} &rsaquo;</span>
        </div>
      </article>
    `
      )
      .join('');
  }

  function getCatalogDocs() {
    const q = state.query.trim().toLowerCase();
    return DOCS.filter((d) => {
      if (state.filter === 'demos') {
        if (!d.demo) return false;
      } else if (state.filter !== 'all') {
        if (d.category !== state.filter) return false;
      }
      if (!q) return true;
      return (
        d.title.toLowerCase().includes(q) ||
        d.summary.toLowerCase().includes(q) ||
        d.path.toLowerCase().includes(q) ||
        d.tags.some((t) => t.toLowerCase().includes(q))
      );
    });
  }

  function renderCatalog() {
    const titles = {
      all: 'All documentation. <span>Explore every connected README.</span>',
      labs: 'Laboratory work. <span>Twelve progressive backend experiments.</span>',
      theory: 'Theory and units. <span>Assignments, architecture, and lecture notes.</span>',
      apps: 'Applications. <span>Integrated full-stack web builds.</span>',
      demos: 'Browser demos. <span>Interactive pages you can open directly.</span>'
    };
    els.catalogHeading.innerHTML = titles[state.filter] || titles.all;

    const filtered = getCatalogDocs();
    const groups = ['Overview', 'Laboratory Work', 'Theory & Units', 'Applications'];
    const html = [];

    for (const group of groups) {
      const items = filtered.filter((d) => d.group === group);
      if (!items.length) continue;
      html.push(`
        <section>
          <div class="group-block-head">
            <h3>${escapeHtml(group)}</h3>
            <span>${items.length} item${items.length === 1 ? '' : 's'}</span>
          </div>
          <div class="apple-grid">
            ${items
              .map(
                (d) => `
              <article class="module-card">
                <div>
                  <div class="module-top">
                    <span class="module-label">${escapeHtml(d.group)}</span>
                    <span class="module-badge">${escapeHtml(d.badge)}</span>
                  </div>
                  <h4>${escapeHtml(d.title)}</h4>
                  <p>${escapeHtml(d.summary)}</p>
                </div>
                <div class="module-actions">
                  <button class="link-btn" type="button" data-doc="${escapeHtml(d.path)}">Read Docs &rsaquo;</button>
                  ${
                    d.demo
                      ? `<a class="link-btn" href="${encodeRepoPath(d.demo)}" target="_blank" rel="noopener noreferrer">Live Demo &rsaquo;</a>`
                      : ''
                  }
                  <a class="link-btn muted" href="${GITHUB_BASE}/blob/main/${encodeRepoPath(d.path)}" target="_blank" rel="noopener noreferrer">GitHub &rsaquo;</a>
                </div>
              </article>
            `
              )
              .join('')}
          </div>
        </section>
      `);
    }

    els.catalogGroups.innerHTML = html.length
      ? html.join('')
      : '<p style="color:var(--muted);font-size:15px;">No matching modules found.</p>';
  }

  function renderReaderSidebar() {
    const groups = ['Overview', 'Laboratory Work', 'Theory & Units', 'Applications'];
    els.readerSidebarNav.innerHTML = groups
      .map((group) => {
        const items = DOCS.filter((d) => d.group === group);
        return `
          <div>
            <div class="side-group-label">${escapeHtml(group)}</div>
            ${items
              .map(
                (d) => `
              <button class="side-link ${d.path === state.currentDoc ? 'active' : ''}" type="button" data-doc="${escapeHtml(d.path)}">${escapeHtml(d.title)}</button>
            `
              )
              .join('')}
          </div>
        `;
      })
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

  function showShowcase(filter = state.filter, updateHash = true) {
    state.view = 'showcase';
    state.filter = filter;
    els.showcaseView.hidden = false;
    els.readerView.hidden = true;
    updateActiveNav();
    renderCatalog();
    if (updateHash && window.location.hash) {
      history.replaceState(null, '', window.location.pathname + window.location.search);
    }
  }

  async function openDoc(docPath, updateHash = true) {
    const normalized = DOCS.some((d) => d.path === docPath) ? docPath : 'README.md';
    state.view = 'reader';
    state.currentDoc = normalized;
    els.showcaseView.hidden = true;
    els.readerView.hidden = false;
    updateActiveNav();

    if (updateHash) {
      history.replaceState(null, '', `#doc=${encodeRepoPath(normalized)}`);
    }

    const meta = DOCS.find((d) => d.path === normalized) || DOCS[0];
    renderReaderSidebar();
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
      : '<span style="font-size:12px;color:var(--muted);">No subsections</span>';
    els.tocPanel.style.display = toc.length ? '' : 'none';

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function updateActiveNav() {
    document.querySelectorAll('.nav-link[data-nav-view]').forEach((btn) => {
      const match = state.view === 'showcase' && btn.dataset.filter === state.filter;
      btn.classList.toggle('active', match);
    });
    document.querySelectorAll('.nav-link[data-doc="README.md"]').forEach((btn) => {
      btn.classList.toggle('active', state.view === 'reader' && state.currentDoc === 'README.md');
    });
    document.querySelectorAll('.cat-tile').forEach((tile) => {
      tile.classList.toggle('active', tile.dataset.filter === state.filter);
    });
  }

  function renderSearchResults(term) {
    const q = term.trim().toLowerCase();
    const matches = q
      ? DOCS.filter(
          (d) =>
            d.title.toLowerCase().includes(q) ||
            d.summary.toLowerCase().includes(q) ||
            d.tags.some((t) => t.toLowerCase().includes(q))
        )
      : DOCS.slice(0, 8);

    els.searchResults.innerHTML = matches.length
      ? matches
          .map(
            (d) => `
          <button class="search-result-item" type="button" data-doc="${escapeHtml(d.path)}">
            <div>
              <strong>${escapeHtml(d.title)}</strong>
              <small>${escapeHtml(d.summary)}</small>
            </div>
            <span class="search-result-badge">${escapeHtml(d.badge)}</span>
          </button>
        `
          )
          .join('')
      : '<p style="padding:14px;color:var(--muted);font-size:13px;">No matching documentation.</p>';
  }

  function openSearch() {
    els.searchOverlay.hidden = false;
    els.searchInput.value = '';
    renderSearchResults('');
    setTimeout(() => els.searchInput.focus(), 20);
  }

  function closeSearch() {
    els.searchOverlay.hidden = true;
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('b18-apple-theme', theme);
    els.themeToggle.textContent = theme === 'dark' ? 'Light' : 'Dark';
  }

  function initEvents() {
    document.addEventListener('click', (e) => {
      const docTrigger = e.target.closest('[data-doc]');
      if (docTrigger) {
        e.preventDefault();
        closeSearch();
        els.mobileDrawer.hidden = true;
        openDoc(docTrigger.getAttribute('data-doc'));
        return;
      }

      const navView = e.target.closest('[data-nav-view="showcase"]');
      if (navView) {
        e.preventDefault();
        els.mobileDrawer.hidden = true;
        showShowcase(navView.dataset.filter || 'all');
        const target = navView.dataset.filter && navView.dataset.filter !== 'all' ? '#catalogSection' : '#showcaseView';
        document.querySelector(target)?.scrollIntoView({ behavior: 'smooth' });
        return;
      }

      const catTile = e.target.closest('.cat-tile');
      if (catTile) {
        state.filter = catTile.dataset.filter;
        updateActiveNav();
        renderCatalog();
        document.getElementById('catalogSection')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
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

    els.navHomeBtn.addEventListener('click', (e) => {
      e.preventDefault();
      showShowcase('all');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    els.backToShowcaseBtn.addEventListener('click', () => showShowcase(state.filter));

    els.shelfPrev.addEventListener('click', () => {
      els.featuredTrack.scrollBy({ left: -400, behavior: 'smooth' });
    });

    els.shelfNext.addEventListener('click', () => {
      els.featuredTrack.scrollBy({ left: 400, behavior: 'smooth' });
    });

    els.inlineFilterInput.addEventListener('input', (e) => {
      state.query = e.target.value;
      renderCatalog();
    });

    els.openSearchBtn.addEventListener('click', openSearch);
    els.closeSearchBtn.addEventListener('click', closeSearch);
    els.searchOverlay.addEventListener('click', (e) => {
      if (e.target === els.searchOverlay) closeSearch();
    });
    els.searchInput.addEventListener('input', (e) => renderSearchResults(e.target.value));

    els.themeToggle.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme') || 'light';
      applyTheme(current === 'dark' ? 'light' : 'dark');
    });

    els.mobileMenuBtn.addEventListener('click', () => {
      const isHidden = els.mobileDrawer.hidden;
      els.mobileDrawer.hidden = !isHidden;
      els.mobileMenuBtn.setAttribute('aria-expanded', String(isHidden));
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === '/' && document.activeElement.tagName !== 'INPUT') {
        e.preventDefault();
        openSearch();
      } else if (e.key === 'Escape' && !els.searchOverlay.hidden) {
        closeSearch();
      }
    });

    window.addEventListener('hashchange', () => {
      const m = window.location.hash.match(/^#doc=(.+)$/);
      if (m) openDoc(decodeURIComponent(m[1]), false);
      else showShowcase('all');
    });
  }

  function bootstrap() {
    applyTheme(localStorage.getItem('b18-apple-theme') || 'light');

    els.countAll.textContent = String(DOCS.length);
    els.countLabs.textContent = String(DOCS.filter((d) => d.category === 'labs').length);
    els.countTheory.textContent = String(DOCS.filter((d) => d.category === 'theory').length);
    els.countApps.textContent = String(DOCS.filter((d) => d.category === 'apps').length);
    els.countDemos.textContent = String(DOCS.filter((d) => d.demo).length);

    renderFeatured();
    initEvents();

    const hashMatch = window.location.hash.match(/^#doc=(.+)$/);
    if (hashMatch) {
      openDoc(decodeURIComponent(hashMatch[1]), false);
    } else {
      showShowcase('all', false);
    }
  }

  bootstrap();
})();
