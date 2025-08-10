package com.factorymethod;

public class Word extends WordDocument {

	@Override
	public void openDocument() {
		System.out.println("Opening the Word Document.");	
	}

	@Override
	public void editDocument() {
		System.out.println("Editing the Word Document.");
	}

}
