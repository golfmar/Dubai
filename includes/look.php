<?php 
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * look
 */
?>

 <section class="look" id="look">
        <div class="container">
          <div class="look__body">
            <p class="look__text">
            
<?php
$file = get_field('look__text');
if( $file ): ?>
<?php echo $file; ?>
<?php endif; ?>
            </p>
            <div class="look__title title">
             <?php
$file = get_field('look__title');
if( $file ): ?>
<?php echo $file; ?>
<?php endif; ?>
            </div>
            <p class="look__content">
<?php
$file = get_field('look__content1');
if( $file ): ?>
<?php echo $file; ?>
<?php endif; ?>
            </p>
          </div>
          <div class="look__video">

<video class="player-1" id="player-1" playsinline="" controls=""   data-poster="assets/img/paralax.jpg">
<source src="
<?php
$file = get_field('home-video');
if( $file ): ?>
<?php echo $file['url']; ?>
<?php endif; ?>
" type="video/mp4" />
</video>


          </div>
          <div class="look__info">
            <p class="look__bage">
             <?php
$file = get_field('look__bage');
if( $file ): ?>
<?php echo $file; ?>
<?php endif; ?>
            </p>
<?php get_template_part('./includes/look-blocks') ?>  
          </div>
        </div>
      </section>