CREATE OR REPLACE PROCEDURE insert_credit
(CREDIT_ID NUMBER, 
CREDIT_CARD_NUMBER VARCHAR, 
CREDIT_CARD_EXPIRE VARCHAR,
HOLDER_NAME VARCHAR,
CARD_TYPE VARCHAR)

AS 

BEGIN 
INSERT INTO credit_card VALUES(CREDIT_ID, CREDIT_CARD_NUMBER, CREDIT_CARD_EXPIRE, HOLDER_NAME, CARD_TYPE);

END;
/