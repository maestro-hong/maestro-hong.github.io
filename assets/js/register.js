(function () {

  var navToggle = document.getElementById('nav-toggle');
  var nav = document.getElementById('nav');

  if (navToggle && nav) {
    navToggle.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', String(open));
      navToggle.innerHTML = open ? '✕' : '☰';
    });
  }

  var searchToggle = document.getElementById('search-toggle');
  var field = document.getElementById('search-field');
  var input = document.getElementById('search-input');

  if (searchToggle && field && input) {
    searchToggle.addEventListener('click', function () {
      var open = !field.hidden;
      field.hidden = open;
      searchToggle.setAttribute('aria-expanded', String(!open));
      if (!open) { input.focus(); }
      else { input.value = ''; apply(); }
    });

    // The front page's Search link lands here as /entries/#search: open the field.
    if (window.location.hash === '#search') {
      field.hidden = false;
      searchToggle.setAttribute('aria-expanded', 'true');
      input.focus();
    }
  }

  var container = document.getElementById('rows');
  if (!container) { return; }

  var rows = Array.prototype.slice.call(container.querySelectorAll('.row'));
  var count = document.getElementById('count');
  var none = document.getElementById('no-match');

  function apply() {
    var q = (input && field && !field.hidden) ? input.value.trim().toLowerCase() : '';
    var shown = 0;
    rows.forEach(function (r) {
      var ok = !q || (r.dataset.text || '').indexOf(q) !== -1;
      r.hidden = !ok;
      if (ok) { shown++; }
    });
    if (count) { count.textContent = shown; }
    if (none) { none.hidden = !(rows.length && shown === 0); }
  }

  if (input) { input.addEventListener('input', apply); }

  var sortButtons = Array.prototype.slice.call(document.querySelectorAll('[data-sort]'));
  var STORE = 'unio-sort';
  var current = { key: 'date', dir: 'desc' };

  function sortBy(key, dir) {
    var sign = dir === 'desc' ? -1 : 1;
    var sorted = rows.slice().sort(function (a, b) {
      var x = (a.dataset[key] || '').localeCompare(b.dataset[key] || '') * sign;
      return x !== 0 ? x : b.dataset.date.localeCompare(a.dataset.date);
    });
    sorted.forEach(function (r) { container.appendChild(r); });
  }

  function setSort(key, dir) {
    sortButtons.forEach(function (b) {
      var on = b.dataset.sort === key;
      var arrow = b.querySelector('.controls__arrow');
      b.classList.toggle('is-on', on);
      b.setAttribute('aria-pressed', String(on));
      if (arrow) { arrow.textContent = on ? (dir === 'desc' ? ' \u2193' : ' \u2191') : ''; }
    });
    current = { key: key, dir: dir };
    sortBy(key, dir);
    try { sessionStorage.setItem(STORE, key + ':' + dir); } catch (e) {}
  }

  sortButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var dir = btn.dataset.dir || 'asc';
      if (btn.dataset.sort === current.key) { dir = current.dir === 'desc' ? 'asc' : 'desc'; }
      setSort(btn.dataset.sort, dir);
    });
  });

  // Keep the chosen sort when moving between category pages in the same visit.
  try {
    var saved = (sessionStorage.getItem(STORE) || '').split(':');
    var known = sortButtons.some(function (b) { return b.dataset.sort === saved[0]; });
    if (known && (saved[1] === 'asc' || saved[1] === 'desc')) { setSort(saved[0], saved[1]); }
  } catch (e) {}

  apply();
})();