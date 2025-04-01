class LoginPage {
	constructor() {
		this.usernameInput = '#username';
		this.passwordInput = '#password';
		this.loginButton = 'button[type="submit"]';
		this.successMessage = '.flash.success';
	}

	visit() {
		cy.visit('https://the-internet.herokuapp.com/login');
	}

	enterUsername(username) {
		cy.get(this.usernameInput).type(username);
	}

	enterPassword(password) {
		cy.get(this.passwordInput).type(password);
	}

	clickLogin() {
		cy.get(this.loginButton).click();
	}

	getSuccessMessage() {
		return cy.get('#flash').should('contain.text', 'You logged into a secure area!');
	}

	getErrorMessage() {
		return cy.get('#flash').should('contain.text', 'Your password is invalid!');
	}
}

export default new LoginPage();