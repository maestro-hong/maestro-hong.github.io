(function () {
  var box = document.getElementById('stats-charts');
  if (!box) { return; }

  var $ = function (id) { return document.getElementById(id); };
  var raw = JSON.parse($('stats-labels').textContent);

  // Label lookup per field, from _data/*.yml.
  var L = {};
  Object.keys(raw).forEach(function (k) {
    L[k] = { order: [], name: {} };
    raw[k].forEach(function (o) { L[k].order.push(o.key); L[k].name[o.key] = o.name; });
  });

  var PANELS = [
    ['s', 'Enforcement status'],
    ['dp', 'How it was detected'],
    ['so', 'Safeguard outcome'],
    ['b', 'Basis for the AI claim']
  ];
  var KEYS = ['s', 'dp', 'so', 'b', 'c'];

  // Read the entries from the server-rendered list.
  var nodes = Array.prototype.slice.call(document.querySelectorAll('#stats-items .stats__item'));
  var DATA = nodes.map(function (n) {
    var d = n.dataset, a = n.querySelector('a');
    return { node: n, t: a.textContent, href: a.getAttribute('href'), d: d.d, co: d.country, text: d.text,
             s: d.s, dp: d.dp, so: d.so, b: d.b, c: d.c };
  });

  var F = { s: null, dp: null, so: null, b: null, c: null, q: '' };

  function match(e, skip) {
    for (var i = 0; i < KEYS.length; i++) {
      var k = KEYS[i];
      if (k !== skip && F[k] && e[k] !== F[k]) { return false; }
    }
    return !(F.q && e.text.indexOf(F.q) === -1);
  }
  function toggle(k, v) { F[k] = F[k] === v ? null : v; render(); }
  function el(tag, cls, html) { var x = document.createElement(tag); if (cls) { x.className = cls; } if (html != null) { x.innerHTML = html; } return x; }
  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;'); }

  function charts() {
    box.innerHTML = '';
    PANELS.forEach(function (p) {
      var k = p[0], base = DATA.filter(function (e) { return match(e, k); });
      var rows = L[k].order.map(function (v) {
        return [v, base.filter(function (e) { return e[k] === v; }).length];
      }).filter(function (r) { return r[1] > 0 || F[k] === r[0]; });
      rows.sort(function (a, b) { return b[1] - a[1]; });
      var max = Math.max.apply(null, [1].concat(rows.map(function (r) { return r[1]; })));
      var d = el('div', '', '<h2 class="stats__h">' + p[1] + '</h2>');
      if (!rows.length) { d.appendChild(el('p', 'stats__empty', 'No entries.')); }
      rows.forEach(function (r) {
        var v = r[0], n = r[1];
        var b = el('button', 'stats__row' + (F[k] === v ? ' is-sel' : '') + (n ? '' : ' is-zero'),
          '<span class="stats__lab">' + esc(L[k].name[v]) + '</span><span class="stats__track"><span class="stats__fill" style="width:' + (n / max * 100) + '%"></span></span><span class="stats__n">' + n + '</span>');
        b.type = 'button';
        b.setAttribute('aria-pressed', F[k] === v ? 'true' : 'false');
        b.setAttribute('aria-label', L[k].name[v] + ': ' + n + (n === 1 ? ' entry' : ' entries'));
        b.onclick = function () { toggle(k, v); };
        d.appendChild(b);
      });
      box.appendChild(d);
    });
  }

  // Timeline: x range follows the data, with a quarter grid.
  var W = 960, PAD = 120, RH = 30, TOP = 24, RIGHT = 16;
  function ts(s) { var p = s.split('-'); return Date.UTC(+p[0], +p[1] - 1, +p[2]); }
  var times = DATA.map(function (e) { return ts(e.d); });
  var minT = Math.min.apply(null, times), maxT = Math.max.apply(null, times);
  var first = new Date(minT), last = new Date(maxT);
  var t0 = Date.UTC(first.getUTCFullYear(), Math.floor(first.getUTCMonth() / 3) * 3, 1);
  var t1 = Date.UTC(last.getUTCFullYear(), Math.floor(last.getUTCMonth() / 3) * 3 + 3, 1);
  if (t1 <= t0) { t1 = t0 + 90 * 864e5; }
  function X(s) { return PAD + (ts(s) - t0) / (t1 - t0) * (W - PAD - RIGHT); }
  var cats = L.c.order;

  function timeline() {
    var H = TOP + cats.length * RH + 8, s = $('stats-tl');
    s.setAttribute('viewBox', '0 0 ' + W + ' ' + H);
    var h = '', q = new Date(t0);
    while (q.getTime() < t1) {
      var x = PAD + (q.getTime() - t0) / (t1 - t0) * (W - PAD - RIGHT), m = q.getUTCMonth();
      h += '<line class="gl" x1="' + x + '" x2="' + x + '" y1="' + (TOP - 6) + '" y2="' + (H - 8) + '"/>';
      if (m === 0 || q.getTime() === t0) { h += '<text x="' + x + '" y="10">' + q.getUTCFullYear() + (m ? ' Q' + (m / 3 + 1) : '') + '</text>'; }
      q = new Date(Date.UTC(q.getUTCFullYear(), m + 3, 1));
    }
    cats.forEach(function (c, i) {
      var y = TOP + i * RH + RH / 2, sel = F.c === c;
      h += '<line x1="' + PAD + '" x2="' + (W - RIGHT) + '" y1="' + y + '" y2="' + y + '" stroke="var(--rule-light)"/>' +
        '<g class="cl' + (sel ? ' is-sel' : '') + '" data-c="' + c + '" tabindex="0" role="button" aria-pressed="' + sel + '">' +
        '<rect x="0" y="' + (y - RH / 2) + '" width="' + PAD + '" height="' + RH + '" fill="transparent"/>' +
        '<text x="0" y="' + (y + 4) + '">' + c + ' · ' + esc(L.c.name[c]) + '</text></g>';
    });
    var seen = {};
    DATA.forEach(function (e, i) {
      var ci = cats.indexOf(e.c); if (ci < 0) { return; }
      var x = X(e.d), y = TOP + ci * RH + RH / 2, key = ci + ':' + Math.round(x / 10);
      seen[key] = (seen[key] || 0) + 1; x += (seen[key] - 1) * 10;
      h += '<circle class="' + (match(e) ? '' : 'is-off') + '" data-i="' + i + '" cx="' + x + '" cy="' + y + '" r="5" tabindex="0" role="link" aria-label="' + esc(e.t) + '"/>';
    });
    s.innerHTML = h;

    Array.prototype.forEach.call(s.querySelectorAll('.cl'), function (g) {
      g.onclick = function () { toggle('c', g.getAttribute('data-c')); };
      g.onkeydown = function (ev) { if (ev.key === 'Enter' || ev.key === ' ') { ev.preventDefault(); toggle('c', g.getAttribute('data-c')); } };
    });
    var tip = $('stats-tip'), wrap = $('stats-tlwrap');
    Array.prototype.forEach.call(s.querySelectorAll('circle'), function (c) {
      var e = DATA[+c.getAttribute('data-i')];
      function show() {
        var r = c.getBoundingClientRect(), w = wrap.getBoundingClientRect();
        tip.innerHTML = esc(e.t) + '<small>' + e.d + ' · ' + esc(e.co) + ' · ' + esc(L.s.name[e.s] || '') + '</small>';
        tip.style.opacity = 1;
        var left = r.left - w.left + r.width / 2 - tip.offsetWidth / 2;
        tip.style.left = Math.max(0, Math.min(w.width - tip.offsetWidth, left)) + 'px';
        tip.style.top = (r.top - w.top - tip.offsetHeight - 8) + 'px';
      }
      function hide() { tip.style.opacity = 0; }
      c.onmouseenter = show; c.onfocus = show; c.onmouseleave = hide; c.onblur = hide;
      c.onclick = function () { window.location.href = e.href; };
      c.onkeydown = function (ev) { if (ev.key === 'Enter') { window.location.href = e.href; } };
    });
  }

  function list() {
    var n = 0;
    DATA.forEach(function (e) { var ok = match(e); e.node.hidden = !ok; if (ok) { n++; } });
    $('stats-none').hidden = n > 0;
    return n;
  }

  function render() {
    var n = list();
    $('stats-count').textContent = n + ' of ' + DATA.length + ' entries';
    $('stats-reset').hidden = !(F.s || F.dp || F.so || F.b || F.c || F.q);
    charts(); timeline();
  }

  $('stats-q').oninput = function (e) { F.q = e.target.value.trim().toLowerCase(); render(); };
  $('stats-reset').onclick = function () {
    KEYS.forEach(function (k) { F[k] = null; }); F.q = ''; $('stats-q').value = ''; render();
  };
  render();
})();