<div class="row single-brief">
    <div class="col-sm-12">

        <?php if(has_post_thumbnail()):?>
            <div class='feature-image'>
                <?php the_post_thumbnail();?>
                <div class='pb-wrapper'>
                    <h2><a href="<?php the_permalink();?>"><?php the_title();?></a></h2>
                    <div class="meta-wrapper">
                        <?php if(has_category()):?><span class='the-cat'>in <?php the_category();?></span><?php endif;?>
                        <span class='the-date'><i class="fa fa-calendar" aria-hidden="true"></i> <?php echo get_the_date();?></span>
                    </div>
                </div>
            </div>
        <?php else:?>
            <h2><a href="<?php the_permalink();?>"><?php the_title();?></a></h2>
            <div class="meta-wrapper">
                <?php if(has_category()):?><span class='the-cat'>in <?php the_category();?></span><?php endif;?>
                <span class='the-date'><i class="fa fa-calendar" aria-hidden="true"></i> <?php echo get_the_date();?></span>
            </div>
        <?php endif;?>


        <div class="single-content">
            <?php the_excerpt();?>
        </div>

        <div class="control-wrapper">
            <a href="<?php the_permalink();?>" class="btn links-button"><i class="fa fa-long-arrow-right" aria-hidden="true"></i> Read More</a>
        </div>
    </div>
</div>
