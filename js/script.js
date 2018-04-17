$(document).ready(function(){
	var oHeight=($(window).height())-70;
	$('.section').css('height',oHeight);

    $(".menu a").click(function(){
        $(".menu li").removeClass("active");
        $(this).parents('li').addClass("active");
    });
});