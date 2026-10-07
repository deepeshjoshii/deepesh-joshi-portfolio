(function () {
  "use strict";
  var year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  // Highlight the current section in the top navigation (progressive enhancement).
  if (!("IntersectionObserver" in window)) return;
  var links = document.querySelectorAll('.nav ul a[href^="#"]');
  var map = {};
  links.forEach(function (a) { map[a.getAttribute("href").slice(1)] = a; });
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (!e.isIntersecting) return;
      links.forEach(function (a) { a.classList.remove("active"); });
      if (map[e.target.id]) map[e.target.id].classList.add("active");
    });
  }, { rootMargin: "-35% 0px -55% 0px" });
  Object.keys(map).forEach(function (id) {
    var el = document.getElementById(id);
    if (el) io.observe(el);
  });
})();
