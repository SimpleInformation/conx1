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
  
    <div class="row home-banner">
    	<div class="sixteen columns">
    	<?php if ($page['hp_banner']): ?>
        	<?php print render($page['hp_banner']); ?>
    	<?php endif; ?>
		</div> <!--closes columns-->
    </div> <!--closes hp-banner-->
    
    <div class="row">
        <div class="eight columns highlight">
        	<?php if ($messages): ?>
                <div id="messages">
                <?php print $messages; ?>
                </div><!-- /#messages -->
            <?php endif; ?>
            
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
                
    	<?php if ($page['hp_left']): ?>
        	<?php print render($page['hp_left']); ?>
    	<?php endif; ?>
        </div> <!--closes highlight-->
        
        <div class="four columns buttons">
        <?php if ($page['hp_midtop']): ?>
        	<?php print render($page['hp_midtop']); ?>
    	<?php endif; ?>
    	<?php if ($page['hp_midbot']): ?>
        	<?php print render($page['hp_midbot']); ?>
    	<?php endif; ?>
        </div> <!--closes buttons-->
        <div class="four columns buttons">
        <?php if ($page['hp_righttop']): ?>
        	<?php print render($page['hp_righttop']); ?>
    	<?php endif; ?>
        <?php if ($page['hp_rightbot']): ?>
        	<?php print render($page['hp_rightbot']); ?>
    	<?php endif; ?>
        </div> <!--closes buttons-->
    </div> <!--closes row-->
    
    <div class="row">
    	<div class="sixteen columns"><hr></div>
    </div>
	<div class="content-top">
	    <?php if ($page['hp_content']): ?>
        	<?php print render($page['hp_content_top']); ?>
    	<?php endif; ?>
	</div>
    
    <div class="row">
    	<div class="twelve columns event">
    	<?php if ($page['hp_content']): ?>
        	<?php print render($page['hp_content']); ?>
    	<?php endif; ?>
		</div> <!--closes event-->
		
        <div class="four columns sidebar-right">
        <?php if ($page['sidebar_right']): ?>
        	<?php print render($page['sidebar_right']); ?>
    	<?php endif; ?>
        </div> <!--closes sidebar-right-->
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