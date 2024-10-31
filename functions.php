<?php
/**
 * dub functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package dub
 */

if (!defined('_S_VERSION')) {
	// Replace the version number of the theme on each release.
	define('_S_VERSION', '1.0.0');
}

/**
 * Sets up theme defaults and registers support for various WordPress features.
 *
 * Note that this function is hooked into the after_setup_theme hook, which
 * runs before the init hook. The init hook is too late for some features, such
 * as indicating support for post thumbnails.
 */
function dub_setup()
{
	/*
	 * Make theme available for translation.
	 * Translations can be filed in the /languages/ directory.
	 * If you're building a theme based on dub, use a find and replace
	 * to change 'dub' to the name of your theme in all the template files.
	 */
	load_theme_textdomain('dub', get_template_directory() . '/languages');

	// Add default posts and comments RSS feed links to head.
	add_theme_support('automatic-feed-links');

	/*
	 * Let WordPress manage the document title.
	 * By adding theme support, we declare that this theme does not use a
	 * hard-coded <title> tag in the document head, and expect WordPress to
	 * provide it for us.
	 */
	add_theme_support('title-tag');

	/*
	 * Enable support for Post Thumbnails on posts and pages.
	 *
	 * @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
	 */
	add_theme_support('post-thumbnails');

	// This theme uses wp_nav_menu() in one location.
	// register_nav_menus(
	// 	array(
	// 		'menu-1' => esc_html__( 'Primary', 'dub' ),
	// 	)
	// );

	/*
	 * Switch default core markup for search form, comment form, and comments
	 * to output valid HTML5.
	 */
	add_theme_support(
		'html5',
		array(
			'search-form',
			'comment-form',
			'comment-list',
			'gallery',
			'caption',
			'style',
			'script',
		)
	);

	// Set up the WordPress core custom background feature.
	add_theme_support(
		'custom-background',
		apply_filters(
			'dub_custom_background_args',
			array(
				'default-color' => 'ffffff',
				'default-image' => '',
			)
		)
	);

	// Add theme support for selective refresh for widgets.
	add_theme_support('customize-selective-refresh-widgets');

	/**
	 * Add support for core custom logo.
	 *
	 * @link https://codex.wordpress.org/Theme_Logo
	 */
	add_theme_support(
		'custom-logo',
		array(
			'height' => 250,
			'width' => 250,
			'flex-width' => true,
			'flex-height' => true,
		)
	);

}
add_action('after_setup_theme', 'dub_setup');

/**
 * Set the content width in pixels, based on the theme's design and stylesheet.
 *
 * Priority 0 to make it available to lower priority callbacks.
 *
 * @global int $content_width
 */
function dub_content_width()
{
	$GLOBALS['content_width'] = apply_filters('dub_content_width', 640);
}
add_action('after_setup_theme', 'dub_content_width', 0);

/**
 * Register widget area.
 *
 * @link https://developer.wordpress.org/themes/functionality/sidebars/#registering-a-sidebar
 */



function dub_widgets_init()
{
	register_sidebar(array(
		'name' => 'Sidebar dub',
		'id' => 'sidebar-dub',
		'before_widget' => '<div>',
		'after_widget' => '</div>',
		'before_title' => '<h2>',
		'after_title' => '</h2>',
	));
}
add_action('widgets_init', 'dub_widgets_init');
/**
 * Enqueue scripts and styles.

*function dub_scripts() {
*	wp_enqueue_style( 'dub-style', get_stylesheet_uri(), array(), _S_VERSION );
*	wp_style_add_data( 'dub-style', 'rtl', 'replace' );

*	wp_enqueue_script( 'dub-navigation', get_template_directory_uri() . '/js/navigation.js', array(), _S_VERSION, true );

*	if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
*		wp_enqueue_script( 'comment-reply' );
*	}
*}
*add_action( 'wp_enqueue_scripts', 'dub_scripts' );
 */
/**
 * Implement the Custom Header feature.
 */
require get_template_directory() . '/inc/custom-header.php';

/**
 * Custom template tags for this theme.
 */
require get_template_directory() . '/inc/template-tags.php';

/**
 * Functions which enhance the theme by hooking into WordPress.
 */
require get_template_directory() . '/inc/template-functions.php';

/**
 * Customizer additions.
 */
require get_template_directory() . '/inc/customizer.php';

/**
 * Load Jetpack compatibility file.
 */
if (defined('JETPACK__VERSION')) {
	require get_template_directory() . '/inc/jetpack.php';
}

// -------------admin_bar---------------
add_filter('show_admin_bar', '__return_false');
// -------------menus---------------
require get_template_directory() . '/includes/register-menus.php';

// -------------style-script---------------
require get_template_directory() . '/includes/enqueue-style-script.php';

//------acf---------
require get_template_directory() . '/includes/acf-options.php';

// -----пользовательские поля--------
require get_template_directory() . '/includes/reg-post-type.php';

// function dequeue_jquery() {
//     wp_deregister_script( 'jquery' );
// }
// add_action( 'wp_enqueue_scripts', 'dequeue_jquery' );
function custom_scripts()
{
	?>
	<script>
		document.addEventListener('wpcf7submit', function (event) {
			let successMessage = [...document.querySelectorAll('.wpcf7-response-output')];
			if (successMessage.length > 0) {
				successMessage.forEach(car => { car.style.display = "grid"; });
			}
		}, false);

		document.addEventListener('wpcf7mailsent', function (event) {
			let bodyMessage = document.querySelector('body');
			bodyMessage.classList.add("lock");

			setTimeout(() => {
				let successMessage = [...document.querySelectorAll('.wpcf7-response-output')];
				if (successMessage.length > 0) {
					successMessage.forEach(car => { car.style.display = "none"; });
					bodyMessage.classList.remove("lock");
				}
			}, 4000);
		}, false);

		document.addEventListener('DOMContentLoaded', function () {
			window.addEventListener('resize', function () {
				if (window.innerWidth >= 1510) {
					document.querySelector('body').classList.remove("lock");
				}
			});
		});

	</script>
	<?php
}
add_action('wp_footer', 'custom_scripts');


// Disables the block editor from managing widgets in the Gutenberg plugin.
add_filter('gutenberg_use_widgets_block_editor', '__return_false');
// Disables the block editor from managing widgets.
add_filter('use_widgets_block_editor', '__return_false');
