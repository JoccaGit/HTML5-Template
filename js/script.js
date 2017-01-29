/* code for the altenative, togglemobile menu. Includes the jQuery slideToggle function */

(function ($, window, document, undefined)
{
	'use strict';
	
	$(function ()
	{
		/* reference to CSS3 transition: */
	    $("#mobileMenu").hide();
	    $(".toggleMobile").click(function()
	    {
	    	$(this).toggleClass("active");
	    	/* speed of appearing/disappearing of the menu-parts (not the symbolparts):) */
	        $("#mobileMenu").slideToggle(300);
	    });
	});
	$(window).on("resize", function()
	{
		if($(this).width() > 500)
		{
			$("#mobileMenu").hide();
			$(".toggleMobile").removeClass("active");
		}
	});
})(jQuery, window, document);