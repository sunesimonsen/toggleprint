javascript:(function toggle(){"object"!=typeof window.__togglePrint&&(window.__togglePrint={});var t=window.__togglePrint,e=document.head.parentNode,r="enabled"===e.getAttribute("data-printmode");if(!r){var n=Array.prototype.slice.call(document.getElementsByTagName("link")).filter(function(t){return"stylesheet"===t.getAttribute("rel").toLowerCase()&&t.hasAttribute("media")});t.screens=n.filter(function(t){return"screen"===t.getAttribute("media").toLowerCase()}),t.prints=n.filter(function(t){return"print"===t.getAttribute("media").toLowerCase()})}r=!r,t.screens.forEach(function(t){t.setAttribute("media",r?"none":"screen")}),t.prints.forEach(function(t){t.setAttribute("media",r?"all":"print")}),e.setAttribute("data-printmode",r?"enabled":"disabled")})()