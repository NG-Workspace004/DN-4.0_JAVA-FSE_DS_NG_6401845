package com.factorymethod;

public class ExcelDocFactory extends DocumentFactory {

	@Override
	public Document createDocument() {
		return new Excel();
	}

}
