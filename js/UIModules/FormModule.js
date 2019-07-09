
import { Selectors } from '../Exports/export.js';

export const FormModule = (function({ Selectors }) {
		// Private methods and vars
		const FormStatus = {
			isFormSubmittable: true,
			isFormAccessible: true
		}

		function toggleFormSubmittable() {
			if(FormStatus.isFormSubmittable) {
				// add disabled attr to elem
				$(Selectors.FormSubmitBtn).attr('disabled', true);
			} else {
				// remove disabled attr from elem
				$(Selectors.FormSubmitBtn).attr('disabled', false);
			}

			FormStatus.isFormSubmittable = !FormStatus.isFormSubmittable;
		}

		function toggleFormAccessible() {
			if(FormStatus.isFormAccessible) {
				// add disabled attr to elem
				$(Selectors.AddItemBtn).attr('disabled', true);
			} else {
				// remove disabled attr from elem
				$(Selectors.AddItemBtn).attr('disabled', false);
			}

			FormStatus.isFormAccessible = !FormStatus.isFormAccessible;
		}

	return {
		toggleFormSubmittable,
		toggleFormAccessible
	}
})({ Selectors })
// Pass any variables 





