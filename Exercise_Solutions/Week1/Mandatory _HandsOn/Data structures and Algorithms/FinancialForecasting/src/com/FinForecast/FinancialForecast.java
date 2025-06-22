package com.FinForecast;

public class FinancialForecast {
	private double initialamt;
	private double growthrate;
	private int years;
	
	FinancialForecast()
	{
		initialamt=0.0;
		growthrate=0.0;
		years=0;
	}

	public FinancialForecast(double initialamt, double growthrate, int years) {
		super();
		this.initialamt = initialamt;
		this.growthrate = growthrate;
		this.years = years;
	}

	public double getInitialamt() {
		return initialamt;
	}

	public void setInitialamt(double initialamt) {
		this.initialamt = initialamt;
	}

	public double getGrowthrate() {
		return growthrate;
	}

	public void setGrowthrate(double growthrate) {
		this.growthrate = growthrate;
	}

	public int getYears() {
		return years;
	}

	public void setYears(int years) {
		this.years = years;
	}

	@Override
	public String toString() {
		return "FinancialForecast [initialamt=" + initialamt + ", growthrate=" + growthrate + ", years=" + years + "]";
	}
	
}
