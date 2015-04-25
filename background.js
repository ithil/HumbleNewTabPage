chrome.tabs.onCreated.addListener(function(tab) {
	if (tab.url.indexOf('opera://startpage') === 0) {
		chrome.tabs.update(tab.id, {
			'url': 'newtab.html'
		});
	}
});
