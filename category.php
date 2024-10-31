<?php

/**

 * The template for displaying archive pages

 *

 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/

 *

 * @package dub

 */



get_header('blog');

?>

<main id="primary" class="site-main inner">

  <div class="container">

    <section class="articles cat-slider" id="cat">

      <div class="articles__header">

        <div class="articles__title title-small">

          <h2>

            All Apartments <br>

            Category:

            <?php

            if (is_category()) {

              $slug = get_query_var('category_name');

              echo $slug;

            }

            ?>

          </h2>

        </div>

      </div>

      <div class="swiper-1 rel">

        <div class="swiper-1__body">

          <div class="slider-arrow arrow-next-1"><svg>

              <use xlink:href="#chevron-left"> </use>

            </svg></div>

          <div class="slider-arrow arrow-prev-1"> <svg>

              <use xlink:href="#chevron-right"></use>

            </svg></div>

          <div class="swiper-container" id="cat-slider">

            <ul class="articles__body swiper-wrapper">

              <?php

              if (have_posts()):

                while (have_posts()):

                  the_post(); ?>

                  <li class="swiper-slide">

                    <div class="imgs">

                      <?php the_post_thumbnail(); ?>

                    </div>

                    <div class="column__title">

                      <h3><?php the_title(); ?></h3>

                    </div>

                    <div class="column__body">

                      <div class="column__title--body">

                        <h3><?php the_title(); ?></h3>

                      </div>

                      <p class="column__text--body">

                        <?php the_content(); ?>

                      </p>

                      <a class="btn-empty btn column__link" href="<?php the_permalink(); ?>">

                        Learn more

                        <svg>

                          <use xlink:="xlink:" href="#chevron-right"></use>

                        </svg>

                      </a>

                    </div>

                  </li>



                <?php endwhile;

                the_posts_navigation();

              else:

                get_template_part('template-parts/content', 'none');

              endif;

              ?>

            </ul>

          </div>

          <div class="cat-pagination"></div>

        </div>

      </div>

    </section>

    <section class="blog rel cat-offers" id="blog">

      <div class="blog__head">

        <div class="blog__title">

          <h1>Best Offers</h1>

        </div>

      </div>

      <ul class="blog__body">



        <?php

        if (have_posts()):

          while (have_posts()):

            the_post();

            if (has_tag('best')): ?>

              <li class="blog__card blog-card">

                <div class="blog-card__img rel">

                  <div class="imgs">

                    <?php the_post_thumbnail(); ?>

                  </div>

                </div>

                <div class="blog-card__low">

                  <h3><?php the_title(); ?></h3>

                  <p class="blog-card__text">

                    <?php the_content(); ?>

                  </p>

                  <a class="btn-empty btn" href="<?php the_permalink(); ?>">Learn more

                    <svg>

                      <use xlink:href="#chevron-right"></use>

                    </svg>

                  </a>

                </div>

              </li>

            <?php endif;



          endwhile;

          the_posts_navigation();

        else:

          get_template_part('template-parts/content', 'none');

        endif;

        ?>

      </ul>

    </section>

    <section class="cat-info">

      <div class="look__container--small">

        <div class="cat-info__title">

          <h2>Apartments </h2>

        </div>

        <p class="cat-info__text">To and from, fascinated her: every pebble, ant, stick, leaf, blade of grass, and

          crack in the sidewalk was something to be picked up, looked at, tasted, smelled, and shaken. Everything

          was interesting to her. She knew nothing. I knew everything…been there, done that. She was in the moment,

          I was in the past. She was mindful. I was mindless.</p>

        <div class="cat-info__title--small">

          <h3>Everything along the way</h3>

        </div>

        <p class="cat-info__text"> One touch of a red-hot stove is usually all we need to avoid that kind of

          discomfort in the future. The same is true as we experience the emotional sensation of stress from our

          first instances of social rejection or ridicule. We quickly learn to fear and thus automatically avoid

          potentially stressful situations of all kinds, including the most common of all: making mistakes.</p>

      </div>

    </section>

  </div>

</main><!-- #main -->

<?php

get_footer();













