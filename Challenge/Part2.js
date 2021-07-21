// ==UserScript==
// @name         C002//Challenge Submit
// @version      0.1
// @description  mousetrap keybinds for challenge page
// @author       asdia
// @noframes
// @match        https://www.nationstates.net/page=challenge?nations=fungsland
// @require      https://craig.global.ssl.fastly.net/js/mousetrap/mousetrap.min.js?a4098
// @grant        window.close
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

Mousetrap.bind(['enter'],  function(ev){let elem = document.querySelector("input[type='submit']")
   if (elem) {
    elem.click();
}});