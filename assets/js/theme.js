/* v5.3.8: isolated light/dark theme switch. Does not alter application state. */
(function () {
  'use strict';
  var root = document.documentElement;
  var key = 'pdGuideToolkit.theme';
  var toggle = document.getElementById('themeToggle');
  if (!toggle) return;
  function storedTheme() {
    try { return localStorage.getItem(key) === 'dark' ? 'dark' : 'light'; }
    catch (error) { return 'light'; }
  }
  function apply(theme) {
    var dark = theme === 'dark';
    if (dark) root.setAttribute('data-theme', 'dark');
    else root.removeAttribute('data-theme');
    toggle.setAttribute('aria-label', dark ? 'Switch to light theme' : 'Switch to dark theme');
    toggle.setAttribute('title', dark ? 'Switch to light theme' : 'Switch to dark theme');
    toggle.setAttribute('aria-pressed', String(dark));
  }
  apply(storedTheme());
  toggle.addEventListener('click', function () {
    var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    apply(next);
    try { localStorage.setItem(key, next); } catch (error) { /* storage unavailable */ }
  });
}());
