# Procedure with Exception Handling
Create a PL/SQL Procedure to insert employee details into Employee table. Before inserting, check whether the employee age is eligible or not.  Employee age should be 18 or greater.  Values are passed as argument to the procedure.  

If age valid, insert employee record into table and print the message "Age valid - Record inserted", else print the message "Age invalid - Record not inserted" by raising an exception.

Table: EMPLOYEE

|Column name|Data type|Constraints|
|-----------|-----------|----------|
|EMP_ID|NUMBER(5)|PK|
|EMP_NAME|VARCHAR2(25)|NOT NULL|
|AGE|NUMBER(3)|  |
 

 Note: Use '/' to terminate your query before compilation and evaluation

**Functional Requirement:**

PROCEDURE CHECK_AGE_ELIGIBILITY(

 v_id IN EMPLOYEE.EMPID%TYPE, 

 v_name IN EMPLOYEE.EMPNAME%TYPE, 


 v_age IN EMPLOYEE.AGE%TYPE)

**Sample Input 1 :**

CHECK_AGE_ELIGIBILITY(103, 'Robert',  24 ) ;                                                    

**Sample Output 1:**

Age valid - Record inserted                                                     

**Sample Input 2:**

CHECK_AGE_ELIGIBILITY(104,'Riya', 4 );                    

**Sample Output 2:**                                   

Age invalid - Record not inserted 

