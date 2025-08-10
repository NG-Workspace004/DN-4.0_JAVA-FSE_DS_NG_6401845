package com.singletonpattern;

public class Logger {
	private static Logger instance;

    //Ensuring the constructor of Logger is private
    private Logger() {}

    //Creating a public static method to get the instance of the Logger class
    public static Logger getInstance() 
    {
        if (instance == null) 
        {
            instance = new Logger();
        }
        return instance;
    }

    public void log(String message) 
    {
        System.out.println(message);
    }
}
