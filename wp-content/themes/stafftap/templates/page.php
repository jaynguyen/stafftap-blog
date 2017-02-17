<div class="row single-detail">
    <div class="col-sm-12">
        <h2><?php the_title();?></h2>
        <div class="meta-wrapper">
            <?php if(has_category()):?><span class='the-cat'>in <?php the_category();?></span><?php endif;?>
            <span class='the-date'><i class="fa fa-calendar" aria-hidden="true"></i> <?php the_date();?></span>
        </div>
        <div class="single-content">
            <?php the_content();?>
        </div>


    </div>
</div>
