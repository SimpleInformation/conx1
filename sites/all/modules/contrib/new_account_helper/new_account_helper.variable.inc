<?php

/**
 * @file
 * The variables used by the New Account Helper module.
 */

const NAH_VARIABLE_NOTIFY_ON_CREATE = 'new_account_helper_notify_on_create';

// For a later version:
const NAH_VARIABLE_DEFAULT_ROLES = 'new_account_helper_default_roles';

/**
 * Implements hook_variable_info().
 */
function new_account_helper_variable_info($options) {

    $variable[NAH_VARIABLE_NOTIFY_ON_CREATE] = array(
        'title' => t('Default value for Notify User of New Account'),
        'description' => t('Whether a new user should be notified that an admin has created a new account.'),
        'type' => 'boolean',
        'default' => TRUE,
    );

    return $variable;
}