package com.FinForecast;

public class Forecasting {
	public static double predictFutureValue(double initialAmount, double growthRate, int years) {
        if (years == 0) {
            return initialAmount;
        } else {
            return predictFutureValue(initialAmount, growthRate, years - 1) * (1 + growthRate);
        }
    }
}
