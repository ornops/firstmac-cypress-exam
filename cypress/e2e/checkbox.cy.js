import CheckboxesPage from '../pages/CheckBoxesPage'

describe('Checkbox Selection Test', () => {
	beforeEach(() => {
		CheckboxesPage.visit();
	});

	it('should select both checkboxes if they are not already checked', () => {
		CheckboxesPage.checkAllCheckboxes();

		// Assert both checkboxes are checked
		CheckboxesPage.assertAllCheckboxesChecked();
	});
});