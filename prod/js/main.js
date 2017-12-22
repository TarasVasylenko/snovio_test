
/*Open/close modal window*/
$('.btn-add').on('click', function() {
	$('.modal-window-wrap').css('z-index', '10').css('opacity', '1');
	setTimeout(function(){
		$('.modal-window').css('opacity', '1').css('transform', 'translate(-50%, -70%)');
	}, 300);	
});

$('.btn-modal-close').on('click', function() {
	$('.modal-window').css('transform', 'translate(-75%, -70%)');
	$('.modal-window').css('opacity', '0')
	setTimeout(function(){
		$('.modal-window-wrap').css('opacity', '0');	
	}, 800);
	setTimeout(function(){
		$('.modal-window-wrap').css('z-index', '-1');
	}, 1200);
});


/*Json data*/
var socials = {
	"facebook": {
		"bg":"linear-gradient(to bottom left, #39579A 0%, #2C4479 100%)",
		"icon":"svg/Facebook-color.svg",
		"total": 1786,
		"descr":"follovers",
		"count": {
			"day": -20,
			"week": 40,
			"month": -180
		},	
		"arrow": {
			"arrow_1": "svg/arrow_up.svg",
			"arrow_2": "svg/arrow_down.svg"
		},		
		"photo": "images/avatar_2.png",
		"name": "@abhisek.daas",
		"color": "#ffffff"
	},

	"twitter": {
		"bg":"linear-gradient(to bottom left, #059FF5 0%, #059FC3 100%)",
		"icon":"svg/Twitter-color.svg",
		"total": 1575,
		"descr":"follovers",
		"count": {
			"day": 50,
			"week": 150,
			"month": -420
		},	
		"arrow": {
			"arrow_1": "svg/arrow_up.svg",
			"arrow_2": "svg/arrow_down.svg"
		},		
		"photo": "images/avatar_5.png",
		"name": "@wholetthedasout",
		"color": "#ffffff"
	},

	"instagram": {
		"bg":"linear-gradient(to top right, #e66221 0%, #7022b8 100%)",
		"icon":"svg/Instagram-color.svg",
		"total": 1125,
		"descr":"follovers",
		"count": {
			"day": 52,
			"week": 86,
			"month": -345
		},	
		"arrow": {
			"arrow_1": "svg/arrow_up.svg",
			"arrow_2": "svg/arrow_down.svg"
		},		
		"photo": "images/avatar_1.jpg",
		"name": "@wholetthedasout",
		"color": "#ffffff"
	},

	"linkedin": {
		"bg":"linear-gradient(to bottom left, #007EBB 0%, #007E9D 100%)",
		"icon":"svg/LinkedIn-color.svg",
		"total": 1125,
		"descr":"follovers",
		"count": {
			"day": -43,
			"week": 125,
			"month": -563
		},	
		"arrow": {
			"arrow_1": "svg/arrow_up.svg",
			"arrow_2": "svg/arrow_down.svg"
		},		
		"photo": "images/avatar_1.jpg",
		"name": "@abhisekd3",
		"color": "#ffffff"
	},

	"youtube": {
		"bg":"linear-gradient(to bottom left, #CE1312 0%, #B01312 100%)",
		"icon":"svg/Youtube-color.svg",
		"total": 1246,
		"descr":"subscribers",
		"count": {
			"day": 26,
			"week": 89,
			"month": -547
		},	
		"arrow": {
			"arrow_1": "svg/arrow_up.svg",
			"arrow_2": "svg/arrow_down.svg"
		},		
		"photo": "images/avatar_3.jpg",
		"name": "@TheAbhisekD",
		"color": "#ffffff"
	},

	"snapcat": {
		"bg":"linear-gradient(to bottom left, #FFFE00 0%, #F3F200 100%)",
		"icon":"svg/Youtube-color.svg",
		"total": 1547,
		"descr":"snap score",			
		"photo": "images/avatar_5.png",
		"name": "@abhisekd",
		"color": "#000000"
	},

	"google+": {
		"bg":"linear-gradient(to bottom left, #F93F2D 0%, #C73F2D 100%)",
		"icon":"svg/GooglePlus-color.svg",
		"total": 1547,
		"descr":"follovers",			
		"photo": "images/avatar_3.jpg",
		"name": "@+AbhisekDas",
		"color": "#ffffff"
	},

	"vine": {
		"bg":"linear-gradient(to bottom left, #008E87 0%, #00B687 100%)",
		"icon":"svg/Vine-color.svg",
		"total": 1547,
		"descr":"loops",			
		"photo": "images/avatar_4.jpg",
		"name": "@1316139228245221376",
		"color": "#ffffff"
	},
};


/*Initializing DOM elements from object*/
$.each(socials,function( key, data ) {

	$('.app').append(
		'<div class="col-lg-3 col-md-4 col-sm-6">'+
		'<div class="card ' + key + '" style="background: ' + data.bg + '">'+
		'<img class="icon" src="' + data.icon + ' " alt="icon" />'+
		'<span class="total" style="color: ' + data.color + '">' + data.total + '</span>'+
		'<span class="descr" style="color: ' + data.color + '">' + data.descr + '</span>'+
		'</div>'+
		'<img class="photo" src="' + data.photo + '" alt="photo"/>'+
		'<div class="info">'+
		'<span class="social">' + key + '</span>'+
		'<a href="#" class="name">' + data.name + '</a>'+
		'</div>'+
		'</div>'
		);

	if ( data.arrow ) {
		var icon = (data.count.day > 0) ? data.arrow.arrow_1 : data.arrow.arrow_2; 
		$( '.' + key ).append('<img class="arrow" src="' + icon + '"/>');
	};
	
	if (data.count ) {
		var preIndex = (data.count.day > 0) ? '+' : '';
		$( '.' + key ).append('<span class="count">' + preIndex + data.count.day + '</span>');
	};

});


/*Filters*/
$('.btn-day').on('click', function() {
	$.each(socials, function( key, data ) {

		if (data.count ) {
			var preIndex = (data.count.day > 0) ? '+' : '';
			$('.' + key + ' .count').html(data.count.day);
		};

		if ( data.arrow ) {
			var icon = (data.count.day > 0) ? data.arrow.arrow_1 : data.arrow.arrow_2; 
			$( '.' + key + ' .arrow' ).attr("src", icon );
		};

	});
});

$('.btn-week').on('click', function() {
	$.each(socials, function( key, data ) {
		if (data.count ) {
			var preIndex = (data.count.week > 0) ? '+' : '';
			$('.' + key + ' .count').html(data.count.week);
		};

		if ( data.arrow ) {
			var icon = (data.count.week > 0) ? data.arrow.arrow_1 : data.arrow.arrow_2; 
			$( '.' + key + ' .arrow' ).attr("src", icon);
		};

	});
});

$('.btn-month').on('click', function() {
	$.each(socials, function( key, data ) {
		if (data.count ) {
			var preIndex = (data.count.month > 0) ? '+' : '';
			$('.' + key + ' .count').html(data.count.month);
		};

		if ( data.arrow ) {
			var icon = (data.count.month > 0) ? data.arrow.arrow_1 : data.arrow.arrow_2; 
			$( '.' + key + ' .arrow' ).attr("src",  icon );
		};

	});
});






