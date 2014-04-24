(function ($) { 

  Drupal.behaviors.basedues = {
    attach: function (context) { 
		basecalculate();
      $('.summable input').keyup(function() { 
		basecalculate();
      });
	  $('.summable input').change(function() { 
		basecalculate();
      });
	  function basecalculate(){
		 var totalsums = summable = base_dues = 0;	 
         $('.summable input').each(function() { 
	     if(isNaN(this.value)) { this.value = 0; }	
	     if(this.value) { totalsums += parseFloat(this.value); }
	 	});
	    var var_1 = var_2 = var_3 = var_4 = var_5 = var_6 = 0;
	    var_1 = parseFloat(Drupal.settings.basedues.lowest_total_sales_limit);
        var_2 = parseFloat(Drupal.settings.basedues.lowest_basic_dues);
        var_3 = parseFloat(Drupal.settings.basedues.second_tier_upper_limit);
        var_4 = parseFloat(Drupal.settings.basedues.third_tier_upper_limit);
        var_5 = parseFloat(Drupal.settings.basedues.third_tier_base_value);
        var_6 = parseFloat(Drupal.settings.basedues.fourth_tier_base_value);

		if (totalsums <= var_1)
     base_dues = var_2;
   else if (totalsums > var_1 && totalsums <= var_3)
     base_dues = var_2 + 13 * ((totalsums - var_1) / 1000000);
   else if (totalsums > var_3 && totalsums < var_4)
     base_dues = var_5 + 12 * ((totalsums - var_3) / 1000000);
   else
     base_dues = var_6 + 11 * ((totalsums - var_4) / 1000000);
   $('.base_dues input').val(Math.round(base_dues));
   }
    }
  };

})(jQuery);

