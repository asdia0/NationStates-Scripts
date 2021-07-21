// ==UserScript==
// @name         NSZDay
// @version      0.1
// @namespace    asdia
// @description  zday shortcuts
// @author       asdia
// @noframes
// @match        https://www.nationstates.net/nation=*
// @require      https://craig.global.ssl.fastly.net/js/mousetrap/mousetrap.min.js?a4098
// @require      http://code.jquery.com/jquery-2.1.0.min.js
// @grant        window.close
// @run-at       document-end
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

Mousetrap.bind(['h'], function(ev){ let elem = document.getElementsByName("zsw_horde")[0];
if (elem) {
    elem.click();
}})

Mousetrap.bind(['k'], function(ev){ let elem = document.getElementsByName("zsw_tzes")[0];
if (elem) {
    elem.click();
}})

Mousetrap.bind(['c'], function(ev){ let elem = document.getElementsByName("zsw_cure")[0];
if (elem) {
    elem.click();
}})