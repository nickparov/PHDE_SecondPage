import { Selectors, FormModule } from '../Exports/export.js';

export const ModalModule = (function(Selectors, FormModule) {
			const { toggleFormAccessible } = FormModule;

			// Private methods and vars
			const ModalStatus = {
				isOpened: false
			}
	
			function populateModal(itemType) {
				// Change Modal Title to Obj.type
				$(Selectors.ModalTitle).text(`Add ${itemType}`)
				// populate modalForm based on the item_type
				switch (itemType) {
					case 'journal':
						// populate modal with neeeded html template
							$(Selectors.ModalForm).append(`
								<input type="text" name="title" class="form-control input" placeholder="Title goes here" value=""/>
								<input type="hidden" name="type" class="form-control input" value="journal"/>
								<button class="btn form-submit__button btn-primary btn-block" type="submit">Save</button>
							`);
						break;
					case 'book':
						// populate modal with neeeded html template
							$(Selectors.ModalForm).append(`
								<input type="text" name="title" class="form-control input" placeholder="Title goes here" value=""/>
								<input type="hidden" name="type" class="form-control input" value="book"/>
								<button class="btn form-submit__button btn-primary btn-block" type="submit">Save</button>
							`);
						break;
					case 'workshop':
						$(Selectors.ModalForm).append(`
								<input type="text" name="title" class="form-control input" placeholder="Title goes here" value=""/>
								<input type="hidden" name="type" class="form-control input" value="workshop"/>
								<button class="btn form-submit__button btn-primary btn-block" type="submit">Save</button>
							`);						
						break;
					case 'misc':
						$(Selectors.ModalForm).append(`
								<input type="text" name="title" class="form-control input" placeholder="Title goes here" value=""/>
								<input type="hidden" name="type" class="form-control input" value="misc"/>
								<button class="btn form-submit__button btn-primary btn-block" type="submit">Save</button>
							`);
						break;
					default:
						// statements_def
						break;
				}
			}

			function clearModal() {
				$(Selectors.ModalForm).html('');
			}

			function toggleModal(callback = null) {
				toggleFormAccessible();

				if(!ModalStatus.isOpened) {
					$(Selectors.ModalContainer).slideDown( 700, function() {
						// change modalOpened status
							ModalStatus.isOpened = !ModalStatus.isOpened;
						// check for callback func
							if(typeof callback === 'function') 
								callback();

					});
				} else {
					$(Selectors.ModalContainer).slideUp( 700, function() {
						// change modalOpened status
							ModalStatus.isOpened = !ModalStatus.isOpened;
						// check for callback func
							if(typeof callback === 'function') 
								callback();

						clearModal();
					});
				}
			}

	return {
		toggleModal,
		clearModal,
		populateModal
	}
})(Selectors, FormModule)
// Pass any variables 





