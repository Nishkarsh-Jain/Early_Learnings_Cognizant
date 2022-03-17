CREATE OR REPLACE FUNCTION find_invoice_status(CUST_ID INVOICE.CUSTOMER_ID%TYPE)
RETURN VARCHAR
is
CUST_STATUS VARCHAR(255);
BEGIN
SELECT STATUS INTO CUST_STATUS FROM INVOICE
WHERE CUSTOMER_ID=CUST_ID;
RETURN CUST_STATUS;

EXCEPTION
WHEN NO_DATA_FOUND 
THEN RETURN 'No Such Customer';
WHEN TOO_MANY_ROWS 
THEN  return 'Multiple Rows Returned';

END;
/