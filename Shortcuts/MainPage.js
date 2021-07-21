// ==UserScript==
// @name         Main Page Shortcut
// @version      0.1
// @namespace    issue
// @description  mousetrap keybinds for main page
// @author       asdia
// @match        https://www.nationstates.net/*
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
Mousetrap.bind(['m'], function(ev){window.location.replace("https://www.nationstates.net/");});
Mousetrap.bind(['v'], function(ev){window.location.replace("https://www.nationstates.net/page=deck/value_deck=1");});
Mousetrap.bind(['i'], function(ev){window.location.replace("https://www.nationstates.net/page=dilemmas");});
Mousetrap.bind(['t'], function(ev){window.location.replace("https://www.nationstates.net/page=deck");});
Mousetrap.bind(['r'], function(ev){window.close();});