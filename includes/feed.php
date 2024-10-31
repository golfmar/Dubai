<?php

if (!defined('ABSPATH')) {

  exit;

}



/**

 * feed

 */

?>



<div class="swiper-1 feed" id="feed">

  <div class="swiper swiper-container" id="feedSwip">

    <ul class="swiper-wrapper">



      <?php

      global $post;

      $args = array(

        'post_type' => 'slider-feed',

        'publish' => true,

        'numberposts' => 20,

      );



      $feed = get_posts($args);

      $reversed = array_reverse($feed);



      if ($feed) {



        foreach ($feed as $post) {

          setup_postdata($post);

          $post_id = $post->ID;

          $post_title = $post->post_title;

          $post_text = $post->post_content;

          $image = get_the_post_thumbnail_url($post_id, 'slider-feed'); ?>





          <li class="swiper-slide">

            <svg>

              <use xlink:href="#c"></use>

            </svg>

            <div class="feed__title">

              <h3><?php echo $post_title ?></h3>

            </div>


            <p class="feed__text">

              <?php echo $post_text ?>
            </p>


            <div class="feed__bage">

              <div class="imgs">

                <img src="<?php echo $image ?>" alt="img" />

              </div>

            </div>

          </li>



          <?php

        }

      } else {

        ?>

        <p><?php _e('Sorry, no posts matched your criteria.'); ?></p>

        <?php

      }

      ?>



    </ul>

  </div>

  <div class="swiper-pagination-feed"></div>

</div>