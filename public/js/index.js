$(document).ready(function () {
    $("#hideshow2").click(function () {
      $("#content2").slideToggle("fast");
    });
  });
  $(document).mouseup(function (e) {
    var container = $("#content2");

    if (!container.is(e.target) && container.has(e.target).length === 0) {
      container.hide();
    }
  });

  $(document).ready(function () {
    $("#calenderoption").click(function () {
      $("#content3").slideToggle("fast");
    });
  });
  $(document).mouseup(function (e) {
    var container = $("#content3");

    if (!container.is(e.target) && container.has(e.target).length === 0) {
      container.hide();
    }
  });


  $(document).ready(function () {
    $('#cars').customA11ySelect();
  });
  $(document).ready(function () {
    $('#phonelist').customA11ySelect();
  });
  $(document).ready(function () {
    $('#location').customA11ySelect();
  });
  $(document).ready(function () {
    $('#location1').customA11ySelect();
  });

  function default_email() {
    $("#default_email").removeClass("none");
    $("#default_email").addClass("showDIV");

    //Make sure webservice and doxyme is not visible
    $("#webservice").removeClass("showDIV");
    $("#webservice").addClass("none");

    $("#doxy_me").removeClass("showDIV");
    $("#doxy_me").addClass("none");
  }

  function webservice() {
    $("#webservice").removeClass("none");
    $("#webservice").addClass("showDIV");

    //Make sure defualt email and doxyme is not visible
    $("#default_email").removeClass("showDIV");
    $("#default_email").addClass("none");
    $("#doxy_me").removeClass("showDIV");
    $("#doxy_me").addClass("none");
  }

  function doxy_me() {
    $("#doxy_me").removeClass("none");
    $("#doxy_me").addClass("showDIV");

    //Make sure defualt and webservice  is not visible
    $("#default_email").removeClass("showDIV");
    $("#default_email").addClass("none");
    $("#webservice").removeClass("showDIV");
    $("#webservice").addClass("none");
  }
  $(document).ready(function () {
          $("#ellipse").click(function () {
              $("#ellipsecontent").slideToggle("fast");
          });
      });
      $(document).mouseup(function (e) {
          var container = $("#ellipsecontent");

          if (!container.is(e.target) && container.has(e.target).length === 0) {
              container.hide();
          }
  });
  // $("#calldetails").hide();
  // $(document).ready(function () {
  //         $("#calldata").click(function () {
  //             $("#calldetails").slideToggle("fast");
  //         });
  //     });
      $(document).mouseup(function (e) {
          var container = $("#calldetails");

          if (!container.is(e.target) && container.has(e.target).length === 0) {
              container.hide();
          }
  });
     // copy text
    $(document).ready(function(){
      $('#share_link').click(function(){
        var $tempElement = $("<input>");
            $("body").append($tempElement);
            $tempElement.val($("#copylink").val()).select();
            document.execCommand("Copy");
            $tempElement.remove();
            alert('your link is copied')
        });
    });

// button design JS

[].slice.call( document.querySelectorAll( 'button.progress-button' ) ).forEach( function( bttn ) {
    new ProgressButton( bttn, {
        callback : function( instance ) {
            var progress = 0,
                interval = setInterval( function() {
                    progress = Math.min( progress + Math.random() * 0.1, 1 );
                    instance._setProgress( progress );

                    if( progress === 1 ) {
                        instance._stop(1);
                        clearInterval( interval );
                    }
                }, 200 );
        }
    } );
} );
// phone number counrty selector
var input = document.querySelector("#phone");
window.intlTelInput(input, {
  utilsScript: "/dist/js/utils.js",
});

//   patient queue
  setInterval(function(){
    $("#p_que").load(" #p_que > *");
    $("#p_que_msg").load(" #p_que_msg > *");
  }, 8000);

    function startcallbtn(el) {
      var doc_id = $(el).find('.doc_id').val();
      var pat_id =  $(el).find('.pat_id').val();
      var url =  $(el).find('.url').val();
      var p_name = $(el).find('.p_name').val();
       // set time date
      var data = new Date();
      var d = new Date,
      dformat = [d.getFullYear() ,d.getMonth()+1, d.getDate()].join('-')+' '+
                [d.getHours(), d.getMinutes(),d.getSeconds()].join(':');
        $.ajax({
          type: 'POST',
          url: '/star_end_call',
          data: {
              doc_id : doc_id,
              pat_id :pat_id,
              dformat:dformat,
              p_name:p_name
            },
            success: function (data) {
              window.location.href="https://pontis.me:5060/accountsdashboard/#"+url;
            },
        })
      } 

// get patient data
 function pat_details(el) {
      var pat_id = $(el).find('.p_id').val();
      // alert(pat_id);
      $.ajax({
        type: 'POST',
        url :'/get_patient',
        data : {
          pat_id : pat_id,
        },
        success: function(data){
          $('#g_pname').text(data[0].patient_name);
          $('#OS').text(data[0].p_form);
          $('#brser').text(data[0].b_name);
          console.log(data[0].b_verion);
          $('#myPopup').toggle();
          
        }
      })
  }

// send massages
  function sendmsg(el) {
    var doc_msg_id = $(el).find('.doc_msg_id').val();
    var msg_url =  $(el).find('.msg_url').val();
    $('.list-group-item').remove();
      $.ajax({
      type: 'POST',
      url: '/get_doc_msgs',
      data: {
          doc_msg_id : doc_msg_id,
          doc_msg_url : msg_url,
      },
      success: function(data) {
        console.log(data);
        for (var key in data) {
        	if (data[key]['d_id'] !== msg_url) {
        		$('ul.msg_ul li').addClass("text-right");
        	}
            $('.msg_ul').append("<li class='list-group-item'>" + data[key]['msg'] + "</li>");
       }
      }
    })
      $("#send_msg").on('click', function (e) {
        e.preventDefault();
        var message = $('#text_msgs').val();
          $.ajax({
            type: 'POST',
            url:'/send_msgs',
            data : {
              d_id: doc_msg_id,
              message: message,
              room_name: msg_url
            },
            success: function(msg){}              
          })
        });
    }
  

// preview

 $('#hide_pr').on('click', function(){
    $('#selfvideo').toggle(); 
    $('#self_hide').toggle(); 
    $("#ellipsecontent").toggle();
  }) 

$('#show_pr').on('click', function(){
    $('#selfvideo').toggle(); 
    $('#self_hide').toggle(); 
  }) 
