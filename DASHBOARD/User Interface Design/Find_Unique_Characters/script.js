function modifyString(str)
{
//fill code here
var ans=str.replace(/\s/g, '');
ans=ans.toLowerCase();
return ans;
}

function uniqueCharacters(str)
{
//fill code here
var string1="";
for(var i=0; i<str.length; i++)
{
if(string1.indexOf(str.charAt(i))==-1)
string1+=str.charAt(i);
}  
return modifyString(string1);
 
}
