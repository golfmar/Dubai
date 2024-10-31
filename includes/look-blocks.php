<?php 
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * look-blocks
 */
?>



<ul class="look__blocks">
              <li>
                <div class="look__img">
                  <div class="imgs">
                    <img src="
<?php
$file = get_field('look__img1');
if( $file ): ?>
<?php echo $file['url']; ?>
<?php endif; ?>
" alt="img" />
                  </div>
                </div>
                <p>
<?php
$file = get_field('look__text1');
if( $file ): ?>
<?php echo $file; ?>
<?php endif; ?>
                </p>
              </li>
              <li>
                <div class="look__img">
                  <div class="imgs">
                    <img src="
<?php
$file = get_field('look__img2');
if( $file ): ?>
<?php echo $file['url']; ?>
<?php endif; ?>
" alt="img" />
                  </div>
                </div>
                <p>
<?php
$file = get_field('look__text2');
if( $file ): ?>
<?php echo $file; ?>
<?php endif; ?>
                </p>
              </li>
            </ul>