package com.ecommerce;

public class BinarySearchFunction implements SearchFunction {

	@Override
	public Product Search(Product[] products, int sproductId) {
		int low = 0, high = products.length - 1;

        while (low <= high) {
            int mid = (low + high) / 2;
            int midId = products[mid].getProductId();

            if (midId == sproductId) {
                return products[mid];
            } else if (midId < sproductId) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
		return null;
	}
	
	public void SortByProductId(Product[] products)
	{
		int n = products.length;
        for (int i = 0; i < n - 1; i++) {
            for (int j = 0; j < n - i - 1; j++) {
                if (products[j].getProductId() > products[j + 1].getProductId()) {
                    // Swap products[j] and products[j + 1]
                    Product temp = products[j];
                    products[j] = products[j + 1];
                    products[j + 1] = temp;
                }
            }
        }
	}
}
