# OpenRussian Enhancer

![ru](ru.png)

A userscript that makes [openrussian.org](https://en.openrussian.org/) keyboard friendly.

# Features/hotkeys
* Type anywhere to search (including after a possible focus loss from alt-tabbing)
* Press Ctrl + \[1~9\] to view the respective word from the search result list
* Press Ctrl + \[SPACE\] to listen to a word's pronunciation
* Press Ctrl + \[ , \] to go back to the previous word
* Press Ctrl + \[ . \] to go back to the next word
* Press Ctrl + D to switch between English/Russian and German/Russian dictionaries
* Press [TAB] to switch between meanings of words with two forms (e.g. [знать](https://en.openrussian.org/ru/%D0%B7%D0%BD%D0%B0%D1%82%D1%8C))
* When viewing a word, scrolling is possible with &#8595; and &#8593; (without search bar focus)
* Automatically clears the search box when typing after a tab/window focus change, or after a keyboard layout change (default: Alt+Shift)

# Installing
Install *openrussian.user.js* with a userscript manager such as [Tampermonkey](https://www.tampermonkey.net/).
* (Optional) For site-wide cyrillic italics (греческий -> *греческий*), install *openrussian.italics.user.js*.

# Additional info
* Disabling the virtual keyboard is advised
* Tested only with Tampermonkey/Chrome