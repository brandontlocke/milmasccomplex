// JavaScript Document
///////
///Settings object
///////
var settings = {
	objSlideTrigger: '.trigger',
	objSlidePanel: '.panel'
}
///////
///Slide out tab
///////
function slideOutTab() {
	//Bind a click handler to the trigger
	$(settings.objSlideTrigger).bind('click' , function() {
		//If the panel isn't out
		if(!$(settings.objSlidePanel).hasClass('out')){
			//Animate it to left 0px
			$(settings.objSlidePanel).animate({
				'left' : '0px'
			});
			//Add the out class
			$(settings.objSlidePanel).addClass('out');
		}
		else {
			//Otherwise, animate it back in
			$(settings.objSlidePanel).animate({
				'left' : '-580px'
			});
			//Remove the out class
			$(settings.objSlidePanel).removeClass('out');
		}
	});
}