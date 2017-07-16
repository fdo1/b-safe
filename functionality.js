$(document).ready(function(){

	$('.include-header').html('<header id="top"><div class="nav-container"> <a href="#" class="hamburger-icon"><img src=""></a> <div class="logo"></div><ul class="menu-list"><li><a href="index.html?name=fe&email=asd%40a&message=asd#top">Inicio</a></li><li><a href="#">Nuestros socios</a></li><li><a href="index.html?name=fe&email=asd%40a&message=asd#nuestros-servicios">Nuestros servicios</a></li><li><a href="index.html?name=fe&email=asd%40a&message=asd#contact">Contacto</a></li></ul>		<div class="nav-contact"><div id="wa-icon"></div><h4>55 20 67 37 69</h4></div></div></header>');

	$('.include-footer').html('<h4>B-Safe | Broker de seguros y fianzas</h4><h4>!Síguenos!</h4><div class="social-box"><div><a href="#"><img src="images/facebook-icon.png" id="fb-icon"></a></div><div><a href="#"><img src="images/youtube-icon.png"></a></div><div><a href="#"><img src="images/twitter-icon.png"></a></div></div>');

	$('.hamburger-icon').on('click', function(){ 
				$('ul').toggleClass('show');
				//$('ul').slideToggle(400);
				console.log("click");
	});



});

