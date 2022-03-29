DECLARE 
DEP DEPARTMENT.DEPARTMENT_NAME%TYPE;

CURSOR CUR
IS
SELECT DEPARTMENT_NAME FROM DEPARTMENT ORDER BY DEPARTMENT_NAME;

BEGIN
OPEN CUR;
LOOP
FETCH CUR INTO DEP;
EXIT WHEN CUR%NOTFOUND;
DBMS_OUTPUT.PUT_LINE(DEP);
END LOOP;
CLOSE CUR;
END;
/