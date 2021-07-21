// ==UserScript==
// @name         NSRegionChange
// @version      0.1
// @namespace    asdia
// @description  change regions on ns
// @author       asdia
// @noframes
// @match        https://www.nationstates.net/region=REGION
// @match        https://www.nationstates.net/page=change_region
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

Mousetrap.bind(['enter'], function(ev){ let elem = document.getElementsByName("move_region")[0];
if (elem) {
    elem.click();
}
else {
    window.close();
}
}
)