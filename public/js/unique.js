$(document).ready(function() {
	var heightWindow;
	var height;
	function centerWrapper(){
		height = $('.wrapper').height()
		heightWindow = $(window).height(),
		diff = (heightWindow - height) / 2
		$('.wrapper').css('padding-top',diff + 'px');
	}

	function initAnimation(){
		var logoheight = $('.logo_wrapper').height();
		var diff = (height - logoheight) / 2
		$('.logo_wrapper').css('margin-top',diff - 100 + 'px')
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
		        $(".email").val('');
		        $(".email").attr('placeholder','Email erfolgreich eingetragen!');
		        setTimeout(function(){
		        	$(".email").attr('placeholder','Email');
		        },5000)
		    }
		});
	});

	setTimeout(function(){
		$('body').scrollTop(0);
		$('.loader').addClass('hide');
		setTimeout(function(){
			$('.wrapper').addClass('active');
			setTimeout(function(){
				$('.logo_wrapper').addClass('active');
				setTimeout(function(){
					$('.content_wrapper,body').addClass('active');
				},1200)
			},3000)
		},400)
	},2000)

	$(window).smartresize(centerWrapper);
	centerWrapper();
	initAnimation();
});