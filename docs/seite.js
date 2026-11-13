// Download-Links aus der Update-Beschreibung (aktualisierung.json im Repo) setzen und den Knopf
// für das eigene System hervorheben. Ohne Skript zeigen alle Links auf die Release-Seite.
(function () {
  var QUELLE = "https://raw.githubusercontent.com/SammiElPadre/Atramentum/main/aktualisierung.json";
  var ua = navigator.userAgent || "";
  var system = /Android/i.test(ua) ? "android" : /Mac/i.test(ua) && !/iPhone|iPad/i.test(ua) ? "mac"
    : /Windows/i.test(ua) ? "windows" : /Linux/i.test(ua) ? "linux-deb" : null;
  var namen = { mac: "Mac", windows: "Windows", "linux-deb": "Linux", android: "Android" };
  var haupt = document.querySelector("[data-hauptdownload]");
  fetch(QUELLE, { cache: "no-cache" }).then(function (r) { return r.json(); }).then(function (b) {
    document.querySelectorAll("[data-plattform]").forEach(function (a) {
      var d = b.dateien[a.getAttribute("data-plattform")];
      if (d) { a.href = d.url; a.setAttribute("data-mb", Math.round(d.groesse / 1e6)); }
    });
    document.querySelectorAll("[data-version]").forEach(function (e) { e.textContent = b.version; });
    if (haupt && system && b.dateien[system]) {
      haupt.href = b.dateien[system].url;
      var vorlage = haupt.getAttribute("data-hauptdownload");
      haupt.textContent = vorlage.replace("{system}", namen[system]);
    }
  }).catch(function () { /* Links bleiben auf der Release-Seite */ });
})();
