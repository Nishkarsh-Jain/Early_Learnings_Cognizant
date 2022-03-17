function ValidatePAN()
{
    var txt=document.getElementById("txt").value;
    var pattern=/^[a-z]{5}[0-9]{4}[a-z]$/gi;
    
    if(pattern.test(txt))
    document.getElementById("result").innerHTML=txt+" is Valid";
    else
    document.getElementById("result").innerHTML=txt+" is Invalid";
}