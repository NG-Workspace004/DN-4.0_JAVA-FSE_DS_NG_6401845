package com.factorymethod;

public class Test {
	public static void main (String args[]) {
		
		DocumentFactory wordFactory = new WordDocFactory();
		Document wordDoc = wordFactory.createDocument();
		wordDoc.openDocument();
		((WordDocument)wordDoc).editDocument();
		
		DocumentFactory excelFactory = new ExcelDocFactory();
		Document excelDoc = excelFactory.createDocument();
		excelDoc.openDocument();
		((ExcelDocument)excelDoc).calculateDocument();
		
		DocumentFactory pdfFactory = new PdfDocFactory();
		Document pdfDoc = pdfFactory.createDocument();
		pdfDoc.openDocument();
		((Pdf)pdfDoc).viewDocument();
		
	}
}
