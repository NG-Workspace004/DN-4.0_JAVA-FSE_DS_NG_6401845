package com.ecommerce;

public class LinearSearchFunction implements SearchFunction {

	@Override
	public Product Search(Product[] products, int sproductId) {
		
		for(Product prd : products)
		{
			if(prd.getProductId() == sproductId)
				return prd;
		}
		return null;
	}

}
