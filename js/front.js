

$(function() {

    animations();
    utils();
    carousels();
	dropdownMenu();
	filterTitle();
	breadCrumbs();
	myShopBoxClass();
	customSelect2();
	listSort();
});


$(window).load(function() {
    $(this).alignElementsSameHeight();
});

$(window).resize(function() {
    setTimeout(function() {
	$(this).alignElementsSameHeight();
    }, 150);
});



/* List Sort By Control */

function listSort(){
	
	$(".myshp_listsort_block ").each(function(){
		$(this).addClass("form-inline");
	});
}
/* Add Form Control */

function customSelect2(){
	
	$("select").each(function(){
		$(this).addClass("form-control");
	});
	
	$("input").each(function(){
		$(this).addClass("form-control");
	});
}

/* Add Box class */
function myShopBoxClass(){
	$('.myshp_block_editor > .myshp_box').each(function(){
		$(this).addClass("box");
	})
	$('.myshp_listsort_block').each(function(){
		$(this).addClass("box");
	})
} 

/* DropDown Checked*/

function dropdownMenu(){ 
	$('.navbar-nav > li').each(function(){
		if ($(this).find(".dropdown-menu .yamm-content > .row").length) {

		} else {
			$(this).removeClass("dropdown");
			$(this).find(".caret").hide();
			$(this).find(".dropdown-menu").hide();
			$(this).find("a").removeAttr("data-hover");
			$(this).find("a").removeAttr("data-toggle")
		}
	});
}


function utils() {


    /* click on the box activates the radio */

    $('#checkout').on('click', '.box.shipping-method, .box.payment-method', function(e) {
	var radio = $(this).find(':radio');
	radio.prop('checked', true);
    });
    /* click on the box activates the link in it */

    $('.box.clickable').on('click', function(e) {

	window.location = $(this).find('a').attr('href');
    });
    /* external links in new window*/

    $('.external').on('click', function(e) {

	e.preventDefault();
	window.open($(this).attr("href"));
    });
    /* animated scrolling */

    $('.scroll-to, .scroll-to-top').click(function(event) {

	var full_url = this.href;
	var parts = full_url.split("#");
	if (parts.length > 1) {

	    scrollTo(full_url);
	    event.preventDefault();
	}
    });
    function scrollTo(full_url) {
	var parts = full_url.split("#");
	var trgt = parts[1];
	var target_offset = $("#" + trgt).offset();
	var target_top = target_offset.top - 100;
	if (target_top < 0) {
	    target_top = 0;
	}

	$('html, body').animate({
	    scrollTop: target_top
	}, 1000);
    }
	
	/* Desactivate OnClik in relatedProductList */	
    $('.product_list_related_box a').each(function() {
		$(this).attr('onclick','').unbind('click');
	});
}

function carousels() {

    $("#get-inspired").owlCarousel({
	navigation: true, // Show next and prev buttons
	slideSpeed: 300,
	paginationSpeed: 400,
	autoPlay: true,
	stopOnHover: true,
	singleItem: true,
	afterInit: ''
    });

    $('.product-slider').each(function() {
		$(this).owlCarousel({
		navigation: true, // Show next and prev buttons
		slideSpeed: 300,
		paginationSpeed: 400,
		afterInit: function() {
			$('.product-slider .item').css('visibility', 'visible');
		}
		});
    });

}

/* Filter menus */

function filterTitle() {
    $('.myshp_block_menu_filter').each(function() {
		$(this).find(".myshp_menu__title").addClass("panel-heading");
		$(this).find(".myshp_menu__title_text").addClass("panel-title");
		$(this).addClass("panel panel-default sidebar-menu");
		$(this).find(".myshp_box").addClass("panel-body");
	})	
}


/* Breadcrumbs add Class */
function breadCrumbs() {
	$(".myshp_breadcrumb_block").addClass("breadcrumb");
}


/* animations */

function animations() {
    delayTime = 0;
    $('[data-animate]').css({opacity: '0'});
    $('[data-animate]').waypoint(function(direction) {
	delayTime += 150;
	$(this).delay(delayTime).queue(function(next) {
	    $(this).toggleClass('animated');
	    $(this).toggleClass($(this).data('animate'));
	    delayTime = 0;
	    next();
	    //$(this).removeClass('animated');
	    //$(this).toggleClass($(this).data('animate'));
	});
    },
	    {
		offset: '90%',
		triggerOnce: true
	    });

    $('[data-animate-hover]').hover(function() {
	$(this).css({opacity: 1});
	$(this).addClass('animated');
	$(this).removeClass($(this).data('animate'));
	$(this).addClass($(this).data('animate-hover'));
    }, function() {
	$(this).removeClass('animated');
	$(this).removeClass($(this).data('animate-hover'));
    });

}

$.fn.alignElementsSameHeight = function() {
    $('.same-height-row').each(function() {

	var maxHeight = 0;

	var children = $(this).find('.same-height');

	children.height('auto');

	if ($(document).width() > 768) {
	    children.each(function() {
		if ($(this).innerHeight() > maxHeight) {
		    maxHeight = $(this).innerHeight();
		}
	    });

	    children.innerHeight(maxHeight);
	}

	maxHeight = 0;
	children = $(this).find('.same-height-always');

	children.height('auto');

	children.each(function() {
	    if ($(this).innerHeight() > maxHeight) {
		maxHeight = $(this).innerHeight();
	    }
	});

	children.innerHeight(maxHeight);

    });



}