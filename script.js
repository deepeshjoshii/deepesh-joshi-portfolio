(function () {
  "use strict";
  // Analytics: sign up free at goatcounter.com, then put your site code here (e.g. "deepeshjoshii"). Leave empty to disable.
  var GC_CODE = "";
  if (GC_CODE) {
    var s = document.createElement("script");
    s.async = true;
    s.src = "https://gc.zgo.at/count.js";
    s.setAttribute("data-goatcounter", "https://" + GC_CODE + ".goatcounter.com/count");
    document.head.appendChild(s);
    // Count clicks on links tagged data-track (resume, reports, models, tools).
    document.addEventListener("click", function (e) {
      var a = e.target.closest && e.target.closest("[data-track]");
      if (a && window.goatcounter && window.goatcounter.count) {
        window.goatcounter.count({ path: "click/" + a.getAttribute("data-track"), title: a.textContent.trim(), event: true });
      }
    });
  }

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
