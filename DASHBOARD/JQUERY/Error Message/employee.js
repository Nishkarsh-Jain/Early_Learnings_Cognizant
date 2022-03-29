$("#btn-id").click(function(){
    $.ajax({url:"employee.json", error:function(data, status, xhr){
       $("#err-id").append("Error Message: Not found"); 
    }});
});
