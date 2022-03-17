$("#each_ex").click(function(){
    $("#men_ex ul li a").css("background-color", "yellow");
    $("#list li").each(function(){
       var txt=$(this).text();
       $("#msg_ex").append(txt);
       $("#msg_ex").append("<br>");
    });
 });
 