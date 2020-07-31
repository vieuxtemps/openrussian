// ==UserScript==
// @name         OpenRussian Enhancer - Italics
// @namespace    https://github.com/vieuxtemps/
// @version      0.1
// @description  A userscript that makes openrussian.org keyboard friendly.
// @author       vieuxtemps
// @match        https://*.openrussian.org/*
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';

    GM_addStyle(`body > main {font-style: italic;}`);
    GM_addStyle(`#content {font-style: italic;}`);
    GM_addStyle(`body > main > div.search > div.box.ruchars-container > div > input[type=text] {font-style: italic;}`);
    GM_addStyle(`body > div.global-search.search > label > input[type=text] {font-style: italic;}`);
})();