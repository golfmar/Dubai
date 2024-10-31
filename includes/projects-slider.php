<section class="galSlider accord accord--galery">

  <div class="container">

    <div class="accord__body _accord-js _accord-galery-js">





      <div class="container-small">

        <div class="title-small">

          <h2>Latest projects</h2>

        </div>

        <nav class="accord__nav _accord-nav-js">

          <button class="_is-active" type="button"> All</button>

          <?php

          $categories = get_categories();

          foreach ($categories as $category) {

            echo '<button  type="button">' . $category->name . '</button>';

          }

          ?>

        </nav>



      </div>

      <div class="accord__hidden _accord-hidden-js">

        <ul class="_accord-hidden-wrap">

          <li class="_allBlocks"></li>



          <li>

            <?php

            $args = array(

              'category_name' => 'houses',

              'posts_per_page' => 40,



            );

            $posts = get_posts($args);

            foreach ($posts as $post) {

              setup_postdata($post);

              ?>





              <div class="card">

                <div class="imgs">

                  <?php dub_post_thumbnail(); ?>

                </div>

                <div class="card__title">

                  <h3><?php the_title(); ?></h3>

                </div>

                <div class="card__body">

                  <div class="card__title--body">

                    <h3><?php the_title(); ?></h3>

                  </div>

                  <p class="card__text">

                    <?php the_content(); ?>

                  </p>

                  <a href="<? the_permalink() ?>">See

                    project<svg>

                      <use xlink:href="#chevron-right"></use>

                    </svg>

                  </a>

                </div>

              </div>



              <?php

            }

            wp_reset_postdata();

            ?>

          </li>





          <li>

            <?php

            $args = array(

              'category_name' => 'villas',

              'posts_per_page' => 40,



            );

            $posts = get_posts($args);

            foreach ($posts as $post) {

              setup_postdata($post);

              ?>





              <div class="card">

                <div class="imgs">

                  <?php dub_post_thumbnail(); ?>

                </div>

                <div class="card__title">

                  <h3><?php the_title(); ?></h3>

                </div>

                <div class="card__body">

                  <div class="card__title--body">

                    <h3><?php the_title(); ?></h3>

                  </div>

                  <p class="card__text">

                    <?php the_content(); ?>

                  </p>

                  <a href="<? the_permalink() ?>">See

                    project<svg>

                      <use xlink:href="#chevron-right"></use>

                    </svg>

                  </a>

                </div>

              </div>



              <?php

            }

            wp_reset_postdata();

            ?>

          </li>



          <!-- <div class="card">

                    <div class="imgs">

                      <img src="<?php echo get_template_directory_uri() ?>/assets/img/apartments.webp" alt="alt" />

                    </div>

                    <div class="card__title">

                      <h3>Apartments</h3>

                    </div>

                    <div class="card__body">

                      <div class="card__title--body">

                        <h3>Apartments</h3>

                      </div>

                      <p class="card__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat molestie

                        integer aliquam consectetur. Faucibus vitae dui massa tellus magna sit.

                      </p>

                      <a href="#!">See

                        project<svg>

                          <use xlink:href="#chevron-right"></use>

                        </svg>

                      </a>

                    </div>

                  </div> -->



        </ul>

      </div>

    </div>

  </div>

</section>

<div class="swiper-gal">

  <div class="swiper-gal__body">

    <div class="swiper swiper-container">

      <div class="swiper-wrapper"></div>

    </div>

  </div>

  <div class="swiper-pagination-1"></div>

</div>