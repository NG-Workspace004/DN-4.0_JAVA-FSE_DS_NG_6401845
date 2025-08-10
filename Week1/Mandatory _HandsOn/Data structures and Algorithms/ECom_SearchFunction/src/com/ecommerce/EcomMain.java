package com.ecommerce;
import java.util.*;

public class EcomMain {
	public static void main(String[] args) {
        Product[] products = {
            new Product(1, "Laptop", "Electronics"),
            new Product(2, "Shirt", "Clothing"),
            new Product(3, "Phone", "Electronics"),
            new Product(4, "Shoes", "Footwear"),
            new Product(5, "Eye Liner", "Cosmetics")
        };
        
        Scanner sc = new Scanner(System.in);
        // Linear Search (No need to sort)
        System.out.println("Enter the productid to be searched: ");
        int id = sc.nextInt();
        System.out.println("Applying Linear Search Technique");
        LinearSearchFunction ls = new LinearSearchFunction();
        Product p1 = ls.Search(products, id);
        if(p1!=null)
        {
        	System.out.println("The Product is found.");
        	System.out.println("The Product Details are: "+p1);
        }
        else
        	System.out.println("The Product is Not Found");
        
        
        System.out.println("Enter the productid to be searched: ");
        int id1 = sc.nextInt();
        System.out.println("Applying Binary Search Technique");
        // Sort for Binary Search
        BinarySearchFunction bs = new BinarySearchFunction();
        bs.SortByProductId(products);

        // Binary Search
        Product p2 = bs.Search(products, id1);
        if(p2!=null)
        {
        	System.out.println("The Product is found.");
        	System.out.println("The Product Details are: "+p2);
        }
        else
        	System.out.println("The Product is Not Found");
        
        sc.close();
    }
}
