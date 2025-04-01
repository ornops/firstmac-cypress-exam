import FileUploadPage from '../pages/FileUploadPage';

describe('File Upload', () => {
	beforeEach(() => {
		FileUploadPage.visit();;
	});

	it('should upload a file successfully', () => {

		FileUploadPage.uploadFile('cypress/fixtures/example.txt'); // Replace with your file path
		FileUploadPage.clickUploadButton();
		FileUploadPage.assertFileUploaded('example.txt'); // Replace with your file name
	});
});