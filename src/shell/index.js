'use strict';


function loadApp(url) {
	console.log('shell > loadApp()', url);
	addScriptTag(onAppLoaded, url + '?cache-bust=' + Math.round(Math.random() * 100000000));
}


function onAppLoaded() {
	console.log('shell > onAppLoaded()');
	hideAppLoadBusyContainer();
	hideAppLoadFailedContainer();
}


function addScriptTag(callback, src) {
	console.log('shell > addScriptTag()', src);
	var s = document.createElement('script');

	s.setAttribute('type', 'text/javascript');
	s.setAttribute('src', src);
	s.setAttribute('async', false);
	s.onload = callback;

	document.body.appendChild(s);
}


function hideSplashScreen() {
	if (navigator.splashscreen) {
		navigator.splashscreen.hide();
	}
}


function showAppLoadBusyContainer() {
	document.getElementById('app-load-busy-container').classList.remove('hidden');
}

function hideAppLoadBusyContainer() {
	document.getElementById('app-load-busy-container').classList.add('hidden');
}


function showAppLoadFailedContainer() {
	document.getElementById('app-load-failed-container').classList.remove('hidden');
}

function hideAppLoadFailedContainer() {
	document.getElementById('app-load-failed-container').classList.add('hidden');
}


function displayErrorMessage() {
	hideAppLoadBusyContainer();
	showAppLoadFailedContainer();
	hideSplashScreen();
}


function start() {
	console.log('shell > start()');
	showAppLoadBusyContainer();
	hideAppLoadFailedContainer();

	setTimeout(function () {
		loadApp('http://localhost:8001/apps/SOME_APP_ID/index.js');
	}, 1000);
}


function addDeviceReadyHandler() {
	console.log('shell > addDeviceReadyHandler()');
	if (window.cordova) {
		document.addEventListener('deviceready', function () {
			start();
		}, false);
	} else {
		start();
	}
}


function init() {
	console.log('shell > init()');
	addDeviceReadyHandler();
}


init();
