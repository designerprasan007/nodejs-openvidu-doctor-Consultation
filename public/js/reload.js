	$('#check_in').on('click', function(){
		// update patients que in the doctor page as patient joins
		setTimeout(function(){ 
		$("#p_que").load(" #p_que > *");
	    $("#p_que_msg").load(" #p_que_msg > *");
		}, 3000);
	})


// msg update in patient page when click send msg in doctor page
	$('#send_msg').on('click', function(){
		setTimeout(function(){ 
    	$("#msg_q").load(" #msg_q > *");
		}, 3000);
	})
