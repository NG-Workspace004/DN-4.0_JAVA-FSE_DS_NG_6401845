REM   Script: DN 4.0 JAVA FSE_PL SQL PROGRAMMING
REM   PL SQL PROGRAMMING

CREATE TABLE Customers ( 
    CustomerID NUMBER PRIMARY KEY, 
    Name VARCHAR2(100), 
    DOB DATE, 
    Balance NUMBER, 
    LastModified DATE 
);

CREATE TABLE Accounts ( 
    AccountID NUMBER PRIMARY KEY, 
    CustomerID NUMBER, 
    AccountType VARCHAR2(20), 
    Balance NUMBER, 
    LastModified DATE, 
    FOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID) 
);

CREATE TABLE Transactions ( 
    TransactionID NUMBER PRIMARY KEY, 
    AccountID NUMBER, 
    TransactionDate DATE, 
    Amount NUMBER, 
    TransactionType VARCHAR2(10), 
    FOREIGN KEY (AccountID) REFERENCES Accounts(AccountID) 
);

CREATE TABLE Loans ( 
    LoanID NUMBER PRIMARY KEY, 
    CustomerID NUMBER, 
    LoanAmount NUMBER, 
    InterestRate NUMBER, 
    StartDate DATE, 
    EndDate DATE, 
    FOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID) 
);

CREATE TABLE Employees ( 
    EmployeeID NUMBER PRIMARY KEY, 
    Name VARCHAR2(100), 
    Position VARCHAR2(50), 
    Salary NUMBER, 
    Department VARCHAR2(50), 
    HireDate DATE 
);

INSERT INTO Customers (CustomerID, Name, DOB, Balance, LastModified) 
VALUES (1, 'John Doe', TO_DATE('1985-05-15', 'YYYY-MM-DD'), 1000, SYSDATE);

INSERT INTO Customers (CustomerID, Name, DOB, Balance, LastModified) 
VALUES (2, 'Jane Smith', TO_DATE('1990-07-20', 'YYYY-MM-DD'), 1500, SYSDATE);

INSERT INTO Accounts (AccountID, CustomerID, AccountType, Balance, LastModified) 
VALUES (1, 1, 'Savings', 1000, SYSDATE);

INSERT INTO Accounts (AccountID, CustomerID, AccountType, Balance, LastModified) 
VALUES (2, 2, 'Checking', 1500, SYSDATE);

INSERT INTO Transactions (TransactionID, AccountID, TransactionDate, Amount, TransactionType) 
VALUES (1, 1, SYSDATE, 200, 'Deposit');

INSERT INTO Transactions (TransactionID, AccountID, TransactionDate, Amount, TransactionType) 
VALUES (2, 2, SYSDATE, 300, 'Withdrawal');

INSERT INTO Loans (LoanID, CustomerID, LoanAmount, InterestRate, StartDate, EndDate) 
VALUES (1, 1, 5000, 5, SYSDATE, ADD_MONTHS(SYSDATE, 60));

INSERT INTO Employees (EmployeeID, Name, Position, Salary, Department, HireDate) 
VALUES (1, 'Alice Johnson', 'Manager', 70000, 'HR', TO_DATE('2015-06-15', 'YYYY-MM-DD'));

INSERT INTO Employees (EmployeeID, Name, Position, Salary, Department, HireDate) 
VALUES (2, 'Bob Brown', 'Developer', 60000, 'IT', TO_DATE('2017-03-20', 'YYYY-MM-DD'));

SELECT * FROM Customers;

SELECT * FROM Accounts;

SELECT * FROM Transactions;

SELECT * FROM Loans;

SELECT * FROM Employees;

COMMIT;

BEGIN  
    FOR cust_rec IN (SELECT CustomerID, DOB FROM Customers) LOOP  
        DECLARE  
            v_age NUMBER;  
        BEGIN  
            -- Calculate age  
            v_age := TRUNC(MONTHS_BETWEEN(SYSDATE, cust_rec.DOB) / 12);  
  
            -- Check if customer age is greater than 60  
            IF v_age > 60 THEN  
                -- Apply 1% discount on interest rate  
                UPDATE Loans  
                SET InterestRate = InterestRate - 1  
                WHERE CustomerID = cust_rec.CustomerID;  
  
                -- Display success message  
                DBMS_OUTPUT.PUT_LINE('1% discount applied to Customer ID: ' || cust_rec.CustomerID);  
            ELSE  
                -- Display message for customers not eligible  
                DBMS_OUTPUT.PUT_LINE('No discount applied. Customer ID: ' || cust_rec.CustomerID || ' is aged ' || v_age || ' years.');  
            END IF;  
        END;  
    END LOOP;  
  
    COMMIT;  
END; 
/

ALTER TABLE Customers ADD (IsVIP VARCHAR2(5));

BEGIN   
    FOR cust_rec IN (SELECT CustomerID, Name, Balance FROM Customers) LOOP   
        BEGIN   
            -- Check if customer balance is greater than 10000   
            IF cust_rec.Balance > 10000 THEN   
                -- Promote the customer to VIP  
                UPDATE Customers   
                SET IsVIP = 'TRUE'   
                WHERE CustomerID = cust_rec.CustomerID;   
   
                -- Display VIP Promotion message   
                DBMS_OUTPUT.PUT_LINE('Customer ID ' || cust_rec.CustomerID || 'with Customer Name ' || cust_rec.Name || ' promoted to VIP.');   
            ELSE   
                -- Display message for Non VIP customers  
                UPDATE Customers   
                SET IsVIP = 'FALSE'   
                WHERE CustomerID = cust_rec.CustomerID;  
                DBMS_OUTPUT.PUT_LINE('Customer ID ' || cust_rec.CustomerID || 'with Customer Name ' || cust_rec.Name || ' not promoted to VIP.');   
            END IF;   
        END;   
    END LOOP;   
   
    COMMIT;   
END; 
/

BEGIN  
    DECLARE 
    	v_customerName VARCHAR2(100); 
	BEGIN 
    	FOR loan_rec IN ( 
        	SELECT l.LoanID, l.CustomerID, l.EndDate 
        	FROM Loans l 
        	WHERE l.EndDate BETWEEN SYSDATE AND SYSDATE + 30) LOOP 
        	-- Extract the details of the specified customers 
        	SELECT Name INTO v_customerName 
        	FROM Customers 
        	WHERE CustomerID = loan_rec.CustomerID; 
			-- Display the Reminder message 
        	DBMS_OUTPUT.PUT_LINE('Reminder: Loan ID ' || loan_rec.LoanID || 
                             ' for customer ' || v_customerName || 
                             ' is due on ' || TO_CHAR(loan_rec.EndDate, 'YYYY-MM-DD')); 
    	END LOOP; 
	END; 
    COMMIT;  
END; 
/

CREATE OR REPLACE PROCEDURE ProcessMonthlyInterest AS 
BEGIN 
    UPDATE Accounts 
    SET Balance = Balance + (Balance * 0.01) 
    WHERE AccountType = 'Savings'; 
 
    COMMIT; 
 
    DBMS_OUTPUT.PUT_LINE('Monthly interest processed for all savings accounts.'); 
END; 
/

BEGIN 
    ProcessMonthlyInterest; 
END; 
/

SELECT * FROM Accounts;

CREATE OR REPLACE PROCEDURE UpdateEmployeeBonus ( 
    p_department IN VARCHAR2, 
    p_bonus_percentage IN NUMBER 
) AS 
BEGIN 
    UPDATE Employees 
    SET Salary = Salary + (Salary * p_bonus_percentage / 100) 
    WHERE Department = p_department; 
 
    IF SQL%ROWCOUNT > 0 THEN 
        DBMS_OUTPUT.PUT_LINE('Bonus updated for department: ' || p_department); 
    ELSE 
        DBMS_OUTPUT.PUT_LINE('No employees found in department: ' || p_department); 
    END IF; 
 
    COMMIT; 
END; 
/

BEGIN 
    UpdateEmployeeBonus('HR', 10); 
END; 
/

BEGIN 
    UpdateEmployeeBonus('Sales', 8.5); 
END; 
/

SELECT * FROM Employees;

CREATE OR REPLACE PROCEDURE TransferFunds ( 
    p_fromAccountID IN NUMBER, 
    p_toAccountID IN NUMBER, 
    p_amount IN NUMBER 
) AS 
    v_balance NUMBER; 
BEGIN 
    -- Check source balance 
    SELECT Balance INTO v_balance FROM Accounts WHERE AccountID = p_fromAccountID; 
 
    IF v_balance < p_amount THEN 
        RAISE_APPLICATION_ERROR(-20003, 'Insufficient balance in source account.'); 
    END IF; 
 
    -- Deduct from source 
    UPDATE Accounts 
    SET Balance = Balance - p_amount 
    WHERE AccountID = p_fromAccountID; 
 
    -- Credit destination 
    UPDATE Accounts 
    SET Balance = Balance + p_amount 
    WHERE AccountID = p_toAccountID; 
 
    COMMIT; 
 
    DBMS_OUTPUT.PUT_LINE('Funds transferred from Account ' || p_fromAccountID || ' to ' || p_toAccountID); 
 
EXCEPTION 
    WHEN OTHERS THEN 
        ROLLBACK; 
        DBMS_OUTPUT.PUT_LINE('Error during fund transfer: ' || SQLERRM); 
END; 
/

BEGIN 
    TransferFunds(1, 2, 500); 
END; 
/

SELECT * FROM Accounts;

COMMIT;

