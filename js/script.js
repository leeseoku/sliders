
$(document).ready(function(){
    let h = $("#slider").height();
    let n = -1

setInterval(function(){
    $("#slider ul").animate(  {"marginTop" : h*n}, 250,
    function(){  $(this).find("li").eq(0).appendTo($(this)); $(this).css({"marginTop" : 0}) }
);
},3000);})