var chkbox= $('input[type="checkbox"]');
 chkbox.change(function(){
     var counter=chkbox.filter(":checked").length;
    
     if(counter==1)
        $('#result').text(counter+' box is checked');
    else    
    $('#result').text(counter+' boxes are checked');

 });
