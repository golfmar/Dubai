<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit;
} 
//---------------- регистрация меню----------------
register_nav_menus(
array(
'header-menu' => esc_html__( 'header-menu', 'header-menu' ),
'test-menu' => esc_html__( 'test-menu', 'test-menu' ),
)
);

// function add_menuclass($ulclass) {
// return preg_replace('/<a /', '<a class="menu__link" ' , $ulclass); }
//   add_filter('wp_nav_menu','add_menuclass');
// function add_menuclassli($ulclass) {
// return preg_replace('/<li /', '<li class="menu__item" ' , $ulclass); }
//   add_filter('wp_nav_menu','add_menuclassli');



// add_filter( 'nav_menu_link_attributes', 'filter_nav_menu_link_attributes', 10, 4 );
// function filter_nav_menu_link_attributes( $atts, $item, $args, $depth ) {

// 	if ( $item->current ) {
// 		$class = 'menu__link--active';
// 		$atts['class'] = isset( $atts['class'] ) ? "{$atts['class']} $class" : $class;
// 	}

// 	return $atts;
// }
