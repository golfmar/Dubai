<?php
/*
Template Name: services
*/
defined( 'ABSPATH' ) || exit;
get_header('blog');
?>


    <main class="inner">
     <?php get_template_part('./includes/bunner') ?>  
     
      <section class="look serv" id="serv">
        <div class="container">

<div class="breadcrumbs" typeof="BreadcrumbList" vocab="https://schema.org/">
    <?php if(function_exists('bcn_display'))
    {
        bcn_display();
    }?>
</div>



<?php if (get_the_ID() !== get_page_by_path("about")->ID) { ?>
          <div class="look__body">
            <div class="look__title--met">
              <h2>Real estate investment in Dubai, UAE</h2>
            </div>
            <p class="look__content look__content--met look__container--small">This response is important for our
              ability to learn from mistakes, but it alsogives rise to self-criticism, because it is part of the
              threat-protection system. In other words, what keeps us safe can go too far, and keep us too safe. In fact
              it can trigger self-censoring.</p>
            <p class="look__content look__content--met">One touch of a red-hot stove is usually all we need to avoid
              that kind of discomfort in the future. The same is true as we experience the emotional sensation of stress
              from our first instances of social rejection or ridicule. We quickly learn to fear and thus automatically
              avoid potentially stressful situations of all kinds, including the most common of all: </p>
            <p class="look__content look__content--met">This response is important for our ability to learn from
              mistakes, but it alsogives rise to self-criticism, because it is part of the threat-protection system. In
              other words, what keeps us safe can go too far, and keep us too safe. In fact it can trigger
              self-censoring.</p>
            <p class="look__content look__content--met">One touch of a red-hot stove is usually all we need to avoid
              that kind of discomfort in the future. The same is true as we experience the emotional sensation of stress
              from our first instances of social rejection or ridicule. We quickly learn to fear and thus automatically
              avoid potentially stressful situations of all kinds, including the most common of all: </p>
          </div>
<?php }  ?>


<?php  if (get_page_by_path("about")) {   ?>
<?php get_template_part('./includes/look-gal') ?>  
<?php get_template_part('./includes/look--blocks') ?>  
<?php get_template_part('./includes/look--info') ?>  
<?php }  ?>



<?php if (get_the_ID() !== get_page_by_path("about")->ID) { ?>
          <div class="look__container">
            <div class="look__img--met">
              <div class="imgs"><img src="<?php echo get_template_directory_uri()?>/assets/img/met.png" alt="img" /></div>
            </div>
          </div>


          <div class="look__body--met look__container--small">
            <div class="look__title">
              <h2>Methods for Everyone</h2>
            </div>
            <p class="look__content look__content--met">Everything along the way, to and from, fascinated her: every
              pebble, ant, stick, leaf, blade of grass, and crack in the sidewalk was something to be picked up, looked
              at, tasted, smelled, and shaken. Everything was interesting to her. She knew nothing. I knew
              everything…been there, done that. She was in the moment, I was in the past. She was mindful. I was
              mindless.</p>
            <p class="look__content look__content--met">One touch of a red-hot stove is usually all we need to avoid
              that kind of discomfort in the future. The same is true as we experience the emotional sensation of stress
              from our first instances of social rejection or ridicule. We quickly learn to fear and thus automatically
              avoid potentially stressful situations of all kinds, including the most common of all: making mistakes.
            </p>
          </div>
<?php }?>

<?php if (get_the_ID() !== get_page_by_path("about")->ID) { ?>
          <div class="look__info">
            <p class="look__bage look__bage--met look__container--small">“Our greatest weakness lies in giving up. The
              most certain way to succeed is always to try just one more time. emotional sensation of stress from our
              firs”<span>Paul</span><svg>
                <use xlink:href="#c"></use>
              </svg></p>
          </div>
<?php }?>

<?php if (get_the_ID() !== get_page_by_path("about")->ID) { ?>
<?php get_template_part('./includes/look-gal') ?>  
<?php get_template_part('./includes/look--blocks') ?>  
<?php get_template_part('./includes/look--info') ?>  
<?php }?>




        </div>
      </section>


<?php get_template_part('./includes/form-main') ?>  
<?php if (get_the_ID() !== get_page_by_path("about")->ID) { ?>
<?php get_template_part('./includes/paq') ?>
<?php }?>
<?php get_template_part('./includes/articles') ?>  

</main>

<?php 
get_footer();