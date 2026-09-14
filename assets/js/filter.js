// filter.js — client-side filtering for the entries feed.
// Reads and writes URL query params so every filtered view is linkable.

(function () {
  var list = document.getElementById('feed-list');
  if (!list) return;

  var items = Array.prototype.slice.call(list.querySelectorAll('.feed__item'));
  var selTier = document.getElementById('f-tier');
  var selCountry = document.getElementById('f-country');
  var selStatus = document.getElementById('f-status');
  var selOutlet = document.getElementById('f-outlet');
  var btnClear = document.getElementById('f-clear');
  var count = document.getElementById('f-count');
  var none = document.getElementById('f-none');

  function uniq(values) {
    var seen = {}, out = [];
    values.forEach(function (v) {
      v = (v || '').trim();
      if (v && !seen[v]) { seen[v] = true; out.push(v); }
    });
    return out.sort();
  }

  function addOptions(select, values) {
    values.forEach(function (v) {
      var o = document.createElement('option');
      o.value = v;
      o.textContent = v;
      select.appendChild(o);
    });
  }

  var countries = uniq(items.map(function (el) { return el.dataset.country; }));
  addOptions(selCountry, countries);

  var statusNames = {};
  items.forEach(function (el) {
    var chip = el.querySelectorAll('.tag--plain')[1];
    if (chip) statusNames[el.dataset.status] = chip.textContent.trim();
  });
  Object.keys(statusNames).sort().forEach(function (k) {
    var o = document.createElement('option');
    o.value = k;
    o.textContent = statusNames[k];
    selStatus.appendChild(o);
  });

  var outlets = uniq(items.reduce(function (acc, el) {
    return acc.concat((el.dataset.outlets || '').split('|'));
  }, []));
  addOptions(selOutlet, outlets);

  function matchesTier(el, value) {
    if (!value) return true;
    var tiers = (el.dataset.tiers || '').split(/\s+/).filter(Boolean);
    if (value === 'T-only') {
      return tiers.length > 0 && tiers.every(function (t) { return t === 'T'; });
    }
    return tiers.indexOf(value) !== -1;
  }

  function apply(pushState) {
    var tier = selTier.value;
    var country = selCountry.value;
    var status = selStatus.value;
    var outlet = selOutlet.value;
    var shown = 0;

    items.forEach(function (el) {
      var ok = matchesTier(el, tier)
        && (!country || el.dataset.country === country)
        && (!status || el.dataset.status === status)
        && (!outlet || (el.dataset.outlets || '').split('|').indexOf(outlet) !== -1);
      el.hidden = !ok;
      if (ok) shown++;
    });

    var active = !!(tier || country || status || outlet);
    btnClear.hidden = !active;
    none.hidden = shown !== 0;
    count.textContent = shown + (shown === 1 ? ' entry' : ' entries')
      + (active ? ' of ' + items.length : '');

    if (pushState) {
      var params = new URLSearchParams();
      if (tier) params.set('tier', tier);
      if (country) params.set('country', country);
      if (status) params.set('status', status);
      if (outlet) params.set('outlet', outlet);
      var qs = params.toString();
      history.replaceState(null, '', qs ? '?' + qs : location.pathname);
    }
  }

  function setIfPresent(select, value) {
    if (!value) return;
    var match = Array.prototype.some.call(select.options, function (o) { return o.value === value; });
    if (match) select.value = value;
  }

  var initial = new URLSearchParams(location.search);
  setIfPresent(selTier, initial.get('tier'));
  setIfPresent(selCountry, initial.get('country'));
  setIfPresent(selStatus, initial.get('status'));
  setIfPresent(selOutlet, initial.get('outlet'));

  [selTier, selCountry, selStatus, selOutlet].forEach(function (s) {
    s.addEventListener('change', function () { apply(true); });
  });

  btnClear.addEventListener('click', function () {
    selTier.value = selCountry.value = selStatus.value = selOutlet.value = '';
    apply(true);
  });

  apply(false);
})();