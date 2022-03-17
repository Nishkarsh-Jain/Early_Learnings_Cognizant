Please go through the below Function and Exception spec: (a) Function: Create a function named 'find_invoice_status' that will accept the cust_id as input. Based on this input, the function must return the status of the invoice of type varchar.

**Function name :** find_invoice_status

**Input Parameter :** cust_id in int

**Design rules:**
1)If customer_id(i.e, cust_id) passed as input, matches with the customer_id in the invoice table,then it returns the status for the given cust_id. 
2)If the customer_id passed as input, does not match with the id in the invoice table,then it throws 'no_data_found' exception and displays it with the text as  'No Such Customer'.
3)If the customer has more than one invoice ,then it throws an exeption 'TOO_MANY_ROWS' and displays it with a text as 'Multiple Rows Returned' .

Note: DO NOT CHANGE the given error code or error message description in your solution. Note: Kindly use variable to print the exceptions 
 Use '/' to terminate your query before compilation and evaluation

<img scr="order 2015(2).png"/>
