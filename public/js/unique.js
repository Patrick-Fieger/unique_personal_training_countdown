$(document).ready(function() {
	
	function centerWrapper(){
		var height = $('.wrapper').height(),
		heightWindow = $(window).height(),
		diff = (heightWindow - height) / 2
		$('.wrapper').css('padding-top',diff + 'px');
	}


	$('#countdown').countdown({
		until: new Date('2015/05/01 00:00'),
		layout: '<div class="countdown-section"><div class="countdown-amount">{dn}</div><span class="sep">{sep}</span><span class="countdown-period">{dl}</span></div>'
			+'<div class="countdown-section"><div class="countdown-amount">{hnn}</div><span class="sep">{sep}</span><span class="countdown-period">{hl}</span></div>'
			+'<div class="countdown-section"><div class="countdown-amount">{mnn}</div><span class="sep">{sep}</span><span class="countdown-period">{ml}</span></div>'
			+'<div class="countdown-section secs"><div class="countdown-amount">{snn}</div><span class="countdown-period">{sl}</span></div>'
	});
	
	$('#form').submit(function(event) {
		event.preventDefault();
		var data = {
	    	email: $(".email").val()
		};
	
		$.ajax({
		    type: "POST",
		    url: "/email/email.php",
		    data: data,
		    success: function(){
		        
		    }
		});
	});

	setTimeout(function(){
		$('.loader').addClass('hide');
		setTimeout(function(){
			$('.wrapper').addClass('active');
		},400)
	},2000)

	$(window).smartresize(centerWrapper);
	centerWrapper();
});