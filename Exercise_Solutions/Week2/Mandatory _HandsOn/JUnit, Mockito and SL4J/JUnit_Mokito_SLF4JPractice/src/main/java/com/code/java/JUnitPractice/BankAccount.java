package com.code.java.JUnitPractice;

public class BankAccount {
    private int accbalance;

    public BankAccount(int initialBalance) {
        this.accbalance = initialBalance;
    }

    public void deposit(int depositeamount) {
        accbalance += depositeamount;
    }

    public void withdraw(int withdrawlamount) {
        accbalance -= withdrawlamount;
    }

    public int getBalance() {
        return accbalance;
    }
}

