class CheckboxesPage {
	visit() {
		cy.visit('https://the-internet.herokuapp.com/checkboxes');
	}

	checkAllCheckboxes() {
		cy.get('#checkboxes input').each(($checkbox) => {
			cy.wrap($checkbox).then(($el) => {
				if (!$el.is(':checked')) {
					cy.wrap($el).check();
				}
			});
		});
	}

	assertAllCheckboxesChecked() {
		cy.get('#checkboxes input').each(($checkbox) => {
			cy.wrap($checkbox).should('be.checked');
		});
	}
}

export default new CheckboxesPage();