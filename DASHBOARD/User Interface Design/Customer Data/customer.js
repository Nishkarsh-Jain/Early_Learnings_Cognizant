$(".add-row").click(function(){
    var name=$("#name").val();
    var addon="<tr><td><input type='checkbox' name='record'></td><td>"+name+"</td></tr>";
    $("table tbody").append(addon);
});


$(".delete-row").click(function(){
    $("table tbody").find("input[name='record']").each(function(){
       if($(this).is(":checked")){
           $(this).parents("tr").remove();
       } 
    });
});
