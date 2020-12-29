 $(document).ready(function () {
  // patietn msg section
        $("#send_msg").on('click', function (e) {
          e.preventDefault();
          var message = $('#text_msgs').val();
          var link = window.location.href;
          var room_id = link.slice(32);
          var doc_id = $('#doc_id').text();
            $.ajax({
              type: 'POST',
              url:'/send_msgs',
              data : {
                d_id: doc_id,
                message: message,
                room_name: room_id
              },
              success: function(msg){
                $("#msg_q").load(" #msg_q > *");
              }              
            })
        });
    });
