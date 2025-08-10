package com.factorymethod;

public class Excel extends ExcelDocument {

	@Override
	public void openDocument() {
		System.out.println("Opening the Excel Document.");		
	}

	@Override
	public void calculateDocument() {
		System.out.println("Performing Calculation in the Excel Document.");
	}
	
}
