<?php
if (!defined('ABSPATH')) {
  exit;
}
/**
 * soc
 */
?>



<li>
  <?php

  $facebook = get_field('facebook', 'options');

  if ($facebook):

    ?>

    <a href="<?php echo $facebook; ?>" target="_blank">

      <svg>

        <use xlink:href="#fb"></use>

      </svg>

    </a>

  <?php endif; ?>

</li>



<li>

  <?php

  $tel = get_field('telegramm', 'options');

  if ($tel):

    ?>

    <a href="<?php echo $tel; ?>" target="_blank">

      <svg>

        <use xlink:href="#teleg"></use>

      </svg>

    </a>

  <?php endif; ?>

</li>



<li>

  <?php

  $youtube = get_field('youtube', 'options');

  if ($youtube):

    ?>

    <a href="<?php echo $youtube; ?>" target="_blank">

      <svg>

        <use xlink:href="#youtube"></use>

      </svg>

    </a>

  <?php endif; ?>



</li>

<li>

  <?php

  $instagram = get_field('instagram', 'options');

  if ($instagram):

    ?>

    <a href="<?php echo $instagram; ?>" target="_blank">

      <svg>

        <use xlink:href="#instagram"></use>

      </svg>

    </a>

  <?php endif; ?>

</li>



<li>

  <?php

  $linkedin = get_field('linkedin', 'options');

  if ($instagram):

    ?>

    <a href="<?php echo $linkedin; ?>" target="_blank">

      <svg>

        <use xlink:href="#lind"></use>

      </svg>

    </a>

  <?php endif; ?>



</li>