# Delete a Record - Triggers

**An HR system has an Employee table that holds a row for each employee within the company. Each record in the table has a employee id, employee name and manager column,  that holds the id for the employee's manager. Write a trigger so that when an employee  record is deleted, the record details need to be inserted into an table called Employee_archive along with the deleted date.**

EMPLOYEE: <br>
EMPID       NUMBER 	      PRIMARY KEY <br>
EMPNAME     VARCHAR2(25) 	 <br>
MANAGERID	  NUMBER 	<br>

EMPLOYEE_ARCHIVE:<br>
EMPID 	NUMBER 	PRIMARY KEY <br>
EMPNAME 	VARCHAR2(25) 	 <br>
MANAGERID	NUMBER 	 <br>
DELETED_DATE	DATE	 <br>

Note: Use '/' to terminate your query before compilation and evaluation

