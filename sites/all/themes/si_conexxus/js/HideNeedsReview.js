jQuery(document).ready(function() {
 jQuery("#edit-workbench-moderation-state-new option[value=needs_review]").remove();
 
 jQuery("#main-nav").prepend('<span class="menu-icon"></span>');
 
 jQuery("#main-nav .menu-icon").click(function(){
	 jQuery(this).next().toggle();
 })
 
});
