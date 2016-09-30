
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
	anual_sale1   = parseFloat($('.field-name-field-annual-sales-for-the-most- .field-items .field-item').text());

	member_level = $('#edit-field-member-level-supplier-und').val();
	member_level1 = $('.field-name-field-member-level-supplier a').text();
	if(!anual_sale) {
		anual_sale = anual_sale1;
	}
	var limit =5000000;
	if(Drupal.settings.basedues) {
	  limit = parseFloat(Drupal.settings.basedues.company_size_limit_value);
	}
	if(isNaN(anual_sale)) { anual_sale = 0; $('#edit-field-annual-sales-for-the-most-und-0-value').val(0); }	
	$('#edit-field-supplier-small-company-not').css('display','none');		
	$('#edit-field-supplier-large-company-not').css('display','none');
	$('.field-name-field-supplier-small-company-not').css('display','none');		
	$('.field-name-field-supplier-large-company-not').css('display','none');

  if(member_level == 3 || member_level1 == 'Bronze') {
			$('#edit-field-supplier-small-company-not').css('display','block');		
			$('#edit-field-supplier-large-company-not').css('display','none');
			$('.field-name-field-supplier-small-company-not').css('display','block');		
			$('.field-name-field-supplier-large-company-not').css('display','none');
					$('.field-name-field-supplier-member-dues-small').css('display','blcok');		
					$('.field-name-field-supplier-member-dues-large').css('display','none');	
					$('#edit-field-supplier-member-dues-bronz').css('display','block');	
				$('#edit-field-supplier-member-dues-large').css('display','none');

			if(anual_sale >= limit) {
					$('#edit-field-supplier-small-company-not').css('display','none');		
					$('#edit-field-supplier-large-company-not').css('display','block');	
					$('.field-name-field-supplier-member-dues-small').css('display','none');		
					$('.field-name-field-supplier-member-dues-large').css('display','block');
					$('#edit-field-supplier-member-dues-bronz').css('display','block');	
			$('#edit-field-supplier-member-dues-large').css('display','none');	

			}	
	}
	if(member_level == 2 || member_level1 == 'Silver') {	  
	    $('#edit-field-supplier-member-dues-small').css('display','block');
			$('#edit-field-supplier-member-dues-large').css('display','none');
			$('#edit-field-supplier-small-company-not').css('display','block');		
			$('#edit-field-supplier-large-company-not').css('display','none');
			$('.field-name-field-supplier-small-company-not').css('display','block');		
			$('.field-name-field-supplier-large-company-not').css('display','none');
			$('.field-name-field-supplier-member-dues-small').css('display','block');		
			$('.field-name-field-supplier-member-dues-large').css('display','none');

			if(anual_sale >= limit) {
			  $('#edit-field-supplier-member-dues-small').css('display','none');
				$('#edit-field-supplier-member-dues-large').css('display','block');
				$('#edit-field-supplier-small-company-not').css('display','none');		
				$('#edit-field-supplier-large-company-not').css('display','block');	
				$('.field-name-field-supplier-small-company-not').css('display','none');		
				$('.field-name-field-supplier-large-company-not').css('display','block');	
					$('.field-name-field-supplier-member-dues-small').css('display','none');		
					$('.field-name-field-supplier-member-dues-large').css('display','block');	
			}
	}
	if(member_level == 1 || member_level1 == 'Gold') {
		$('#edit-field-supplier-member-small-gold').css('display','block');
		$('#edit-field-supplier-member-large-gold').css('display','none');
		$('#edit-field-supplier-small-company-not').css('display','block');		
		$('#edit-field-supplier-large-company-not').css('display','none');
			$('.field-name-field-supplier-small-company-not').css('display','block');		
			$('.field-name-field-supplier-large-company-not').css('display','none');
			$('.field-name-field-supplier-member-small-gold').css('display','block');		
			$('.field-name-field-supplier-member-large-gold').css('display','none');
	  if(anual_sale >= limit) {
	    $('#edit-field-supplier-member-small-gold').css('display','none');
			$('#edit-field-supplier-member-large-gold').css('display','block');
			$('#edit-field-supplier-small-company-not').css('display','none');		
			$('#edit-field-supplier-large-company-not').css('display','block');	
				$('.field-name-field-supplier-small-company-not').css('display','none');		
				$('.field-name-field-supplier-large-company-not').css('display','block');	
				$('.field-name-field-supplier-member-small-gold').css('display','none');		
				$('.field-name-field-supplier-member-large-gold').css('display','block');
	  }
	
	}
	if( member_level =='_none' || !member_level) {
		$('#edit-field-supplier-small-company-not').css('display','none');		
		$('#edit-field-supplier-large-company-not').css('display','none');	
	$('.field-name-field-supplier-small-company-not').css('display','none');		
	$('.field-name-field-supplier-large-company-not').css('display','none');
	}
  }

})(jQuery);

jQuery( document ).ready(function() {
    var height = 0;
    var	newheight = 0;
    jQuery('.content-top .block-views').each(function() {
	  newheight = jQuery(this).height();
	  if(height < newheight) {
	    height = newheight;
	  }		
	});	
	jQuery('.content-top .block').css('height',height+'px');
	jQuery('.content-top').css('height',newheight+'px');
});
