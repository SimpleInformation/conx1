(function ($) { 

  Drupal.behaviors.custom = {
    attach: function (context) { 
		calculate();
      $('.summable input').keyup(function() { 
		calculate();
      });
	  $('.summable input').change(function() { 
		calculate();
      });
      function calculate(){
	var totalsum = summable = 0;	 
        $('.summable input').each(function() { 
	   if(isNaN(this.value)) { this.value = 0; }	
	   if(this.value) { totalsum += parseFloat(this.value); }
	});
        $('.totalsum input').val(parseFloat(totalsum));
      }
    }
  };

})(jQuery);

