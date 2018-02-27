
// Have the form appear in the web browser as a popup by placing it into this script file
jQuery.noConflict(); 

jQuery(document).ready(function($){ 
		var doc = document; 
		var head	= doc.getElementsByTagName('head')[0];
		var body = doc.getElementsByTagName("BODY")[0];

		if (!doc.getElementById('tlcJs_cookie')){

			var scriptCookie	= doc.createElement('script');
			scriptCookie.id	= 'tlcJs_cookie';
			scriptCookie.type = 'text/javascript';
			scriptCookie.src = 'https://cdnjs.cloudflare.com/ajax/libs/jquery-cookie/1.4.1/jquery.cookie.min.js';
		}

		if (!doc.getElementById('tlcJs_validate')){
			var scriptValidate	= doc.createElement('script');
			scriptValidate.id	= 'tlcJs_validate';
			scriptValidate.type = 'text/javascript';
			scriptValidate.src = 'https://4a338a3368f8d05dd8dc-1696d71ecdfa5c9645a95bef432b9558.ssl.cf1.rackcdn.com/javascripts/vendor/jquery.validate.min.js';
		}

		if (!doc.getElementById('tlcCss')){
			var head  = doc.getElementsByTagName('head')[0];	
			var app_css  = doc.createElement('link');
			app_css.id   = 'tlcCss';
			app_css.rel  = 'stylesheet';
			app_css.type = 'text/css';
			app_css.href = 'css/styles.css';
		}

		//Append out lightbox assets to the head
		head.appendChild(app_css);
		head.appendChild(scriptCookie);
		head.appendChild(scriptValidate);
		
		//Call lightbox function(Ensure our small scripts can load)
		window.setTimeout(lightbox, 1200);


	function lightbox(){

		var lbx_a = 'lbx_a';

		/* How long until the cookie expires in Minutes*/
		var expires = new Date();
		expires.setMinutes( expires.getMinutes() + 1440 );

		/* Set single array[0] to display only one, set multiple arrays to display two or more */
		var lightboxArray = new Array();
		lightboxArray[0] = lbx_a;
		/* lightboxArray[1] = lbx_b; */
		var lightBoxForm =  lightboxArray;

		var startDate = createDate('01','01','2016'); /* Start Date 'Day','Month','Year' ex. '31','12','2014' */
		var endDate = createDate('31','12','2020');	  /* End Date 'Day','Month','Year' ex. '31','11','2014' */
		lightbox(startDate,endDate,lightBoxForm,"lbx_ab", expires);

		
		/* Functions */

		/* Randomize array element order in-place. Using Fisher-Yates shuffle algorithm. */
/*
		function shuffle(lightboxArray) {
		  var currentIndex = lightboxArray.length
		    , temporaryValue
		    , randomIndex
		    ;

		  while (0 !== currentIndex) {
		
		
		    randomIndex = Math.floor(Math.random() * currentIndex);
		    currentIndex -= 1;
		
		    temporaryValue = lightboxArray[currentIndex];
		    lightboxArray[currentIndex] = lightboxArray[randomIndex];
		    lightboxArray[randomIndex] = temporaryValue;
		  }
		  return lightboxArray;

		}
*/
		/* Create a date starting @ 12:00AM */
		function createDate(day,month,year){
			var day;
			var month;
			var year;
			var d = new Date();	

			d.setDate(day);				
			d.setMonth(month-1); 
			d.setYear(year);
			d.setHours(0,0,0,0);
			return d;
		}

		function lightBoxPopup(popUpCode){

			lightboxCode = lightBoxForm[0];

			//Append Containing Shell
			$('body').append('<div class="shadowOverlay"></div><div class="popUpContainer"><div class="popUpClose"></div></div>');
			//Append the popUpCode to popUpContainer
			$('.popUpContainer').append(popUpCode);
			//Close what needs to close on relevant click
			$('.popUpClose, .shadowOverlay').click(function(){
				$('.popUpContainer').css('display', 'none');
				$('.shadowOverlay').css('display', 'none');
			});


		}

		/* Lightbox Campaign Dates, Content, and Cookie */
		function lightbox(launchDate,stopDate,lightBoxContent, cookieName, cookieExpires){
			/* Today's Date */
			var todaysDate = new Date();

			/* Date of launch */
			var launchDate;
			var stopDate;

			var lightBoxContent; /* the html of the lightbox */
			var cookieName; /* Name of the cookie */

			var campaignStarted = (startDate <= todaysDate) ? true : false;
			var campaignEnded = (stopDate <= todaysDate) ? true : false;

			if (campaignStarted && !campaignEnded &&($.cookie(cookieName) == null) && ($.cookie("completedCookie") == null)) {
				lightBoxPopup(lightBoxContent);
				//$.cookie(cookieName,1,{expires: cookieExpires, path: '/'}); /* Comment out Display Delay for Testing */
			}
		}
	}


});

