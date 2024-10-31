<?php 
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * bunner
 */
?>

<section class="bunner" id="bunner">
<div class="bunner__bg imgs">
<img src="
<?php
$file = get_field('bunner__bg');
if( $file ): ?>
<?php echo $file['url']; ?>
<?php endif; ?>
" alt="img" />
</div>
        <div class="container">
          <div class="bunner__body">

<p class="bunner__text">
<?php
$file = get_field('bunner__text');
if( $file ): ?>
<?php echo $file; ?>
<?php endif; ?>
</p>

<div class="bunner__title">
<?php
$file = get_field('bunner__title');
if( $file ): ?>
<?php echo $file; ?>
<?php endif; ?>
</div>

</div>
</div>
</section>