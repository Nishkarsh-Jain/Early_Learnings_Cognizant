function findPrimeNumber(number)
{
    //fill the code
    if(number==1)
    return (number+" is neither a prime number nor a composite number");
    
    else if(number>1){
        var res=false;
    for(var i=2; i<number; i++)
    {
        if(number%i==0 && number!=i)
        res=true;
    }
    if(res)
    return (number+" is not a prime number");
    else
    return (number+" is a prime number");
    
    }
}