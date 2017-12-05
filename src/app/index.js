'use strict';


function onStylesheetLoaded() {
	console.log('app > onStylesheetLoaded()');
}


function addStylesheetAsLink(callback, href) {
	console.log('app > addLinkTag()', href);
	var tag = document.createElement('link');

	tag.setAttribute('rel', 'stylesheet');
	tag.setAttribute('href', href);
	tag.onload = callback;

	document.head.appendChild(tag);
}


function init() {
	addStylesheetAsLink(onStylesheetLoaded, 'http://localhost:8001/apps/SOME_APP_ID/index.css');
	document.getElementById('app').innerHTML = 'Hello World!';
}


init();
