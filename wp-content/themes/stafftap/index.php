<?php get_header();?>


    <div class="container" id="body-container">

        <div class="row">

            <div class="col-sm-8" id="left-col">

                <?php
                    if(is_search()):
                ?>
                <div class='heading-wrapper'>
                    <h2>Search results:</h2>
                    <p><strong>Keyword:</strong> <em><?php echo $_REQUEST['s'];?></em></p>
                </div>
                <?php endif;?>

                <?php

                    if(have_posts()):
                        while(have_posts()): the_post();
                            if(is_single()):
                                get_template_part("templates/single");
                            elseif(is_search() || is_home() || is_front_page() || is_archive()):
                                get_template_part("templates/loop-short");
                            elseif(is_page()):
                                get_template_part("templates/page");
                            endif;
                        endwhile;
                    else:
                        if(is_search()):
                            echo "<p>No posts were found. Please try again.</p>";
                        endif;
                    endif;

                ?>

            </div>

            <div class="col-sm-4" id="right-col">
                <div id="sidebar" role="complementary">
                    <ul><?php dynamic_sidebar("st-generic-sidebar");?></ul>
                </div>
            </div>

        </div>

    </div>



<?php get_footer();
