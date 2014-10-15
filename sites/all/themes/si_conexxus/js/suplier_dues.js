(function ($) { 

  Drupal.behaviors.suplier_dues = {
    attach: function (context) { 
	  suplier_dues_calculate();
      $('#edit-field-annual-sales-for-the-most-und-0-value').keyup(function() { 
		 suplier_dues_calculate();
      });
	  $('#edit-field-annual-sales-for-the-most-und-0-value').change(function() { 
		 suplier_dues_calculate();
      });
	  $('#edit-field-member-level-supplier-und').keyup(function() { 
		 suplier_dues_calculate();
      });
	  $('#edit-field-member-level-supplier-und').change(function() { 
		 suplier_dues_calculate();
      });
    }
  };
  function suplier_dues_calculate() {
    var anual_sale = 0, member_level = 0;
	anual_sale   = $('#edit-field-annual-sales-for-the-most-und-0-value').val();
	member_level = $('#edit-field-member-level-supplier-und').val();
	var limit = parseFloat(Drupal.settings.basedues.company_size_limit_value);

	if(isNaN(anual_sale)) { anual_sale = 0; $('#edit-field-annual-sales-for-the-most-und-0-value').val(0); }	
	$('#edit-field-supplier-small-company-not').css('display','none');		
	$('#edit-field-supplier-large-company-not').css('display','none');
    if(member_level == 3) {
		$('#edit-field-supplier-small-company-not').css('display','block');		
		$('#edit-field-supplier-large-company-not').css('display','none');
	  if(anual_sale >= limit) {
		$('#edit-field-supplier-small-company-not').css('display','none');		
		$('#edit-field-supplier-large-company-not').css('display','block');		
	  }	
	}
	if(member_level == 2) {	  
	    $('#edit-field-supplier-member-dues-small').css('display','block');
		$('#edit-field-supplier-member-dues-large').css('display','none');
		$('#edit-field-supplier-small-company-not').css('display','block');		
		$('#edit-field-supplier-large-company-not').css('display','none');
	  if(anual_sale >= limit) {
	    $('#edit-field-supplier-member-dues-small').css('display','none');
		$('#edit-field-supplier-member-dues-large').css('display','block');
		$('#edit-field-supplier-small-company-not').css('display','none');		
		$('#edit-field-supplier-large-company-not').css('display','block');		
	  }
	}
	if(member_level == 1) {
		$('#edit-field-supplier-member-small-gold').css('display','block');
		$('#edit-field-supplier-member-large-gold').css('display','none');
		$('#edit-field-supplier-small-company-not').css('display','block');		
		$('#edit-field-supplier-large-company-not').css('display','none');
	  if(anual_sale >= limit) {
	    $('#edit-field-supplier-member-small-gold').css('display','none');
		$('#edit-field-supplier-member-large-gold').css('display','block');
		$('#edit-field-supplier-small-company-not').css('display','none');		
		$('#edit-field-supplier-large-company-not').css('display','block');		
	  }
	
	}
	if( member_level =='_none' || !member_level) {
		$('#edit-field-supplier-small-company-not').css('display','none');		
		$('#edit-field-supplier-large-company-not').css('display','none');	
	}
  }
})(jQuery);

