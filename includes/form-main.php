<?php

if (!defined('ABSPATH')) {

  exit;

}



/**

 * form-main

 */

?>

<section class="rel form" id="form">

  <div class="form__img">

    <div class="imgs"><img src="<?php echo get_template_directory_uri() ?>/assets/img/form.webp" alt="img" /></div>

  </div>

  <div class="form__body">

    <p class="form__text">Do you have any questions?</p>

    <div class="form__title">

      <h2>Contact us</h2>

    </div>

    <?php echo do_shortcode('[contact-form-7 id="189e57c" title="main-form"]'); ?>


    <div id="success">Your E-mail has been sent successfully.</div>

  </div>

</section>