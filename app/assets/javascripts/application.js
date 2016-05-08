// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require_tree .

$(document).ready(function(){

	// Variables
	var $carousel = $(".carousel.slide");
		
	// Functions
	autoPlayYouTubeModal();
	flashDisappear();
	addEventListeners();

	//FUNCTION TO GET AND AUTO PLAY YOUTUBE VIDEO FROM DATATAG
	function autoPlayYouTubeModal() {
	    var trigger = $("body").find('[data-toggle="modal"]');
	    trigger.click(function () {
	        var theModal = $(this).data("target"),
	            videoSRC = $(this).attr("data-theVideo"),
	            videoSRCauto = videoSRC + "?autoplay=1";
	        $(theModal + ' iframe').attr('src', videoSRCauto);
	        $(theModal + ' button.close').click(function () {
	            $(theModal + ' iframe').attr('src', videoSRC);
	        });
	        $('.modal').click(function () {
	            $(theModal + ' iframe').attr('src', videoSRC);
	        });
	    });
	}

	// Function to have flash messages disappear after 3 seconds
	function flashDisappear(){
		var $flashMessage = $(".flash");
		setTimeout(function() {
			$flashMessage.hide();
		}, 3000);
	}

	// Start sliding after video is finished or click on button
		
	function startSlide(){
		$carousel.attr('data-interval') = true;
		// setTimeout(function(){
		// }172000)
	}
	var addEventListeners = function(){
		$("li.carousel-indicator").on("click", function(){
			$carousel.attr('data-interval') = true;
		})
	}

});

