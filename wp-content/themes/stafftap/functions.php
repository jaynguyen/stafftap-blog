<?php

add_theme_support( 'post-thumbnails' );
add_theme_support( 'custom-logo' );
add_theme_support( 'menus' );
add_theme_support( 'widgets');



// register menu location
register_nav_menus(
    array(
        "main_location" => "Main Menu",
        "footer_menu"   => "Footer Menu",
        "footer_col_1"  => "Footer Col 1",
        "footer_col_2"  => "Footer Col 2",
        "footer_col_3"  => "Footer Col 3",
    )
);//




//register one widgets
$sidebar_args = array(
	'name'          => "Generic Sidebar",
	'id'            => 'st-generic-sidebar',
	'description'   => '',
        'class'         => '',
	'before_widget' => '<li id="%1$s" class="widget %2$s">',
	'after_widget'  => '</li>',
	'before_title'  => '<h2 class="widgettitle">',
	'after_title'   => '</h2>'
);
register_sidebar( $sidebar_args );




//filter for custom logo
add_filter("get_custom_logo", "custom_logo_filter");
function custom_logo_filter($content){

    return
        preg_replace(
        '/(width|height)\\s*=\s*\"\d{1,}\"/',
        '',
        $content

    );//

} //



add_filter("the_excerpt", "custom_excerpt");
function custom_excerpt($content){

    global $post;
    $intro_text = get_post_meta($post->ID, "intro_text", true);
    if(isset($intro_text[4])):
        return apply_filters("the_content", $intro_text);
    endif;

    return $content;

} //
