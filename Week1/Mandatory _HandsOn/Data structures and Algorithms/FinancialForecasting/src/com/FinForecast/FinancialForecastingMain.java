package com.FinForecast;
import java.util.*;

public class FinancialForecastingMain {
	public static void main(String[] args) {
	
		Scanner sc = new Scanner(System.in);
	
		System.out.println("Enter the Initial Amount: ");
		double initialAmt = sc.nextDouble();
	
		System.out.println("Enter the Growth Rate: ");
		double growthRate = sc.nextDouble();
		
		System.out.println("Enter the Years: ");
		int years = sc.nextInt();
		
		//Displaying the Values
		FinancialForecast fp = new FinancialForecast(initialAmt, growthRate, years);
		fp.toString();
		
		//Predicting the Future Value
		double finalAmt = Forecasting.predictFutureValue(initialAmt, growthRate, years);
		System.out.println("The Future Predicted Amount is " + finalAmt);
		
		sc.close();
	}
}
