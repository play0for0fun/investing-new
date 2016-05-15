$('<link href="https://fonts.googleapis.com/css?family=Roboto:400,300&subset=latin,cyrillic-ext" rel="stylesheet" type="text/css"><link rel="stylesheet" href="css/libs_old.css"><link rel="stylesheet" href="css/style.css">').appendTo('head');

var isMobile = false; 
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
isMobile = true;
}


$(document).ready(function(){

    
if (isMobile == true) {
  if(!$('body').hasClass('loaded')) {$('body').addClass('loaded')};

  $('<style>header,section,.section{height:1100px;display:block}</style>').appendTo('head');
  $('.animation').addClass('animated');
  $('<style>header,section,.section{height:800px!important;display:block}.animation1,.animation2,.animation3,animation4*{opacity:1;transition:0s all 0s!important;animation-duration:0s!important;animation-delay:0s!important}.site-nav.down,.site-nav.up{display:none!important}section{height:800px!important}</style>').appendTo('head');
  $('body').addClass('loaded');
  move_right_pop();
}else{
  $('#pages').fullpage({

        autoScrolling: false,
      afterLoad: function(anchorLink, index){
            $(this).find('.animation1').addClass('fadeInUp animated');
            $(this).find('.animation2').addClass('fadeInRight animated');
            $(this).find('.animation3').addClass('fadeIn animated3');
            if(index == 1){$('.site-nav.up').hide();}else{$('.site-nav.up').show();} 
            if(index == 9){$('.site-nav.down').hide();}else{$('.site-nav.down').show();} 
            if(index == 2){$('.site-nav.up').addClass('black');}else{$('.site-nav.up').removeClass('black');} 
            if(index == 6 || index == 2){$('.site-nav.down').addClass('black');}else{$('.site-nav.down').removeClass('black');} 
            if(index == 1){$('.site-nav.down').addClass('animation4');}else{$('.site-nav.down').removeClass('animation4');}
            if(index == 1){$('.site-nav.down').addClass('animated');}else{$('.site-nav.down').removeClass('animated');}
            if(index == 1 || index == 3 || index == 4 || index == 5 || index == 6 || index == 8){$('.menu').addClass('wmenu');}else{$('.menu').removeClass('wmenu');}
           
            },
      onLeave: function(index, nextIndex, direction){
            $('.section:nth-child('+nextIndex+')').find('.animation1').addClass('fadeInUp animated');
            $('.section:nth-child('+nextIndex+')').find('.animation2').addClass('fadeInRight animated');
            $('.section:nth-child('+nextIndex+')').find('.animation3').addClass('fadeIn animated3');
            },
      afterRender: function(){
            move_right_pop();
          }
    });


}

    if($(window).height() < 800) {
        $('.sec3 h2, .sec2 h2, .sec4 h2, .sec6 h2, .sec7 h2, .sec8 h2').addClass('afto');
    }
    else{
        $('.sec3 h2, .sec2 h2, .sec4 h2, .sec6 h2, .sec7 h2, .sec8 h2').removeClass('afto');
    }
});


var cur_step = 1;
var cur_item = '';
var cur_item_b = '';
function go_next_step(step,item){
	$('.kal_bg').fadeOut();
	if (step == 2) {
		cur_item = item;
	}
  if (step == 3 && cur_item == 'yes') {
    cur_item_b = item;
  }
	if(step == 2){
		$('.kal_bg[data-step="'+step+'"][data-item="'+cur_item+'"]').fadeIn();
    cur_step = step;
	}else
  if(step == 3 && cur_item == 'yes'){
    $('.kal_bg[data-step="'+step+'"][data-item="'+cur_item+'"][data-item-b="'+cur_item_b+'"]').fadeIn();
    cur_step = step;
  }else
  if(step == 3 && cur_item == 'no'){
      $('.ff8').fadeIn();
      cur_step = step;
  }else{
    if (cur_item_b == 'no') {
      $('.ff6').fadeIn();
      cur_step = 4;
    }else{
      $('.kal_bg[data-step="'+step+'"]:not(.ff6)').fadeIn();
      cur_step = 4;
    }
	}
}
function go_back_step(step){
	if (step<=cur_step){
		$('.kal_bg').fadeOut();
  	if(step == 1){
      $('.kal_bg[data-step="'+step+'"]').fadeIn();
    }else
      if(step == 2){
        $('.kal_bg[data-step="'+step+'"][data-item="'+cur_item+'"]').fadeIn();
        
      }else
        if(step == 3 && cur_item == 'yes'){
          $('.kal_bg[data-step="'+step+'"][data-item="'+cur_item+'"][data-item-b="'+cur_item_b+'"]').fadeIn();
          
        }else
          if(step == 3 && cur_item == 'no'){
              $('.ff8').fadeIn();
          }else{
            if (cur_item_b == 'no') {
              $('.ff6').fadeIn();
            }else{
              $('.kal_bg[data-step="'+step+'"]:not(.ff6)').fadeIn();
            }
            
          }

	}
}
function move_right_pop(){
	var html_pop = $('#right-pop').html();
	$('#right-pop').remove();
	$(html_pop).appendTo('.sec3.section');
  console.log('moved');
}
function open_right_pop(){
	$('.sec3 .fp-tableCell').css('right','570px');
	$('.infa_klik').css('right','0px');
	$('.infa_klik').css('opacity','1');
	$('.infa_klik').css('z-index','5');
  if (isMobile != true) {
	 $.fn.fullpage.setMouseWheelScrolling(false);
    $.fn.fullpage.setAllowScrolling(false);
  }
	$('body').css('overflow','hidden');
	$('.infa').scrollTop(0);
}
function close_right_pop(){
	$('.sec3 .fp-tableCell').css('right','0px');
	$('.infa_klik').css('right','-570px');
	$('.infa_klik').css('opacity','0');
	$('.infa_klik').css('z-index','-1');
  if (isMobile != true) {
	 $.fn.fullpage.setMouseWheelScrolling(true);
    $.fn.fullpage.setAllowScrolling(true);
  }
	$('body').css('overflow','visible');	
}


$(document).ready(function(){
  setTimeout(function(){if(!$('body').hasClass('loaded')) {$('body').addClass('loaded')};},3000);


//menu
var menu_active = 0;
$('.menu-btn').click(function(){
  if (!$('.menu').hasClass('active')) {
    $(this).addClass('as-close');
    $('.menu').addClass('active');
    menu_active = 1;
  } else{
    $(this).removeClass('as-close');
    $('.menu').removeClass('active');
    menu_active = 0;
  }
});
$('section, header').click(function(){
  if (menu_active == 1) {
    $('.menu').removeClass('active');
    $('.menu-btn').removeClass('as-close');
    menu_active = 0;
  }
});
$('.menu .menu-a').click(function(e){
  e.preventDefault();
  $("html, body").animate({ scrollTop: $($(this).attr('href')).offset().top}, 1000);
  $('.menu').removeClass('active');
    $('.menu-btn').removeClass('as-close');
    menu_active = 0;
});

$('.site-nav.down').click(function(e) {
    e.preventDefault();
    $.fn.fullpage.moveSectionDown();
  }).on('mouseover', function() {
        $(".site-nav.down").addClass('active');
    }).on('mouseout', function() {
        $(".site-nav.down").removeClass('active');
    });

$('.site-nav.up').click(function(e) {
    e.preventDefault();
    $.fn.fullpage.moveSectionUp();
  }).on('mouseover', function() {
        $(".site-nav.up").addClass('active');
    }).on('mouseout', function() {
        $(".site-nav.up").removeClass('active');
    });
$('.confbtn').click(function(e) {
    e.preventDefault();
    $('#conf_pop').arcticmodal();
  });


$('.st-polon').click(function(e){
   e.preventDefault();
   $('#polon-pust').html('Как здорово, что Вы остались оптимистом и<br>доверяете людям!');
});

$('.st-pust').click(function(e){
   e.preventDefault();
   $('#polon-pust').html('В большинстве случаев после первого неудачного брака<br> люди утрачивают доверие, но все же со временем находят<br> свою вторую половинку');
});


  $('.opi,.opii').click(function(e){
    e.preventDefault();
    var next_step = parseInt($(this).data('step'));
    var next_item = $(this).data('item');
    if (next_step == 2) {
        go_next_step(next_step,next_item);
    }else 
    if(cur_item == 'yes' && next_step == 3){
        go_next_step(next_step,next_item);
      }
    else{
    	go_next_step(next_step,' ');
    }
  });
  $('.num').click(function(e){
    e.preventDefault();
    var step_step = parseInt($(this).data('step'));
    go_back_step(step_step);
  });
  $('.ob_gr').click(function(e){
    e.preventDefault();
    $('.infa').hide();
    $('.infa[data-numb="'+$(this).data('numb')+'"]').show();
  	open_right_pop();
  });
  $('.infa_klik_overlay,.closes').click(function(e){
    e.preventDefault();
  	close_right_pop();
  });

  $('.play').click(function(e) {
    e.preventDefault();
    var url = $(this).attr('href');
    $('<iframe width="100%" height="100%" src="'+url+'" frameborder="0" allowfullscreen></iframe>').appendTo($(this).parent());
    $(this).remove();
  });

  $('.btn_zz').click(function(e){
    e.preventDefault();
    $('.pop_gr').arcticmodal();
  });

  $('.close').click(function(e){
    e.preventDefault();
  	$.arcticmodal('close');
  });

  $('input[name="phone"]').mask('+7 (999) 999-99-99');
  $('input[name="phone"]').blur(function() {if($(this).val().length != 18) {$(this).addClass('error-input');}});
  $('input[name="phone"]').focus(function() {$(this).removeClass('error-input');});

    $('form').submit(function(e){
        e.preventDefault();
        $(this).find('input[type="text"]').trigger('blur');
        if(!$(this).find('input[type="text"]').hasClass('error-input')){
            var type=$(this).attr('method');
            var url=$(this).attr('action');
            var data=$(this).serialize();
            var track_event=$(this).find('input[name="event"]').val();
            $.ajax({type: type, url: url, data: data,
            success : function(){
                $.arcticmodal('close');$('#okgo').arcticmodal();
                yaCounter37235050.reachGoal(track_event);
                ga('send','event','submit',track_event);
            }
        }); 
        }
    });

$('.sert-zoom').click(function(e){
      e.preventDefault();
      $('#sert').attr('src',$(this).attr('href')).parent().arcticmodal();
});


});

$(window).load(function(){
  if (!$('body').hasClass('loaded')) {$('body').addClass('loaded')};

  slider1 = $('#sld1').bxSlider({pager:true,pagerCustom:'#sld1pager',controls:false, auto:false, speed: 400,
      onSlideBefore: function($slideElement, oldIndex, newIndex){
      	$('.sld_zz').fadeOut();
      	$('.sld_zz[data-slide="'+newIndex+'"]').fadeIn();
      }});
	$('.cursor-left').click(function(e){e.preventDefault();slider1.goToPrevSlide();});
	$('.cursor-right').click(function(e){e.preventDefault();slider1.goToNextSlide();});
  slider2 = $('#sld2').bxSlider({pager:false,controls:false, auto:false, speed: 400,
      onSlideBefore: function($slideElement, oldIndex, newIndex){
      	$('.sld2fi').fadeOut();
      	$('.sld2fi[data-slide="'+newIndex+'"]').fadeIn();
      }});
  	$('.vid_l').click(function(e){e.preventDefault();slider2.goToPrevSlide();});
	$('.vid_r').click(function(e){e.preventDefault();slider2.goToNextSlide();});
  
		

	});