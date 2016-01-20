function walk(node)
{
	// I stole this function from here:
	// http://is.gd/mwZp7E

	var child, next;

	switch ( node.nodeType )
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child )
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode)
{
	var v = textNode.nodeValue;

	v = v.replace(/\b3 dogs\b/g, "2 dogs");
	v = v.replace(/\b3 cats\b/g, "2 cats");

	textNode.nodeValue = v;
}

if (window.location.href.match(/wspmn\.gov/)) {
	walk(document.body);
}

// chrome.tabs.getSelected(null, function(tab) {
// 	alert(tab.url);
// 	if (tab.url.match(/wspmn\.gov/)) {
// 		walk(document.body);
// 	}
// });
