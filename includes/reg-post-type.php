<?php

if (!defined('ABSPATH')) {

    exit;

}



function my_custom_init()
{

    register_post_type('slider-feed', array(

        'labels' => array(

            'name' => 'Slider-feed', // Основное название типа записи

            'singular_name' => 'Slider-feed', // отдельное название записи 

            'add_new' => 'Add slide'

        ),

        'public' => true,

        'has_archive' => true,

        'menu_position' => 4,

        'menu_icon' => 'dashicons-images-alt',

        'supports' => array('title', 'thumbnail', 'editor')

    ));



    register_post_type('slider-bunner', array(

        'labels' => array(

            'name' => 'Slider-bunner',

            'singular_name' => 'Slides bunner',

            'add_new' => 'Add new',

        ),

        'public' => true,

        'menu_position' => 5,

        'menu_icon' => 'dashicons-images-alt2',

        'supports' => array('title', 'editor', 'thumbnail', 'excerpt', 'comments', 'post-format')

    ));




    register_taxonomy(

        'project_category',

        'projects',

        array(

            'labels' => array(

                'name' => 'Project Categories',

                'singular_name' => 'Project Category',

                'add_new' => 'Add New Category',

            ),

            'hierarchical' => true,

            'public' => true,

            'show_ui' => true,

            'show_admin_column' => true,

            'query_var' => true,

            'rewrite' => array('slug' => 'project-category'),

        )

    );




}





add_action('init', 'my_custom_init');



