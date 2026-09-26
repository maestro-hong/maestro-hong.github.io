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

  function sortBy(mode) {
    var sorted = rows.slice();
    if (mode === 'newest') { sorted.sort(function (a, b) { return b.dataset.date.localeCompare(a.dataset.date); }); }
    if (mode === 'oldest') { sorted.sort(function (a, b) { return a.dataset.date.localeCompare(b.dataset.date); }); }
    if (mode === 'country') { sorted.sort(function (a, b) { return a.dataset.country.localeCompare(b.dataset.country); }); }
    if (mode === 'status') { sorted.sort(function (a, b) { return a.dataset.status.localeCompare(b.dataset.status); }); }
    sorted.forEach(function (r) { container.appendChild(r); });
  }

  document.querySelectorAll('[data-sort]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      document.querySelectorAll('[data-sort]').forEach(function (b) { b.classList.remove('is-on'); });
      btn.classList.add('is-on');
      sortBy(btn.dataset.sort);
      var m = btn.closest('details');
      if (m) { m.open = false; }
    });
  });

  apply();
})();