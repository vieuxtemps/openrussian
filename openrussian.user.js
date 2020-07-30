// ==UserScript==
// @name         OpenRussian Enhancer
// @namespace    https://github.com/vieuxtemps/
// @version      0.1
// @description  A userscript that makes openrussian.org keyboard friendly.
// @author       vieuxtemps
// @match        https://en.openrussian.org/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var results;

    // Updates results after a search is finished
    search.search = function( term ) {
		this.lastSearch = term;
		var showingResults = $('html').is('.searching');
		if ( (!term || !term.length) && showingResults ) {
			return this.onSearch( false );
		}
		if ( term && term.length && !showingResults ) {
			this.onSearch( true );
		}
		var that = this;
		$.ajax({
			method: 'GET',
			url: '/suggestions?q='+encodeURIComponent(term)+'&dummy='+Date.now(),
			dataType: 'json',
			success: function(o) {
				if ( term == that.lastSearch ) {
					window.showSearchResults(term, o);
				}
			},
            // This is the actual change
			complete: function(o) {
                results = document.getElementsByClassName("results")[0].getElementsByClassName("words")[0].children;

                // Hacky but it works
                setTimeout(function() {
                    for(var i = 0; i < 9; i++) {
                        var old_text = document.getElementsByClassName("results")[0].getElementsByClassName("words")[0].children[i].firstElementChild.firstElementChild.text;
                        if(old_text[0] != '[')
                            document.getElementsByClassName("results")[0].getElementsByClassName("words")[0].children[i].firstElementChild.firstElementChild.text = "[" + (i+1) + "] " + old_text;
                    }
                }, 1);
            }
		});
	};

    $(document).keydown(function(e) {
        var key = e.which;
        console.log(key);

        // Avoids weird Alt+Tab behaviour (focus loss)
        if(e.altKey) {
            e.preventDefault();
            e.stopPropagation();
        }
        // Allows page scrolling with [SPACE], [DOWN], [UP]
        else if(!e.ctrlKey && (key == 32 || key == 38 || key == 40)) {
            document.activeElement.blur();
        }
        // Plays main sound from the last opened word
        else if(key == 32 && e.ctrlKey) {
            document.activeElement.blur();
            var path = document.getElementsByClassName("icon icon-play play")[0].getAttribute("data-audio-src");
            if(path) {
                var audio = new Audio("https://en.openrussian.org" + path);
                audio.play();
            }
        }
        // Ctrl + 123456789
        else if(key >= 49 && key <= 57 && e.ctrlKey) {
            document.activeElement.blur();

            // Avoids tab switching with Ctrl + [NUMBER] on Chrome
            if(e.ctrlKey) {
                e.preventDefault();
                e.stopPropagation();
            }

            window.location.href = results[key-49].firstElementChild.firstElementChild.href;
        }
        // Type anywhere to focus
        else {
            var searchbox = $('*[placeholder=\"Enter term, e.g. house or человек\"]');
            var searchbox2 = $('*[placeholder=\"Search\"]');
            if(searchbox != undefined) searchbox.focus();
            if(searchbox2 != undefined) searchbox2.focus();
        }
    });

})();