



<!-- footer-->
<div class="wrapper" id="footer-wrapper">

    <div class="content-wrapper" id="footer-content-wrapper">

        <div class="container">


            <div class="row">

                <div class="col-sm-4 links-cols">
                    <?php wp_nav_menu(array("theme_location" => "footer_col_1"));?>
                </div>
                <div class="col-sm-4 links-cols">
                    <?php wp_nav_menu(array("theme_location" => "footer_col_2"));?>
                </div>
                <div class="col-sm-4 links-cols">
                    <?php wp_nav_menu(array("theme_location" => "footer_col_3"));?>
                </div>

            </div>

            <div class="row">
                <div class="col-sm-12" id="footer-description">

                    <?php dynamic_sidebar("st-footer-sidebar");?>

                </div>
            </div>

        </div><!--end of container -->


    </div>

</div> <!--end of  footer-->




<?php wp_footer(); ?>
<script   src="https://code.jquery.com/jquery-3.1.0.min.js"   integrity="sha256-cCueBR6CsyA4/9szpPfrX3s49M9vUU5BgtiJj06wt/s="   crossorigin="anonymous"></script>
<script type="text/javascript" src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
<script type="text/javascript" src="<?php echo get_template_directory_uri();?>/js/core.js"></script>
<script src='//localhost:35729/livereload.js'></script>

</body>
</html>
