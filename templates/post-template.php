<?php /*
  * Template Name: post
  * Template Post Type: post
  * The template for displaying all single posts
  *
  * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post
  *
  * @package dub
  */

get_header('blog');
?>
<main id="primary" class="site-main">

  <?php
  while (have_posts()):
    the_post();
    ?>

    <section class="post rel" id="post">
      <div class="container">
        <div class="breadcrumbs" typeof="BreadcrumbList" vocab="https://schema.org/">
          <?php if (function_exists('bcn_display')) {
            bcn_display();
          } ?>
        </div>
        <div class="post__body">
          <div class="post__img rel">
            <div class="imgs"><?php dub_post_thumbnail(); ?></div>
          </div>
          <div class="post__content">
            <div class="post__title">
              <h1><?php the_title(); ?></h1>
            </div>
            <div class="post__info">
              <p><?php the_content(); ?></p>
            </div>
          </div>
        </div>
      </div>
    </section>



  <?php endwhile; ?>
</main><!-- #main -->

<?php get_footer(); ?>