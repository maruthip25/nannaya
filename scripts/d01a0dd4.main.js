$(function(){$("#font-select").selectmenu({select:function(){var a=document.getElementById("font-select").value;$(".content").css({"font-family":a})}}),$("input[type=submit], a, button").button().click(function(a){a.preventDefault()})});