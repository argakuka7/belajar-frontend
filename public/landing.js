(function () {
  'use strict';

  var CHAPTERS = [
    { n: '00', title: 'Siapkan Alat', href: '/00-siapkan-alat/', keys: 'editor vs code browser devtools console setup instalasi alat' },
    { n: '01', title: 'Apa Itu Front End', href: '/01-apa-itu-front-end/', keys: 'front end browser html css javascript render dom paint tiga bahasa' },
    { n: '02', title: 'HTML: Struktur & Semantik', href: '/02-html-semantik/', keys: 'html struktur semantik tag elemen heading paragraf div' },
    { n: '03', title: 'CSS: Selektor & Box Model', href: '/03-css-selektor-box-model/', keys: 'css selektor box model margin padding border class id' },
    { n: '04', title: 'CSS Layout: Flex & Grid', href: '/04-css-layout-flex-grid/', keys: 'css layout flexbox grid flex grid kolom baris' },
    { n: '05', title: 'Responsif', href: '/05-responsif-media-query-unit/', keys: 'responsif media query unit relatif mobile viewport rem em' },
    { n: '06', title: 'JavaScript: Variabel, Tipe & Kontrol Aliran', href: '/06-js-dasar/', keys: 'javascript variabel tipe data if else loop kontrol aliran' },
    { n: '07', title: 'Fungsi, Array & Objek', href: '/07-fungsi-array-objek/', keys: 'fungsi array objek method map filter reduce' },
    { n: '08', title: 'DOM', href: '/08-dom/', keys: 'dom document object model queryselector createelement innerhtml' },
    { n: '09', title: 'Event & Delegasi', href: '/09-event-delegasi/', keys: 'event listener click submit delegation bubbling' },
    { n: '10', title: 'State di Sisi Klien', href: '/10-state-localstorage/', keys: 'state localstorage sessionstorage client state persist' },
    { n: '11', title: 'Fetch & Async', href: '/11-fetch-async/', keys: 'fetch api async await promise json http request' },
    { n: '12', title: 'Merender Data', href: '/12-merender-data/', keys: 'render data list template loop tampilkan' },
    { n: '13', title: 'Form & Validasi', href: '/13-form-validasi/', keys: 'form input validasi submit required pattern' },
    { n: '14', title: 'React: Mengapa Framework Ada', href: '/14-react-mengapa/', keys: 'react framework component declarative virtual dom' },
    { n: '15', title: 'React: JSX, Props & State', href: '/15-jsx-props-state/', keys: 'react jsx props state component useState' },
    { n: '16', title: 'React: Efek & Pengambilan Data', href: '/16-efek-fetch/', keys: 'react effect useEffect fetch data lifecycle' },
    { n: '17', title: 'React: Custom Hooks', href: '/17-custom-hooks/', keys: 'react custom hooks reuse logic usehook' },
    { n: '18', title: 'Routing di Front End', href: '/18-routing/', keys: 'routing route url react router halaman' },
    { n: '19', title: 'Aksesibilitas', href: '/19-aksesibilitas/', keys: 'aksesibilitas a11y keyboard screen reader aria focus' },
    { n: '20', title: 'Styling Modern', href: '/20-design-token/', keys: 'styling modern design token css variable tema gelap' },
    { n: '21', title: 'Performa', href: '/21-performa/', keys: 'performa performance lazy loading image optimasi' },
    { n: '22', title: 'Testing Front End', href: '/22-testing/', keys: 'testing unit integration e2e test' },
    { n: '23', title: 'Caching, PWA & Offline', href: '/23-caching-pwa/', keys: 'caching pwa offline service worker cache' },
    { n: '24', title: 'Proyek Penutup', href: '/24-proyek-akhir/', keys: 'proyek akhir dashboard api konsumsi project' }
  ];

  var STORAGE_KEY = 'bfp_completed';
  var TOTAL = 25;

  function getCompleted() {
    try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || []; }
    catch (e) { return []; }
  }
  function saveCompleted(arr) {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(arr)); } catch (e) {}
  }

  // --- Progress ---
  function initProgress() {
    var counterEl = document.getElementById('progressCounter');
    var rows = document.querySelectorAll('.ch-done-btn');

    function updateCounter() {
      var completed = getCompleted();
      if (counterEl) {
        counterEl.innerHTML = '<b>' + completed.length + '</b> dari <b>' + TOTAL + '</b> selesai';
        counterEl.classList.toggle('done-all', completed.length === TOTAL);
      }
    }

    rows.forEach(function (btn) {
      var ch = parseInt(btn.getAttribute('data-ch'), 10);
      if (getCompleted().indexOf(ch) !== -1) btn.classList.add('done');

      btn.addEventListener('click', function (e) {
        e.preventDefault();
        var completed = getCompleted();
        var idx = completed.indexOf(ch);
        if (idx === -1) { completed.push(ch); btn.classList.add('done'); }
        else { completed.splice(idx, 1); btn.classList.remove('done'); }
        saveCompleted(completed);
        updateCounter();
      });
    });

    updateCounter();
  }

  // --- Search modal ---
  function initSearch() {
    var overlay = document.getElementById('searchOverlay');
    var input = document.getElementById('searchInput');
    var resultsEl = document.getElementById('searchResults');
    if (!overlay || !input) return;

    var activeIdx = -1;

    function openSearch() {
      overlay.classList.add('open');
      input.value = '';
      renderResults('');
      activeIdx = -1;
      input.focus();
    }
    function closeSearch() {
      overlay.classList.remove('open');
      activeIdx = -1;
    }

    document.querySelectorAll('[data-search-trigger]').forEach(function (el) {
      el.addEventListener('click', openSearch);
    });

    overlay.addEventListener('click', function (e) {
      if (e.target === overlay) closeSearch();
    });

    document.addEventListener('keydown', function (e) {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        openSearch();
      }
      if (e.key === 'Escape') closeSearch();
      if (e.key === '/' && !overlay.classList.contains('open') &&
          e.target.tagName !== 'INPUT' && e.target.tagName !== 'TEXTAREA') {
        e.preventDefault();
        openSearch();
      }
    });

    input.addEventListener('input', function () {
      renderResults(input.value.trim().toLowerCase());
      activeIdx = -1;
    });

    input.addEventListener('keydown', function (e) {
      var items = resultsEl.querySelectorAll('.search-result');
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        activeIdx = Math.min(activeIdx + 1, items.length - 1);
        updateActive(items);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        activeIdx = Math.max(activeIdx - 1, 0);
        updateActive(items);
      } else if (e.key === 'Enter' && activeIdx >= 0 && items[activeIdx]) {
        e.preventDefault();
        items[activeIdx].click();
      }
    });

    function updateActive(items) {
      items.forEach(function (it, i) {
        it.classList.toggle('active', i === activeIdx);
      });
      if (items[activeIdx]) items[activeIdx].scrollIntoView({ block: 'nearest' });
    }

    function renderResults(query) {
      if (!query) {
        resultsEl.innerHTML = '';
        return;
      }
      var matches = CHAPTERS.filter(function (ch) {
        return (ch.title + ' ' + ch.keys).toLowerCase().indexOf(query) !== -1;
      });

      if (matches.length === 0) {
        resultsEl.innerHTML = '<div class="search-no-results">Tidak ada bab yang cocok.</div>';
        return;
      }

      resultsEl.innerHTML = matches.map(function (ch) {
        return '<a class="search-result" href="' + ch.href + '">' +
          '<span class="sr-num">' + ch.n + '</span>' +
          '<span class="sr-title">' + ch.title + '</span>' +
          '<span class="sr-meta">Bab ' + parseInt(ch.n, 10) + '</span>' +
          '</a>';
      }).join('');
    }
  }

  initProgress();
  initSearch();
})();
