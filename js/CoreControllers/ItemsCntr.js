export const ItemsCntr = (function() {
	// Private methods, vars and classes
	let storage = {
		Publications: [
			[], // Journals
			[], // Books
			[], // Workshops
			[] // Miscs
		],
		Presentations: [],
		Awards: [],
		ItemTypes: {
			Publications: [
				'journal',
				'book',
				'workshop',
				'misc'
			],
			Presentations: 'presentation',
			Awards: 'award'
		}
	}

	class Item {
		constructor(value) {
			this.value = value;
			this.name = 'newObject';
		}
	}

	// Public 
	function getStorage() {
		return storage;
	}

	function addItem(dataObj) {
		// Check if it exists in our Publication item type
		if(storage.ItemTypes.Publications.indexOf(dataObj.type) !== -1) {
			// Create a new instance of object
			const newObj = new Item(dataObj.title);
			// Getting the idx of needed publication array
			const idx = storage.ItemTypes.Publications.indexOf(dataObj.type);
			// Forming id of an object
			let objId;
			if(storage.Publications[idx].length > 0) 
				objId = storage.Publications[idx].length;
			else
				objId = 0;
			// Adding an id prop to object
			newObj.id = objId;
			// Add to the arr
			const newArr = storage.Publications[idx].concat(newObj);
			storage.Publications[idx] = newArr;
			// return newObject
			return newObj;
		} else {
			console.log('Error: [ ENTERED WRONG TYPE TO ADD ITEM FUNCTION IN ITEM_CONTROLLER ]')
		}
	}

	function removeItem(dataObj) {
		if(storage.ItemTypes.Publications.indexOf(dataObj.type) !== -1) {
			// Getting the idxArr of needed publication array
			const idxArr = storage.ItemTypes.Publications.indexOf(dataObj.type);

			// Filter the arr
			const newArr = storage.Publications[idxArr].filter((item) => item.id !== dataObj.objectid);
			storage.Publications[idxArr] = newArr;

			return true;
		} else {
			console.log('Error: [ ENTERED WRONG TYPE TO DELETE ITEM FUNCTION IN ITEM_CONTROLLER ]')
			return false;
		}
	}


	return {
		addItem,
		getStorage,
		removeItem
	}

})();










