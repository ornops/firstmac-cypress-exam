import CheckboxesPage from '../pages/CheckBoxesPage'

describe('Checkbox Selection Test', () => {
	beforeEach(() => {
		CheckboxesPage.visit();
	});

	it('should select both checkboxes if they are not already checked', () => {
		CheckboxesPage.checkAllCheckboxes();
		CheckboxesPage.assertAllCheckboxesChecked();
	});
});