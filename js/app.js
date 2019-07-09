import { UI, ItemsCntr, Selectors } from './Exports/export.js';

const App = (function(UI, ItemsCtr, Selectors) {	

	function loadEventListeners() {
		// Set Listeners
			// Collapse Divs
			$(Selectors.CardHeader).click(UI.collapseDiv);
			$(Selectors.CollapseDiv).on('hide.bs.collapse', UI.toggleArrowIcon);
			$(Selectors.CollapseDiv).on('show.bs.collapse', UI.toggleArrowIcon);

			// Handlers
		 	$(Selectors.AddItemBtn).on('click', AddBtnClickedHandler);
		 	$(Selectors.Body).on('click', Selectors.DeleteItemBtn, DeleteBtnClickHandler);

		 	// Close Modal Btn Handler
		 	$(Selectors.ModalCloseBtn).on('click', UI.toggleModal);
		 	// On Form Submit Handler
		 	$(Selectors.ModalForm).on('submit', FormSubmitHandler);
		 	// On Inner Inner Section Header ClickHandler
		 	$(Selectors.InnerSectionHeader).on('click', InnerSectionHeaderClickHandler);
	}

	function AddBtnClickedHandler(e) {
			// Prevent event default behaviour
			e.preventDefault();
			// determine the type of the item from the element that was clicked
			const itemType = $(this).data('type');
			// populate modal with the given type
			UI.populateModal(itemType);
			// toggleModal
			UI.toggleModal();
	}

	function DeleteBtnClickHandler(e) {
		e.preventDefault();
		// Delete from storage passing a clicked object data
		ItemsCntr.removeItem($(this).data());
			/* ! send http post req to server with the given data object ! */
		// Delete <tr> element from UI
		UI.removeItemFromSection($(this));
	}

	function FormSubmitHandler(e) {
		// prevent from default
		e.preventDefault();
		// disable the submit btn
		UI.toggleFormSubmittable();
		// create dataObject
		let dataObj = {};
		// get the data from the form
		const data = $(this).serializeArray();
		// Form data object from data array
		data.forEach( function(inputObj, index) {
			dataObj[inputObj.name] = inputObj.value;
		});
		// add item to item store
		const newItem = ItemsCtr.addItem(dataObj);
		// add type property to newItem object
		newItem.type = dataObj.type;
		// add item to ui
		UI.addItemToSection(newItem);
		// toggle modal
		UI.toggleModal(UI.toggleFormSubmittable);
	}

	function InnerSectionHeaderClickHandler(e) {
 		e.preventDefault();
 		/* Act on the event */
 		// if the clicked elem has or has not the clicked class on it.
 		($(this).attr('class').split(' ').indexOf('clicked__inner--section') === -1) 
 			? $(this).addClass('clicked__inner--section') 
 			: $(this).removeClass('clicked__inner--section');
 		// Clicked elem id
 		const clickedElemId = $(this).attr('id');
 		// Check all the other inner__section for being clicked or not
 		$(Selectors.InnerSectionHeader).each(function(idx, el) {
 			if(clickedElemId !== $(el).attr('id') && $(el).attr('class').split(' ').indexOf('clicked__inner--section') !== -1) {
 				$(el).removeClass('clicked__inner--section');
 			}
 		});
	}

	// Interface
	return {
		init: function() {
			loadEventListeners();
			console.log('[ Application has started... ]');
		}
	}

})(UI, ItemsCntr, Selectors);

App.init();
	























