import { ModalModule, Selectors, FormModule } from '../Exports/export.js';

// pass all dependency modules
export const UI = (function(ModalModule) {
	// Retrieve the modules Methods
	const { toggleModal, clearModal, populateModal } = ModalModule;
	const { toggleFormSubmittable, toggleFormAccessible } = FormModule;

	const CssClasses = {
		arrowDown: 'fa-chevron-down',
		arrowUp: 'fa-chevron-up'
	}

	// Public Methods

		// Collapse UI
			function collapseDiv(event) {
				// Get the corresponding collapsible id
				const collapseDivId = $(this).children().children('.btn-link').data('target');
				// Collapse it
				$(collapseDivId).collapse('toggle');
			}

			function toggleArrowIcon(event) {
				event.stopPropagation();
				// Get the arrow elem from clicked element
				const arrowElem = getArrowElem($(this));
				// Toggle arrow
					if (arrowElem) {
						if(arrowElem.hasClass(CssClasses.arrowDown)){
							arrowElem.removeClass(CssClasses.arrowDown);
							arrowElem.addClass(CssClasses.arrowUp);
						} else {
							arrowElem.removeClass(CssClasses.arrowUp);
							arrowElem.addClass(CssClasses.arrowDown);
						}
					}		
			}

			function getArrowElem(clickedElem) {
				let arrowElem;
				const arrowId = clickedElem.parent().children().first().attr('id') + 'Arrow';

				$('.section__arrow').each(function(index, el) {
					if($(el).data('arrowid') == arrowId){
						arrowElem = $(el);
					}
				});	

				return arrowElem;
			}

		// UI main functions
			function addItemToSection(itemObj) {
				const SectionSelector = '#' + itemObj.type + '_section';
				$(SectionSelector).append(`
				 <tr>
					  <th scope="row">${itemObj.id + 1}</th>
					  <td>${itemObj.value}</td>
					  <td><button class='deleteButton btn' data-objectId='${itemObj.id}' data-type='${itemObj.type}'><i class="far fa-trash-alt"></i></button></td>
				  </tr>
				`);
			}	

			function removeItemFromSection(clickedElem) {
				const selectedItem = $(clickedElem).parent().parent();
				
				selectedItem.fadeOut('slow', function() {
					$(this).remove();
				});
			}

	return {
		// UI Native Functions
			collapseDiv,
			toggleArrowIcon,
			addItemToSection,
			removeItemFromSection,
		// UI Modules Functions
			// ModalModule
				populateModal,
				clearModal,
				toggleModal,
			// FormModule
				toggleFormSubmittable,
				toggleFormAccessible

	}

})(ModalModule)




