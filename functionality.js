$(document).ready(function(){

	$('.include-header').html('<header id="top"><div class="nav-container"> <a href="#" class="hamburger-icon"><img src=""></a> <a href="home.html"><div class="logo"></div></a><ul class="menu-list"><li><a href="home.html">Inicio</a></li><li><a href="home.html#nuestros-servicios">Nuestros servicios</a></li><li><a href="home.html#contact">Contacto</a></li></ul>		<div class="nav-contact"><a href="https://api.whatsapp.com/send?phone=5215540458063"><div id="wa-icon"></div></a><h4>55 40 45 80 63</h4></div></div></header>');

	$('.include-footer').html('<h4>B-Safe | Broker de seguros y fianzas</h4><h4>!Síguenos!</h4><div class="social-box"><div><a href="https://www.facebook.com/B-Safe-Broker-de-Seguros-y-Fianzas-134478256661299/"><img src="images/facebook-icon.png" id="fb-icon"></a></div><div><a href="https://twitter.com/BSafe_Seguros"><img src="images/twitter-icon.png"></a></div></div>');

	$('.hamburger-icon').on('click', function(){ 
				$('ul').toggleClass('show');
				console.log("click");
	});



});

