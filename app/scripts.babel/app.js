// Load script only on html documents
if (document instanceof HTMLDocument) {
		const script = document.createElement('script');
		script.src = chrome.runtime.getURL('/dist/scripts/adfly.js');
		(document.head || document.documentElement).appendChild(script);
}
