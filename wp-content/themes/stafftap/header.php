<?php
/**
 * The template for displaying the header
 *
 * Displays all of the head element
 *
 * @package VT
 * @subpackage Stafftap
 */
 ?><!DOCTYPE html>
<html <?php language_attributes(); ?> class="no-js">
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title><?php
		/*
		 * Print the <title> tag based on what is being viewed.
		 */
		global $page, $paged;

		wp_title( '|', true, 'right' );

		// Add the blog name.
		bloginfo( 'name' );

		// Add the blog description for the home/front page.
		$site_description = get_bloginfo( 'description', 'display' );
		if ( $site_description && ( is_home() || is_front_page() ) )
			echo " | $site_description";

		// Add a page number if necessary:
		if ( $paged >= 2 || $page >= 2 )
			echo ' | ' . sprintf('Page %s', max( $paged, $page ) );

		?></title>
	<link rel="profile" href="http://gmpg.org/xfn/11">
	<?php if ( is_singular() && pings_open( get_queried_object() ) ) : ?>
	<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">
	<?php endif; ?>
	<link rel="stylesheet" href="<?php echo get_template_directory_uri();?>/css/core.css" />
	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>




	<!-- header-->
	<div class="wrapper" id="header-wrapper">

        <div class="container" id="header-container">

            <?php echo get_custom_logo();?>

            <div id="header-nav-wrapper">

                <?php wp_nav_menu(array("theme_location" => "main_location"));?>

            </div><!-- end of nav wrapper -->

        </div><!--end of header container-->

	</div> <!--end of header-->
