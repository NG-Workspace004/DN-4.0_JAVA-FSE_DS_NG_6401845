package com.code.java.JUnitPractice;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

public class BankAccountTest {

    private BankAccount account;

    // Setup method - runs before each test
    @BeforeEach
    public void accountSetUp() {
        account = new BankAccount(1000);  // Arrange: create new account with balance 1000
        System.out.println("Setting up the account before test...");
    }

    @Test
    public void testDeposit() {
        // Arrange: Already done in setUp()

        // Act
        account.deposit(500);

        // Assert
        assertEquals(1500, account.getBalance());
        
        System.out.println("Amount Deposited Successfully...");
    }

    @Test
    public void testWithdraw() {
        // Arrange: Already done in setUp()

        // Act
        account.withdraw(800);

        // Assert
        assertEquals(200, account.getBalance());
        
        System.out.println("Amount Withdrawn Successfully...");
    }
    
 // Tear down method - runs after each test
    @AfterEach
    public void accountTearDown() {
        account = null;
        System.out.println("Cleaning up the account after test...");
    }
}
