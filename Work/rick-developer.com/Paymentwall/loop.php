<?php
	// Makes an array with own query wich not affects the ain loop
	$events = new WP_Query(array("post_type" => "event"));
	if ($events->have_posts()): while($events->have_posts()): $events->the_post();
		
		get_template_part("loop");
		the_content();
		
	endwhile; endif;
