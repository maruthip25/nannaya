function contentHeight(){var a=$(".page").outerHeight()-$(".top").outerHeight();a-=40,console.log(a),$(".content").css({height:a})}$(function(){$("#font-select").selectmenu({select:function(){var a=document.getElementById("font-select").value;$(".content").css({"font-family":a})}});var a=$("#spinner").spinner({min:24});$("#spinner").on("spinchange",function(){var b=a.spinner("value");$(".content").css({"font-size":b})}),$("#spinner").on("spin",function(){var b=a.spinner("value");$(".content").css({"font-size":b})}),a.spinner("value",24),$("input[type=submit], a, button").button().click(function(a){a.preventDefault()})}),$(".content").keyup(function(a){32==a.keyCode&&(console.log("Space!"),print_many_words())}),window.onload=contentHeight(),$(window).resize(function(){contentHeight()});