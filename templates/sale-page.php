<?php
/*
Template Name: sale
*/
defined('ABSPATH') || exit;
get_header('blog');
?>

<main class="inner">
  <section class="blog rel" id="blog">
    <div class="container">

      <div class="breadcrumbs" typeof="BreadcrumbList" vocab="https://schema.org/">
        <?php if (function_exists('bcn_display')) {
          bcn_display();
        } ?>
      </div>
      <div class="blog__head">
        <div class="blog__title">
          <h1>
            <?php echo get_the_title(); ?>
          </h1>
        </div>

        <?php get_template_part('./includes/search-field') ?>
      </div>





      <ul class="blog__body look__container">

        <?php
        // =============================выбираем по слагу и категории========================================
        $post_slug = get_post_field('post_name', get_the_ID());
        if (strpos($post_slug, 'sale') !== false) {
          $tag = 'sale';

        } else if (strpos($post_slug, 'rent') !== false) {
          $tag = 'rent';
        }

        if (strpos($post_slug, 'houses') !== false) {
          $category = 'houses';

        } else if (strpos($post_slug, 'villas') !== false) {
          $category = 'villas';
        }


        // =======================
        
        $page_title = get_the_title();
        $args = array(
          'post_type' => 'post',
          'posts_per_page' => -1,
          'tax_query' => array(
            'relation' => 'AND',
            array(
              'taxonomy' => 'category',
              'field' => 'slug',
              'terms' => $category
            ),
            array(
              'taxonomy' => 'post_tag',
              'field' => 'slug',
              'terms' => $tag
            )
          )
        );
        $query = new WP_Query($args);

        if ($query->have_posts()) {
          while ($query->have_posts()) {
            $query->the_post(); ?>
            <li class="blog__card blog-card">
              <div class="blog-card__img rel">
                <div class="imgs">
                  <?php the_post_thumbnail(); ?>
                </div>
              </div>
              <div class="blog-card__low">
                <h3><?php the_title(); ?> </h3>
                <p class="blog-card__text"><?php the_content(); ?> </p>
                <a class="btn-empty btn" href="<?php the_permalink(); ?>">
                  Learn more
                  <svg>
                    <use xlink:href="#chevron-right"></use>
                  </svg>
                </a>
              </div>
            </li>
            <?php
          }
          wp_reset_postdata();
        }
        ?>

      </ul>
      <!-- <div class="blog__pan"><svg>
          <use xlink:href="#chevron-left"></use>
        </svg><a class="_is-active" href="#!">1</a><a href="#!">2</a><a href="#!">3</a><a href="#!">...</a><a
          href="#!">94</a><a href="#!">95</a><a href="#!">96</a><svg>
          <use xlink:href="#chevron-right"></use>
        </svg></div> -->
    </div>
  </section>
</main>



<?php
get_footer();
?>