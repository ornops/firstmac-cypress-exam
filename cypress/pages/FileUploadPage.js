class FileUploadPage {
	visit() {
		cy.visit('https://the-internet.herokuapp.com/upload');
	}

	uploadFile(filePath) {
		cy.get('#file-upload').selectFile(filePath);
	}

	clickUploadButton() {
		cy.get('#file-submit').click();
	}

	getUploadedFiles() {
		return cy.get('#uploaded-files');
	}

	assertFileUploaded(fileName) {
		this.getUploadedFiles().should('contain', fileName);
	}
}

export default new FileUploadPage();