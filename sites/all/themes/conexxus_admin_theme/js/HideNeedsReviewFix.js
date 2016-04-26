jQuery(document).ready(function() {
 jQuery('.ui-icon-closethick').trigger('click');
 jQuery("#edit-workbench-moderation-state-new option[value=needs_review]").remove();
});

jQuery( document ).ajaxComplete(function() {
 jQuery('.ui-icon-closethick').trigger('click');
});
