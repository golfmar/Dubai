<?php
if (!defined('ABSPATH')) {
	exit;
}
/**
 * Enqueue scripts and styles.
 */
function dub_scripts()
{
	wp_enqueue_style('dub-style', get_template_directory_uri() . '/assets/css/style.css');
	wp_enqueue_style('dub-wp-style', get_template_directory_uri() . '/assets/css/wp.css');
	wp_style_add_data('dub-style', 'rtl', 'replace');
	wp_enqueue_script('dub-navigation', get_template_directory_uri() . '/assets/index.js', array(), _S_VERSION, true);

	if (is_singular() && comments_open() && get_option('thread_comments')) {
		wp_enqueue_script('comment-reply');
	}
}
add_action('wp_enqueue_scripts', 'dub_scripts');