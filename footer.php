<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package dub
 */

?>

<footer class="footer" id="footer">
  <div class="container">
    <div class="footer__body tabs-container">
      <div class="footer__logo logo">
        <p>DubaiRealty</p><span>Real Estate</span>
      </div>
      <div class="footer__col tab">
        <div class="top tab-header">
          <h3>Buy</h3><svg>
            <use xlink:href="#chevron-down"></use>
          </svg>
        </div>
        <div class="tab-content">
          <ul class="tab-wrap">
            <li> <a href="#!">link Apartment in Dubai</a></li>
            <li> <a href="#!">House in Dubai</a></li>
            <li> <a href="#!">Apartments in Dubai</a></li>
            <li> <a href="#!">Loft in Dubai</a></li>
            <li> <a href="#!">Penthouse in Dubai</a></li>
            <li> <a href="#!">Villa in Dubai</a></li>
          </ul>
        </div>
      </div>
      <div class="footer__col tab">
        <div class="top tab-header">
          <h3>Services</h3><svg>
            <use xlink:href="#chevron-down"></use>
          </svg>
        </div>
        <div class="tab-content">
          <ul class="tab-wrap">
            <li> <a href="#!">Property management in Dubai, UAE</a></li>
            <li> <a href="#!">Sell ​​property in Dubai, UAE</a></li>
            <li> <a href="#!">Rent property in Dubai, UAE</a></li>
            <li> <a href="#!">Investments in Dubai, UAE</a></li>
            <li> <a href="#!">Real estate for cryptocurrency in Dubai</a></li>
            <li> <a href="#!">Moving to Dubai, UAE</a></li>
          </ul>
        </div>
      </div>
      <div class="footer__col tab">
        <div class="top tab-header">
          <h3>Information</h3><svg>
            <use xlink:href="#chevron-down"></use>
          </svg>
        </div>
        <div class="tab-content">
          <ul class="tab-wrap">
            <li> <a href="#!">Video</a></li>
            <li> <a href="#!">Podcasts</a></li>
            <li> <a href="#!">Laws</a></li>
            <li> <a href="#!">Questions and answers</a></li>
            <li> <a href="#!">Books</a></li>
            <li> <a href="#!">Articles</a></li>
          </ul>
        </div>
      </div>
      <div class="footer__col tab">
        <div class="top tab-header">
          <h3>About company</h3><svg>
            <use xlink:href="#chevron-down"></use>
          </svg>
        </div>
        <div class="tab-content">
          <ul class="tab-wrap">
            <li> <a href="#!">Jobs </a></li>
            <li> <a href="#!">Story</a></li>
            <li> <a href="#!">Licenses</a></li>
            <li> <a href="#!">Why are we</a></li>
            <li> <a href="#!">Real estate agency</a></li>
          </ul>
        </div>
      </div>
      <div class="footer__col tab">
        <div class="top tab-header">
          <h3>Contact</h3><svg>
            <use xlink:href="#chevron-down"></use>
          </svg>
        </div>
        <div class="tab-content">
          <ul class="tab-wrap">
            <li>964 Worthington Drive<br>Dubai, UAE </li>
            <li>
              <a class="email-button"
                href="mailto:<?php the_field('email', 'option'); ?>"><?php the_field('email', 'option'); ?></a>
            </li>
            <li>
              <button class="book-button btn btn-success but-wave popups-init-js" rel="#popup-header"
                href="javascript:void(0);">
                Book a consultation
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="footer__low"><a class="footer__pol" href="javascript:void(0);">Copyright © 2022 Dubai Realty</a>
      <ul class="soc footer__soc">
        <?php get_template_part('./includes/soc') ?>
      </ul>
    </div>
  </div>
</footer>
<div class="popup popup-js">
  <div class="popup__overlay popup-overlay-js">
    <div class="popup__inner popup-inner-js">
      <div class="popup__content" id="popup-header">
        <section class="rel header-form" id="form">
          <div class="form__body">
            <div class="form__title">
              <h2>Leave your contacts</h2>
            </div>
            <p class="form__text"> we will contact you within three hours</p>
            <?php echo do_shortcode('[contact-form-7 id="33b0893" title="popup-form"]'); ?>
          </div>
        </section>
      </div>
    </div><i class="popup__close popup-close-js"><svg>
        <use xlink:href="#close"></use>
      </svg></i>
  </div>
</div>
</div>
</div><!-- #page -->
<?php get_template_part('./includes/sprite-svg') ?>
<?php wp_footer(); ?>
</body>

</html>