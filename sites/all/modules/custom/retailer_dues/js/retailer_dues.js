(function ($) { 

  Drupal.behaviors.retailer_dues = {
    attach: function (context) { 
		retailercalculate();
      $('.summable input').keyup(function() { 
		retailercalculate();
      });
	  $('.summable input').change(function() { 
		retailercalculate();
      });
	  function retailercalculate() {
	    var base = 0;
		base = get_basecalculate();
		var retail_var_1 = retail_var_2 = retail_var_3 = retail_var_4 = retail_var_5 = retail_var_6 = retail_var_7 = 0;
	    retail_var_1 = parseFloat(Drupal.settings.retailer_dues.gold_value_min);
        retail_var_2 = parseFloat(Drupal.settings.retailer_dues.gold_value_max);
        retail_var_3 = parseFloat(Drupal.settings.retailer_dues.gold_rate);
        retail_var_4 = parseFloat(Drupal.settings.retailer_dues.silver_value_min);
        retail_var_5 = parseFloat(Drupal.settings.retailer_dues.silver_value_max);
        retail_var_6 = parseFloat(Drupal.settings.retailer_dues.silver_rate);
		retail_var_7 = parseFloat(Drupal.settings.retailer_dues.bronze_value);
		var retail_dues_gold = (base * retail_var_3);
		  if(retail_dues_gold < retail_var_1) retail_dues_gold = retail_var_1;
		  if(retail_dues_gold > retail_var_2) retail_dues_gold = retail_var_2;
		var retail_dues_silver = (base * retail_var_6);
		  if(retail_dues_silver < retail_var_4) retail_dues_silver = retail_var_4;
		  if(retail_dues_silver > retail_var_5) retail_dues_silver = retail_var_5;
		var retail_dues_bronze = retail_var_7;
		$('.retailer_dues_gold input').val(retail_dues_gold);
		$('.retailer_dues_silver input').val(retail_dues_silver);
		$('.retailer_dues_bronze input').val(retail_dues_bronze);
	  }
	  function get_basecalculate(){
		 var totalsums = summable = base_dues = 0;	 
         $('.summable input').each(function() { 
	     if(isNaN(this.value)) { this.value = 0; }	
	     if(this.value) { totalsums += parseFloat(this.value); }
	 	});
		//retailer_dues_
	    var var_1 = var_2 = var_3 = var_4 = var_5 = var_6 = var_7 = 0;
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
		   base_dues = (Math.round(base_dues));
		   return base_dues;
   }
    }
  };

})(jQuery);

