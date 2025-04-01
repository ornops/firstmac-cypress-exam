import LoginPage from '../pages/LoginPage';

describe('Login Functionality Tests', () => {
	beforeEach(() => {
		LoginPage.visit();
	});

	it('should login successfully with valid credentials', () => {
		LoginPage.enterUsername('tomsmith');
		LoginPage.enterPassword('SuperSecretPassword!');
		LoginPage.clickLogin();

		// Assert success message
		LoginPage.getSuccessMessage();
	});

	it('should display an error message when logging in with an invalid password', () => {
		LoginPage.enterUsername('tomsmith');
		LoginPage.enterPassword('WrongPassword!');
		LoginPage.clickLogin();

		// Assert error message
		LoginPage.getErrorMessage();
	});
});