// ==UserScript==
// @name        Hacker News Search Bar
// @description Moves the search box from the bottom, up to the top
// @match       https://news.ycombinator.com/news*
// ==/UserScript==

form = document.querySelector("form[action='//hn.algolia.com/']");
form.parentNode.removeChild(form);
form.removeChild(form.childNodes[0]);
form.style.marginTop = 5;
form.style.marginBottom = 5;
form.elements[0].placeholder = "Search";
pagetop = document.querySelectorAll(".pagetop")[1];
pagetop.append(form);
pagetop.parentNode.style.paddingTop = 5;
