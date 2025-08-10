package com.code.java.JUnitPractice;

import static org.junit.jupiter.api.Assertions.*;
import org.junit.jupiter.api.Test;

public class CalculatorTest {

    @Test
    public void testAdd() {
        Calculator calculator = new Calculator();
        int result = calculator.add(3, 4);
        assertEquals(7, result);
        System.out.println("Addition Successful...");
    }

    @Test
    public void testSubtract() {
        Calculator calculator = new Calculator();
        int result = calculator.subtract(10, 5);
        assertEquals(5, result);
        System.out.println("Subtraction Successful...");
    }
    
    @Test
    public void testMultiply() {
        Calculator calculator = new Calculator();
        int result = calculator.multiply(8, 6);
        assertEquals(48, result);
        System.out.println("Multiplication Successful...");
    }

    @Test
    public void testDivide() {
        Calculator calculator = new Calculator();
        int result = calculator.divide(10, 5);
        assertEquals(2, result);
        System.out.println("Division Successful...");
    }
}

