/*$("button").click(function(){
	$("p").text("hello,how r u?");

});
*/
/*print single image
$("button").click(function(){
		$("p").html('<img src="img/2.jpg"/>');

});
*/
/*
$("button").click(function(){
	for(var i=0;i<3;i++)
		$("p").html('<img src="/img"'+i+'.jpg"/>');
});
*/
/*
$("button"):animate({
	heigth: 80%
	width: 200px},


	
});
*/
$(document).ready(function(){
    $("#btn1").click(function(){
        alert("Text: " + $("#test").text());
    });
    $("#btn2").click(function(){
        alert("HTML: " + $("#test").html());
    });
});
