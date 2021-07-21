// ==UserScript==
// @name         C003//Challenge Round
// @version      0.1
// @description  mousetrap keybinds for challenge page
// @author       asdia
// @match        https://www.nationstates.net/page=challenge
// @require      https://craig.global.ssl.fastly.net/js/mousetrap/mousetrap.min.js?a4098
// ==/UserScript==

(function() {
    'use strict';
    function noinput_mousetrap(event) {
        if (event.target.classList.contains("mousetrap")) {
            event.preventDefault();
            event.stopPropagation();
        }
    }
});

Mousetrap.bind(['enter'],  function(ev){let elem = document.getElementById("round-1")
   if (elem) {
    elem.click();
   }
   else {
       window.location.replace("https://www.nationstates.net/page=challenge?nations=NATION_NAME");
   }
});