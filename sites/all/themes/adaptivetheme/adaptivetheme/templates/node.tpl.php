<article id="article-<?php print $node->nid; ?>" class="<?php print $classes; ?> clearfix"<?php print $attributes; ?>>

<?php if ($node->type === 'article') :?>
	<div id="meta">
		<?php if ($display_submitted): ?>
	    <span class="date">
	      <?php print $datetime; ?>
	    </span>
	  <?php endif; ?>
	
	  <span class="num-comments">
	  	<a href="<?php print $node_path?>#comments">
	  		<?php print $comment_count;?>
	  	</a>
	  </span>
	  
	</div>
<?php endif;?>
<div id="node-content">
  <?php print $unpublished; ?>

  <?php print render($title_prefix); ?>
  <?php if ($title && !$page): ?>
    <header>
      <?php if ($title): ?>
        <h2<?php print $title_attributes; ?>>
          <a href="<?php print $node_url; ?>" rel="bookmark"><?php print $title; ?></a>
        </h2>
      <?php endif; ?>
    </header>
  <?php endif; ?>
  <?php print render($title_suffix); ?>

  
  
  <div<?php print $content_attributes; ?>>
  <?php
    hide($content['comments']);
    hide($content['links']);
    print render($content);
  ?>
  </div>

  <?php if ($links = render($content['links'])): ?>
    <nav class="clearfix"><?php print $links; ?></nav>
  <?php endif; ?>

  <?php print render($content['comments']); ?>
</div>
</article>
