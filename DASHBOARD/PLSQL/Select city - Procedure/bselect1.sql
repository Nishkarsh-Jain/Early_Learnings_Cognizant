CREATE OR REPLACE PROCEDURE SELECT_CITY (USER_ID IN NUMBER, CITY_DETAILS OUT VARCHAR)
AS 

BEGIN 
SELECT CASE
WHEN CITY ='Bangalore' THEN 'User is from Bangalore'
WHEN CITY ='Chennai' THEN 'User is from Chennai'
ELSE 'User is from other cities'
END CASE
INTO CITY_DETAILS FROM CONTACT c WHERE USER_ID= c.ID;
END;
/