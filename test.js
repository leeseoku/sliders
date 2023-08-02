



















$(function(){let count =0; 


    setInterval(function(){count++; count %= $(".slider > div").length;       
    $(".slider > div").eq(count).addClass("op").siblings().removeClass("op")}, 1200)})