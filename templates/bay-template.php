<?php
/*
Template Name: bay
*/
defined('ABSPATH') || exit;
get_header('blog');
?>

<main class="inner">
  <?php get_template_part('./includes/bunner') ?>


  <div class="breadcrumbs" typeof="BreadcrumbList" vocab="https://schema.org/">
    <?php if (function_exists('bcn_display')) {
      bcn_display();
    } ?>
  </div>
  <?php echo get_the_title(); ?>



</main>

<?php
get_footer();
?>