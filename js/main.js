$(function(){

	$('.bx').bxSlider({
	
		mode:'fade',
			speed:2000,
			auto: true,
			autoStart: true
			
	});


  $('.bx2').bxSlider({

	slideWidth: 1100,
    minSlides: 4,
    maxSlides: 4,
    moveSlides: 1,
  	mode:'horizontal',
	speed:2000,
	auto: true,
	autoStart: true
	
  });



	$('#header').each(function(){
	
	var $window = $(window),
		$header = $(this),
		headerOffsetTop = $header.offset().top;


			$window.on('scroll',function(){
			
			if ($window.scrollTop()>headerOffsetTop)
			{
				$header.addClass('offtop');
			}

			else
			{
				$header.removeClass('offtop');
			}
			
			});
			
			$window.trigger('scroll');
	});


	
	$('.over1').on('mouseover' , function(){
		$('.sub_list1').css('display','block');
		$('.sub_list2').css('display','none');
		$('.sub_list3').css('display','none');
		$('.sub_list4').css('display','none');
	}).on('mouseout' , function(){
		$('.sub_list1').css('display','block');
	});


	$('.over2').on('mouseover' , function(){
		$('.sub_list1').css('display','none');
		$('.sub_list2').css('display','block');
		$('.sub_list3').css('display','none');
		$('.sub_list4').css('display','none');
	}).on('mouseout' , function(){
		$('.sub_list2').css('display','block');
	});


	$('.over3').on('mouseover' , function(){
		$('.sub_list1').css('display','none');
		$('.sub_list2').css('display','none');
		$('.sub_list3').css('display','block');
		$('.sub_list4').css('display','none');
	}).on('mouseout' , function(){
		$('.sub_list3').css('display','block');
	});


	$('.over4').on('mouseover' , function(){
		$('.sub_list1').css('display','none');
		$('.sub_list2').css('display','none');
		$('.sub_list3').css('display','none');
		$('.sub_list4').css('display','block');
	}).on('mouseout' , function(){
		$('.sub_list4').css('display','block');
	});
});






