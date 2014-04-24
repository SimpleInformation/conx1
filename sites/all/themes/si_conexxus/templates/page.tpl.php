<div class="container main clearfix">
	<div class="row header">
    <div class="six column headL">
	<a href="/"><img src="/<?php print $directory; ?>/images/logo.png" width="315" height="75" alt="Conexxus: solve foward" /></a>
	</div> <!--closes headL-->

    <div class="ten columns headR">
    	<div id="main-nav">
        <?php print render($page['header_right']); ?>
       </div>
    </div> <!--closes headR-->
    </div> <!--closes row header-->
    
    <div class="row call-out">
    	<div class="sixteen columns">
    	<?php if ($messages): ?>
             <div id="messages">
             <?php print $messages; ?>
             </div><!-- /#messages -->
        <?php endif; ?>
        <?php print render($title_prefix); ?>
           		<?php if ($title): ?>
                <h1 class="title" id="page-title">
                <?php print $title; ?>
                </h1>
                <?php endif; ?>
                
                <?php print render($title_suffix); ?>
                
                <?php if ($page['banner']): ?>
        			<?php print render($page['banner']); ?>
    			<?php endif; ?>
                    	
   		 </div> <!--closes columns-->
  	</div> <!--closes call-out row-->
    
    <div class="row clearfix">
    	<div class="four columns sidebar-left">
        <?php if ($page['sidebar_left']): ?>
        	<?php print render($page['sidebar_left']); ?>
    	<?php endif; ?>
        </div> <!--closes sidebar-left-->
        
        <div class="twelve columns main-content">
        	  <?php if ($tabs): ?>
                <div class="tabs">
                  <?php print render($tabs); ?>
                </div> <!--closes tabs-->
                <?php endif; ?>
                
                <?php print render($page['help']); ?>
                
                <?php if ($action_links): ?>
                <ul class="action-links">
                  <?php print render($action_links); ?>
                </ul>
                <?php endif; ?>
                
                <?php print render($page['content']); ?>
                <?php print $feed_icons; ?>
        </div> <!--closes main-content-->
    </div> <!--closes row-->

</div> <!--closes main container-->

<div class="container footer">
	<div class="nine columns address">
    <?php if ($page['footer_left']): ?>
        <?php print render($page['footer_left']); ?>
    <?php endif; ?>
    </div> <!--closes address-->
    <div class="seven columns copy">
    <?php if ($page['footer_right']): ?>
        <?php print render($page['footer_right']); ?>
    <?php endif; ?>
    </div> <!--closes copy-->  
</div> <!--closes footer container-->