<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package dub
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>

<head>
  <meta charset="<?php bloginfo('charset'); ?>">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="profile" href="https://gmpg.org/xfn/11">

  <?php wp_head(); ?>
</head>


<body <?php body_class(); ?>>
  <?php wp_body_open(); ?>
  <div id="page" class="site">
    <div class="wrapper rel">
      <header class="header">
        <div id="successheader">Your data has been sent successfully.</div>
        <div class="container">
          <div class="burger"> <span></span></div>
          <div class="header__body">
            <a class="header__logo logo" href="<?php echo get_home_url() ?>">
              <p>DubaiRealty</p><span>Real Estate</span>
            </a>

            <nav class="header__menu  menu">
              <?php
              wp_nav_menu(
                array(
                  'theme_location' => 'header-menu',
                  'menu_id' => 'header-menu',
                  'container' => null,
                  'menu_class' => 'menu__list',
                  'echo' => true,
                  'depth' => 0,
                )
              );
              ?>

            </nav>
            <form id="languageForm" method="GET" action="/lang" onsubmit="return false;">
              <fieldset class="fildset-radio fildset-radio--lang">
                <div class="form-check"><input type="radio" id="14" name="lang" value="EN" checked="checked" /><label
                    class="_hover" for="14">EN</label></div>
                <div class="form-check"><input type="radio" id="15" name="lang" value="DE" /><label class="_hover"
                    for="15">DE</label></div>
              </fieldset>
            </form>
            <div class="header__info info">
              <a class="info__phone _hover" href="javascript:void(0);">
                <?php
                $phone = get_field('phone', 'options');
                if ($phone):
                  ?>
                  <?php echo $phone; ?>
                <?php endif; ?>
              </a>
              <a class="book-button btn btn-success but-wave popups-init-js" rel="#popup-header"
                href="javascript:void(0);">Book a consultation</a>
            </div>
            <?php get_template_part('./includes/search-field') ?>

          </div>
        </div>
      </header>