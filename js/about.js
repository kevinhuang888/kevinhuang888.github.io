$('body')
	  .delay(500)
	  .queue( 
	  	function(next){ 
	    	$(this).css('padding-right', '1px'); 
	  	}
	  );