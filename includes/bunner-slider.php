<?php

if (!defined('ABSPATH')) {

  exit;

}



/**

 * bunner-slider

 */

?>



<section class="bunner-slider" id="bunner-slider">

  <div class="swiper-pagination"></div>

  <div class="bunner__nav">

    <div class="bunner-next">NEXT</div><span>|</span>

    <div class="bunner-prev">PREV</div>

  </div>

  <ul class="soc bunner__soc">
    <?php get_template_part('./includes/soc') ?>

  </ul>





  <div class="slider-bunner slider-bunner-js swiper-container">

    <ul class="bunner-slider__body swiper-wrapper">

      <?php

      global $post;

      $args = array(

        'post_type' => 'slider-bunner',

        'publish' => true,

        'numberposts' => 20,

      );



      $feed = get_posts($args);

      $reversed = array_reverse($feed);



      if ($feed) {



        foreach ($reversed as $post) {

          setup_postdata($post);

          $post_id = $post->ID;

          $post_title = $post->post_title;

          $post_text = $post->post_content;

          $image = get_the_post_thumbnail_url($post_id, 'slider-feed'); ?>

          <!-- html -->

          <li class="slider__item slider-card swiper-slide">

            <div class="slider-card__img imgs">

              <img src="<?php echo $image ?>" alt="img" />

            </div>

            <div class="slider-card__body">

              <div class="slider-card__title">

                <?php echo $post_text ?>

              </div>

              <button class="slider-card__button btn btn-empty popups-init-js" rel="#popup-header" href="#!">Book a

                consultation<svg>

                  <use xlink:href="#Arrow"></use>

                </svg>

              </button>

            </div>

          </li>

          <!-- html -->

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

</section>