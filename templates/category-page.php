
<?php
/*
Template Name: category
*/
defined( 'ABSPATH' ) || exit;
get_header('blog');
?>
    <main class="inner">
      <section class="bunner" id="bunner">
        <div class="bunner__bg imgs"><img src="<?php echo get_template_directory_uri()?>/assets/img/cat.png" alt="img" /></div>
        <div class="container">
          <div class="bunner__body">
            <div class="bunner__title">
              <h1>Apartments <br> </h1>
              <p>in Dubai</p>
            </div>
          </div>
        </div>
      </section>
      <section class="articles cat-slider" id="cat">
        <div class="container">
          <div class="articles__header">
            <div class="articles__title title-small">
              <h2>All Apartments <br>Category</h2>
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
                  <li class="swiper-slide">
                    <div class="imgs"><img src="<?php echo get_template_directory_uri()?>/assets/img/i-1.png" alt="img" /></div>
                    <div class="column__title">
                      <h3>Townhous</h3>
                    </div>
                    <div class="column__body">
                      <div class="column__title--body">
                        <h3>Townhous</h3>
                      </div>
                      <p class="column__text--body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat
                        molestie integer aliquam consectetur. Faucibus vitae dui massa tellus magna sit.</p><a
                        class="btn-empty btn column__link" href="#!">Learn more<svg>
                          <use xlink:="xlink:" href="#chevron-right"></use>
                        </svg></a>
                    </div>
                  </li>
                  <li class="swiper-slide">
                    <div class="imgs"><img src="<?php echo get_template_directory_uri()?>/assets/img/i-2.png" alt="img" /></div>
                    <div class="column__title">
                      <h3>Villa</h3>
                    </div>
                    <div class="column__body">
                      <div class="column__title--body">
                        <h3>Villa</h3>
                        <p class="column__text--body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat
                          molestie integer aliquam consectetur. Faucibus vitae dui massa tellus magna sit.</p>
                      </div><a class="btn-empty btn column__link" href="#!">Learn more<svg>
                          <use xlink:="xlink:" href="#chevron-right"></use>
                        </svg></a>
                    </div>
                  </li>
                  <li class="swiper-slide">
                    <div class="imgs"><img src="<?php echo get_template_directory_uri()?>/assets/img/i-3.png" alt="img" /></div>
                    <div class="column__title">
                      <h3>Commercial</h3>
                    </div>
                    <div class="column__body">
                      <div class="column__title--body">
                        <h3>Commercial</h3>
                      </div>
                      <p class="column__text--body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat
                        molestie integer aliquam consectetur. Faucibus vitae dui massa tellus magna sit.</p><a
                        class="btn-empty btn column__link" href="#!">Learn more<svg>
                          <use xlink:="xlink:" href="#chevron-right"></use>
                        </svg></a>
                    </div>
                  </li>
                  <li class="swiper-slide">
                    <div class="imgs"><img src="<?php echo get_template_directory_uri()?>/assets/img/i-3.png" alt="img" /></div>
                    <div class="column__title">
                      <h3>Apartments</h3>
                    </div>
                    <div class="column__body">
                      <div class="column__title--body">
                        <h3>Apartments</h3>
                      </div>
                      <p class="column__text--body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat
                        molestie integer aliquam consectetur. Faucibus vitae dui massa tellus magna sit</p><a
                        class="btn-empty btn column__link" href="#!">Learn more<svg>
                          <use xlink:="xlink:" href="#chevron-right"></use>
                        </svg></a>
                    </div>
                  </li>
                </ul>
              </div>
              <div class="cat-pagination"></div>
            </div>
          </div>
        </div>
      </section>
      <section class="blog rel cat-offers" id="blog">
        <div class="container">
          <div class="blog__head">
            <div class="blog__title">
              <h1>Best Offers</h1>
            </div>
          </div>
          <ul class="blog__body">
            <li class="blog__card blog-card">
              <div class="blog-card__img rel">
                <div class="imgs"><img src="<?php echo get_template_directory_uri()?>/assets/img/blog-1.png" alt="img" /></div>
              </div>
              <div class="blog-card__low">
                <h3>Commercial property in Abu Dhabi</h3>
                <p class="blog-card__text">In Dubai, the final statistics of all transactions related to real estate for
                  the first quarter has been confirmed ...</p><a class="btn-empty btn" href="#!">Learn more<svg>
                    <use xlink:href="#chevron-right"></use>
                  </svg></a>
              </div>
            </li>
            <li class="blog__card blog-card">
              <div class="blog-card__img rel">
                <div class="imgs"><img src="<?php echo get_template_directory_uri()?>/assets/img/blog-2.png" alt="img" /></div>
              </div>
              <div class="blog-card__low">
                <h3>Commercial property in Abu Dhabi</h3>
                <p class="blog-card__text">In Dubai, the final statistics of all transactions related to real estate for
                  the first quarter has been confirmed ...</p><a class="btn-empty btn" href="#!">Learn more<svg>
                    <use xlink:href="#chevron-right"></use>
                  </svg></a>
              </div>
            </li>
            <li class="blog__card blog-card">
              <div class="blog-card__img rel">
                <div class="imgs"><img src="<?php echo get_template_directory_uri()?>/assets/img/blog-3.png" alt="img" /></div>
              </div>
              <div class="blog-card__low">
                <h3>Commercial property in Abu Dhabi</h3>
                <p class="blog-card__text">In Dubai, the final statistics of all transactions related to real estate for
                  the first quarter has been confirmed ...</p><a class="btn-empty btn" href="#!">Learn more<svg>
                    <use xlink:href="#chevron-right"></use>
                  </svg></a>
              </div>
            </li>
            <li class="blog__card blog-card">
              <div class="blog-card__img rel">
                <div class="imgs"><img src="<?php echo get_template_directory_uri()?>/assets/img/blog-4.png" alt="img" /></div>
              </div>
              <div class="blog-card__low">
                <h3>Commercial property in Abu Dhabi</h3>
                <p class="blog-card__text">In Dubai, the final statistics of all transactions related to real estate for
                  the first quarter has been confirmed ...</p><a class="btn-empty btn" href="#!">Learn more<svg>
                    <use xlink:href="#chevron-right"></use>
                  </svg></a>
              </div>
            </li>
            <li class="blog__card blog-card">
              <div class="blog-card__img rel">
                <div class="imgs"><img src="<?php echo get_template_directory_uri()?>/assets/img/blog-5.png" alt="img" /></div>
              </div>
              <div class="blog-card__low">
                <h3>Commercial property in Abu Dhabi</h3>
                <p class="blog-card__text">In Dubai, the final statistics of all transactions related to real estate for
                  the first quarter has been confirmed ...</p><a class="btn-empty btn" href="#!">Learn more<svg>
                    <use xlink:href="#chevron-right"></use>
                  </svg></a>
              </div>
            </li>
            <li class="blog__card blog-card">
              <div class="blog-card__img rel">
                <div class="imgs"><img src="<?php echo get_template_directory_uri()?>/assets/img/blog-6.png" alt="img" /></div>
              </div>
              <div class="blog-card__low">
                <h3>Commercial property in Abu Dhabi</h3>
                <p class="blog-card__text">In Dubai, the final statistics of all transactions related to real estate for
                  the first quarter has been confirmed ...</p><a class="btn-empty btn" href="#!">Learn more<svg>
                    <use xlink:href="#chevron-right"></use>
                  </svg></a>
              </div>
            </li>
            <li class="blog__card blog-card">
              <div class="blog-card__img rel">
                <div class="imgs"><img src="<?php echo get_template_directory_uri()?>/assets/img/blog-7.png" alt="img" /></div>
              </div>
              <div class="blog-card__low">
                <h3>Commercial property in Abu Dhabi</h3>
                <p class="blog-card__text">In Dubai, the final statistics of all transactions related to real estate for
                  the first quarter has been confirmed ...</p><a class="btn-empty btn" href="#!">Learn more<svg>
                    <use xlink:href="#chevron-right"></use>
                  </svg></a>
              </div>
            </li>
            <li class="blog__card blog-card">
              <div class="blog-card__img rel">
                <div class="imgs"><img src="<?php echo get_template_directory_uri()?>/assets/img/blog-8.png" alt="img" /></div>
              </div>
              <div class="blog-card__low">
                <h3>Commercial property in Abu Dhabi</h3>
                <p class="blog-card__text">In Dubai, the final statistics of all transactions related to real estate for
                  the first quarter has been confirmed ...</p><a class="btn-empty btn" href="#!">Learn more<svg>
                    <use xlink:href="#chevron-right"></use>
                  </svg></a>
              </div>
            </li>
            <li class="blog__card blog-card">
              <div class="blog-card__img rel">
                <div class="imgs"><img src="<?php echo get_template_directory_uri()?>/assets/img/blog-9.png" alt="img" /></div>
              </div>
              <div class="blog-card__low">
                <h3>Commercial property in Abu Dhabi</h3>
                <p class="blog-card__text">In Dubai, the final statistics of all transactions related to real estate for
                  the first quarter has been confirmed ...</p><a class="btn-empty btn" href="#!">Learn more<svg>
                    <use xlink:href="#chevron-right"></use>
                  </svg></a>
              </div>
            </li>
            <li class="blog__card blog-card">
              <div class="blog-card__img rel">
                <div class="imgs"><img src="<?php echo get_template_directory_uri()?>/assets/img/blog-10.png" alt="img" /></div>
              </div>
              <div class="blog-card__low">
                <h3>Commercial property in Abu Dhabi</h3>
                <p class="blog-card__text">In Dubai, the final statistics of all transactions related to real estate for
                  the first quarter has been confirmed ...</p><a class="btn-empty btn" href="#!">Learn more<svg>
                    <use xlink:href="#chevron-right"></use>
                  </svg></a>
              </div>
            </li>
            <li class="blog__card blog-card">
              <div class="blog-card__img rel">
                <div class="imgs"><img src="<?php echo get_template_directory_uri()?>/assets/img/blog-11.png" alt="img" /></div>
              </div>
              <div class="blog-card__low">
                <h3>Commercial property in Abu Dhabi</h3>
                <p class="blog-card__text">In Dubai, the final statistics of all transactions related to real estate for
                  the first quarter has been confirmed ...</p><a class="btn-empty btn" href="#!">Learn more<svg>
                    <use xlink:href="#chevron-right"></use>
                  </svg></a>
              </div>
            </li>
            <li class="blog__card blog-card">
              <div class="blog-card__img rel">
                <div class="imgs"><img src="<?php echo get_template_directory_uri()?>/assets/img/blog-7.png" alt="img" /></div>
              </div>
              <div class="blog-card__low">
                <h3>Commercial property in Abu Dhabi</h3>
                <p class="blog-card__text">In Dubai, the final statistics of all transactions related to real estate for
                  the first quarter has been confirmed ...</p><a class="btn-empty btn" href="#!">Learn more<svg>
                    <use xlink:href="#chevron-right"></use>
                  </svg></a>
              </div>
            </li>
          </ul>
          <div class="blog__pan"><svg>
              <use xlink:href="#chevron-left"></use>
            </svg><a class="_is-active" href="#!">1</a><a href="#!">2</a><a href="#!">3</a><a href="#!">...</a><a
              href="#!">94</a><a href="#!">95</a><a href="#!">96</a><svg>
              <use xlink:href="#chevron-right"></use>
            </svg></div>
        </div>
      </section>
      <section class="cat-info">
        <div class="container">
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
        </div>
      </section>
    </main>



<?php 
get_footer();
?>