const allowitem = (item) => {
	bKeep = true;
	const nodeDesc = item.title + "/n" + item.description; 
	const nodeAuth = item.author;
	const nodeCat = item.category;

	const filters = require('./RSSfilters.json');
	console.log (item.title);
	bKeep = keepItem (nodeDesc,filters.descFilters);
	if (bKeep===true) {
		bKeep = keepItem (nodeAuth,filters.authFilters);
	}
	console.log (bKeep);
	return bKeep;
}

function keepItem(sNode,aFilters) {
	let bKeep = true;
	let fLen = aFilters.length;
	//console.log ("***Array length is " + fLen);
	if (sNode !== undefined) {
		for (let i=0; i < fLen; i++) {
			//console.log ("Checking filter " + i + ":" + aFilters[i]);
			//console.log (aFilters[i]);
			if (sNode.includes(aFilters[i])) {
				console.log ("Found " + aFilters[i]);
				bKeep = false;
				break;
			}
		}
	}
	return bKeep;
}

exports.allowitem = allowitem;
