package com.factorymethod;

public class PdfDocFactory extends DocumentFactory {

	@Override
	public Document createDocument() {
		return new Pdf();
	}

}
