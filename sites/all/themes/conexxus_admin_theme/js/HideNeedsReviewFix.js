jQuery(document).ready(function() {
 jQuery('.ui-icon-closethick').trigger('click');
 jQuery("#edit-workbench-moderation-state-new option[value=needs_review]").remove();
 jQuery("#edit-field-folder-und option[value=16]").remove();
});

jQuery( document ).ajaxComplete(function() {
 jQuery("#edit-field-folder-und option[value=16]").remove();
 if(jQuery('body').hasClass('page-node')) {
   jQuery('.ui-icon-closethick').trigger('click');
 }
});
