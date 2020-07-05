$(function() {
	
	//在线客服侧栏代码
    $('#close_im').bind('click', function() {
	    $('#main-im').css("height", "0");
	    $('#im_main').hide();
	    $('#open_im').show();
	});
	$('#open_im').bind('click', function(e) {
	    $('#main-im').css("height", "272");
	    $('#im_main').show();
	    $(this).hide();
	});
	$('.go-top').bind('click', function() {
	    $(window).scrollTop(0);
	});
	$(".weixing-container").bind('mouseenter', function() {
	    $('.weixing-show').show();
	})
	$(".weixing-container").bind('mouseleave', function() {
	    $('.weixing-show').hide();
	});
	//在线客服侧栏代码
	
	$('.affs-click').click(function(){
		$(".affs-menu").slideToggle();
		$('http://subest.5awo.com/templates/123/assets/js/.affs-click .fa').toggleClass("flipy");
	});
	
	$(".detaillink").click(function(){
		$(".newcloud-menu li").attr("class","");
		$(".newcloud-menu li").eq(2).attr("class","active");
		$(".table-features .tab-pane").removeClass(' active in');
		$("#function").addClass(' active in');
		var offet=$("#function").offset();
		$('body,html').animate({scrollTop:offet.top-290},200);;
	});
	
	var henghost={};
	$('[_h_nav]').hover(function(){
		var _nav = $(this).attr('_h_nav');
		clearTimeout( henghost[ _nav + '_timer' ] );
		henghost[ _nav + '_timer' ] = setTimeout(function(){
			$('[_h_nav]').each(function(){
				$(this)[ _nav == $(this).attr('_h_nav') ? 'addClass':'removeClass' ]('active');
			});
			$('#'+_nav).stop(true,true).slideDown(200);
		}, 150);
	},function(){
		var _nav = $(this).attr('_h_nav');
		clearTimeout( henghost[ _nav + '_timer' ] );
		henghost[ _nav + '_timer' ] = setTimeout(function(){
			$('[_h_nav]').removeClass('active');
			$('#'+_nav).stop(true,true).slideUp(200);
		}, 150);
	});

	$('.morelink').click(
		function(){
			$('.morelink').toggle();
			$('.morelinktwo').toggle();
		    $('.planlist').removeClass('animated slideInLeft wow').hide();
		    $('.planlist2').addClass('animated slideInRight wow').show();
		}
	);

	$('.morelinktwo').click(
		function(){
			$('.morelink').toggle();
			$('.morelinktwo').toggle();
		    $('.planlist').addClass('animated slideInLeft wow').show();
		    $('.planlist2').removeClass('animated slideInRight wow').hide();
		}
	);
	
	$('#accordion').collapse();
	
    /** BEGIN SLIDER **/
	// Flex
    if ($(".flexslider").length) {
        $('.flexslider').flexslider();
    }
    /** END SLIDER **/
	
    /** BEGIN CAROUSEL CLIENT LOGO **/
    if ($('#client-logo').length > 0) {
        $('#client-logo').owlCarousel({
            autoPlay: 3000,
            items: 6,
            autoHeight: true,
            pagination: true /* false */
        });
    }
    /** END CAROUSEL CLIENT LOGO **/
    
    if ($('.monialmain').length > 0) {
	    $('.monialmain').owlCarousel({
		    navigation : false, // Show next and prev buttons
			slideSpeed : 400,
			paginationSpeed : 300,
			singleItem :true,
			itemsMobile : false,
			pagination :false
	    });
	    $(".next").click(function(){
			$('.monialmain').trigger('http://subest.5awo.com/templates/123/assets/js/owl.next');
		})
		
		$(".prev").click(function(){
			$('.monialmain').trigger('http://subest.5awo.com/templates/123/assets/js/owl.prev');
		})
    }
	
    /** BEGIN CAROUSEL CLIENT LOGO **/
    if ($('#client').length > 0) {
        $('#client').owlCarousel({
            autoPlay: 6000,
            items: 1,
            autoHeight: true,
            pagination: true /* false */
        });
    }
    /** END CAROUSEL CLIENT LOGO **/
	
	/** BEGIN HOME HOVER **/
    $('.feature .col-sm-3').hover(function(){
	    $(this).find('.fa').addClass('animated flip');
    },function(){
	    $(this).find('.fa').removeClass('animated flip');
    });
    /** END HOME HOVER **/
    
    // browser window scroll (in pixels) after which the "back to top" link is shown
    var offset = 300,
        //browser window scroll (in pixels) after which the "back to top" link opacity is reduced
        offset_opacity = 1200,
        //duration of the top scrolling animation (in ms)
        scroll_top_duration = 700,
        //grab the "back to top" link
        $back_to_top = $('.cd-top');

    //hide or show the "back to top" link
	/*熊2015-07-20修改*/
	$(".order-viewport").before('<div style="float:left; width:300px; "><a id="settop"></a></div>');
    /*熊 end*/
	$(window).scroll(function() {
        ($(this).scrollTop() > offset) ? $back_to_top.addClass('cd-is-visible'): $back_to_top.removeClass('cd-is-visible cd-fade-out');
        
        if ($(this).scrollTop() > offset_opacity) {
            $back_to_top.addClass('cd-fade-out');
        }
        
        ($(this).scrollTop() > offset) ? $('.pricing-navbar').addClass('fixed'): $('.pricing-navbar').removeClass('fixed');
        
        ($(this).scrollTop() > 36) ? $('.header').addClass('fixed pulse') : $('.header').removeClass('fixed pulse');
        
        ($(this).scrollTop() > 36) ? $('.subnav').addClass('fixed') : $('.subnav').removeClass('fixed');
        
		/*熊2015-07-20修改*/
        //($(this).scrollTop() > 350 ) ? $('.order-viewport').addClass('fixed') : $('.order-viewport').removeClass('fixed');
        
		if($('#settop').size()>0){
			var settop=$("#settop").offset();
			var footer=$(".call-to-action").offset();		
			var contentHeight=footer.top-$(".order-viewport").height()-100;
			if($(window).scrollTop()>=contentHeight){
				$(".order-viewport").css({top:contentHeight-350,position:"absolute"});
			}else if($(window).scrollTop()<contentHeight && $(window).scrollTop()>=((settop.top)*1-50)){
				$(".order-viewport").css({top:"80px",position:"fixed",width:"360px"});
			}else if($(window).scrollTop()<settop.top){
				$(".order-viewport").css({position:"static"});
			}
		}
		/*熊 end*/
		if($('.tabpanel-title').size()>0){
			var tabpanel = $('.tab-content').offset();
			var tabpanel_h=tabpanel.top-60;
			if($(window).scrollTop() >= tabpanel_h){ 
				$('.tabpanel-title').addClass('fixed');
			}else{
				$('.tabpanel-title').removeClass('fixed');
			}
			//($(window).scrollTop() > tabpanel.top) ? $('.tabpanel-title').addClass('fixed') : $('.tabpanel-title').removeClass('fixed');
        }
    });
	
    //smooth scroll to top
    $back_to_top.on('click', function(event) {
        event.preventDefault();
        $('body,html').animate({
            scrollTop: 0,
        }, scroll_top_duration);
    });
	
	$('[data-toggle="tooltip"]').tooltip();

});

// HOME LINKS
setInterval(function(){
    $('.links li:last').css({'height':'0px','opacity': '0'}).insertBefore('.links li:first').animate({'height':'24px','opacity': '1'}, 'slow', function() {
      $(this).removeAttr('style');
    });
},2000);