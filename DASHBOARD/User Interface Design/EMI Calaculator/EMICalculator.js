function calculateEMI(){
    var p=document.getElementById("principalAmount").value;
    var x=document.getElementById("interestRate").value;
    var i=(x/100)/12;
    var t=document.getElementById("tenure").value;
    
   var x=Math.pow((1+i),t);
   var up=(p*i*x);
   var down=(x-1);
   var res=(up/down).toFixed(2);

    
document.getElementById("result").innerHTML="EMI is Rs."+res;
return false;
}