!function(){var t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),n=document.querySelector("body"),o=null;function r(){n.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}t.addEventListener("click",(function(){o=setInterval(r,1e3),t.toggleAttribute("disabled")})),e.addEventListener("click",(function(){clearInterval(o),t.removeAttribute("disabled")}))}();
//# sourceMappingURL=01-color-switcher.c52e5487.js.map
