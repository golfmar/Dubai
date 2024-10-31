<?php

/*

Template Name: contacts

*/

defined('ABSPATH') || exit;

get_header('blog');

?>



<main class="inner">

  <section class="contacts rel" id="contacts">

    <div class="container">

      <div class="breadcrumbs" typeof="BreadcrumbList" vocab="https://schema.org/">

        <?php if (function_exists('bcn_display')) {

          bcn_display();

        } ?>

      </div>

      <div class="look__container contacts__body">

        <div class="contacts__title">

          <h1>Contact</h1>

        </div>

      </div>

      <div class="contacts__plaza rel">

        <div class="imgs">

          <img src="<?php echo get_template_directory_uri() ?>/assets/img/contacts.webp" alt="img" />

        </div>

        <div class="contacts__unit">

          <h2>

            Dubai, UAE

          </h2>

          <p>

            <?php

            $address = get_field('address', 'options');

            if ($address): ?>

              <?php echo $address; ?>

            <?php endif; ?>

          </p>

          <div class="contacts__phone">

            <a href="">

              <?php

              $phone = get_field('phone', 'options');

              if ($phone): ?>

                <?php echo $phone; ?>

              <?php endif; ?>

            </a>

          </div>

          <p class="contacts__line">Email:

            <span>

              <a href="mailto:<?php the_field('email', 'option'); ?>">
                <?php
                $email = get_field('email', 'options');
                if ($email): ?>
                  <?php echo $email; ?>
                <?php endif; ?>
              </a>

            </span>

          </p>

          <p class="contacts__line">Follow us:</p>

          <p class="contacts__line">

            Work Hours:

            <span>

              <?php

              $work = get_field('work_hours', 'options');

              if ($work): ?>

                <?php echo $work; ?>

              <?php endif; ?>

            </span>

          </p>

        </div>

      </div>

      <div class="look__container">
        <?php echo do_shortcode('[contact-form-7 id="7e992e0" title="contacts-form"]'); ?>
      </div>

    </div>

  </section>

</main>

















<?php

get_footer();

?>