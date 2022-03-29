function validateEmail(email) {
    //fill the code
    
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
   {
     return ("Valid email address!");
   }
     else
     return ("Invalid email address!")
 }