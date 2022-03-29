function wordPlay(number){
    //fill the code
    if(number>50)
    return 'Range is High';
    
    else if(number<1)
    return 'Not Valid';
    
    else if(number>=1 || number<=50)
    {var ans=" ";
    for(var i=1; i<=number; i++)
    {
       
        if(i%3===0 && i%5===0)
        ans+='Jump ';
        else if(i%3===0)
        ans+='Tap ';
        else if(i%5===0)
        ans+='Clap ';
        else 
        ans+=i+' ';
        
    }
     ans=ans.substring(0, ans.length-1);
    return ans;
    }
}