!function(){var t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),n=document.querySelector("body");console.log(n);var o=null;t.addEventListener("click",(function(){t.disabled=!0,o=setInterval((function(){n.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3)})),e.addEventListener("click",(function(){t.disabled=!1,clearInterval(o)}))}();
//# sourceMappingURL=01-color-switcher.96707d0f.js.map
