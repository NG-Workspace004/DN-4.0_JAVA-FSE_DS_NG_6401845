package com.singletonpattern;

public class Test {
	public static void main(String[] args) 
	{
        Logger logger1 = Logger.getInstance();
        Logger logger2 = Logger.getInstance();

        logger1.log("This is a log message from logger1.");
        logger2.log("This is a log message from logger2.");

        // Check if both references point to the same instance
        if (logger1 == logger2) 
        {
            System.out.println("Both logger1 and logger2 are the same instance.");
        } 
        else 
        {
            System.out.println("logger1 and logger2 are different instances.");
        }
    }
}
