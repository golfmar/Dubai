<?php
/*
Template Name: home
*/
defined('ABSPATH') || exit;
get_header();
?>
<main class="inner">
  <?php get_template_part('./includes/bunner-slider') ?>

  <?php get_template_part('./includes/projects-slider') ?>
  <?php get_template_part('./includes/look') ?>
  <?php get_template_part('./includes/form-main') ?>
  <?php get_template_part('./includes/articles') ?>
  <?php get_template_part('./includes/feed') ?>
  <?php get_template_part('./includes/faq') ?>

</main>


<?php
get_footer();