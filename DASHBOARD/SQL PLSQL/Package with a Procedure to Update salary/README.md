Package with a Procedure to update salary
Create a PL/SQL Package with Procedure in it.  Procedure will take designation and incentive as input and update the employee salary by adding the incentive for the given designation. Display the number of employee records that have got updated, e.g. ‘3 employee record(s) are updated’.

Note: Use '/' to terminate your query before compilation and evaluation

Employee:

|Column name|Data type|Constraints|
|----------|----------|---------|
|EMP_ID|NUMBER(5)|PK|
|EMP_NAME|VARCHAR2(25)|NOT NULL|
|SALARY|NUMBER(10,2)||
|DESIGNATION|VARCHAR2(25)| |

 


EMP_ID	EMP_NAME	SALARY	DESIGNATION <br>
101	Mathew	45000	PROGRAMMER <br>
102	Sam	54000	MANAGER <br>
103	John	35000	TEAM LEAD <br>
104	James	48000	PROGRAMMER <br>
105	Josh	25000	TESTER <br>

Functional Requirements:
Package name as  EMP_DESIGNATION, and
Procedure signature:
EMP_DETAILS(design employee.designation%TYPE, incentive number);
