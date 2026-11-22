/* Apply the visitor's saved theme before the page is drawn (no flash). */
(function () {
  try {
    var t = localStorage.getItem("et-theme");
    if (t === "light" || t === "dark") document.documentElement.setAttribute("data-theme", t);
  } catch (e) {}
})();
