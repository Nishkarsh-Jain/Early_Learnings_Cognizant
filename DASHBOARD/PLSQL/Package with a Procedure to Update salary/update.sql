create or replace package EMP_DESIGNATION as procedure emp_details(DESIGN EMPLOYEE.DESIGNATION%type, INCENTIVE number);
end;
/

CREATE OR REPLACE PACKAGE BODY EMP_DESIGNATION AS PROCEDURE EMP_DETAILS(DESIGN EMPLOYEE.DESIGNATION%TYPE, INCENTIVE NUMBER)
IS 
BEGIN
UPDATE EMPLOYEE
SET EMPLOYEE.SALARY = EMPLOYEE.SALARY + INCENTIVE
WHERE DESIGNATION = DESIGN;
DBMS_OUTPUT.PUT_LINE (SQL%ROWCOUNT ||'employee(s) are updated.');
END EMP_DETAILS;
END EMP_DESIGNATION;
/