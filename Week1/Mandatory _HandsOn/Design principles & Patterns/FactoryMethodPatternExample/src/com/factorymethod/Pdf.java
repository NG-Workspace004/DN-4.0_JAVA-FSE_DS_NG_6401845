package com.factorymethod;

public class Pdf extends PdfDocument {

	@Override
	public void openDocument() {
		System.out.println("Opening the Pdf Document.");
	}

	@Override
	public void viewDocument() {
		System.out.println("Viewing the PdfDocument.");
	}

}
