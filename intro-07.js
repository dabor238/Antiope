
/*global $:false */
/*global window: false */

(function(){
  "use strict";


$(function ($) {

		if( !device.tablet() && !device.mobile() ) {

			/* plays the BG Vimeo video if non-mobile device is detected*/ 
			$.okvideo({ source: '31241154', //set your vimeo video source here
		                    loop: true,
		                    hd:true, 
		                    adproof: true,
		                    volume:80 // control the volume by setting a value from 0 to 99
		                 });
						
		} else {
			
			/* displays a poster image if mobile device is detected*/ 
			$('.player').addClass('hide');
			$('#intro').addClass('video-poster-image');
			
		}
   		
        
   
});
// $(function ($)  : ends

})();
//  JSHint wrapper $(function ($)  : ends







	

