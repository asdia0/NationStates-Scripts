// ==UserScript==
// @name         C001//Challenge Page
// @version      0.1
// @description  mousetrap keybinds for challenge page
// @author       asdia
// @noframes
// @match        https://www.nationstates.net/nation=*
// @match        https://www.nationstates.net/page=challenge
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

Mousetrap.bind(['shift'], function(ev){window.location.replace("https://www.nationstates.net/page=challenge?nations=NATION_NAME");});