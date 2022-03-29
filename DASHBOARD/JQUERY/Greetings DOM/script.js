function display(){
    var name=document.getElementById("sname").value;
    var select=document.getElementById("course").value;
    var course;
    
    if(name=="")
    {
    document.getElementById("greet").innerHTML="Name cannot be empty";   
    // document.write("Name cannot be empty");  will work same but test case not get pass.
    }
    
    if(name!="")
    {
    if(select=="Java")
    {
    course="Java";    
    }
    
    else if(select=="Python")
    {
        course="Python";
    }
    
    else if(select=="Oracle")
    {
        course="Oracle";
    }
    document.getElementById("greet").innerHTML="Hi, "+name+". You have successfully registered for the "+course+" course.";
}
}
