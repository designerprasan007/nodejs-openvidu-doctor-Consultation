 function myvideo() {
      console.log('clicked');
      $("#vid-btn").toggleClass('fas fa-video ');
      $("#vid-btn").toggleClass('fas fa-video-slash');
    }

    $('#myclass').click(function () {
      if ($(this).hasClass('bg-dark')) {
        $(this).removeClass('bg-dark');
      } else {
        $('showDIV').removeClass('showDIV');
        $(this).addClass('bg-dark');
      }
    });
    $('#myclass1').click(function () {
      if ($(this).hasClass('bg-dark')) {
        $(this).removeClass('bg-dark');
      } else {
        $('showDIV').removeClass('showDIV');
        $(this).addClass('bg-dark');
      }
    });

// $('#videos').click(function()
// {
// $('#selfvideo').toggleClass('video-container remotevideo');
// $('#videos').toggleClass('remotevideo video-container'); 
// $('.video-container').show();
// });

    function myvol() {
      console.log('clicked');
      $("#vol-btn").toggleClass('fas fa-microphone ');
      $("#vol-btn").toggleClass('fas fa-microphone-slash');
    }
    $(document).ready(function () {
      $('#location1').customA11ySelect();
    });
    $(document).ready(function () {
      $('#audioanalog').customA11ySelect();
    });
    $(document).ready(function () {
      $('#audioanalog1').customA11ySelect();
    });
    $(document).ready(function () {
      $('#location12').customA11ySelect();
    });
    $(document).ready(function () {
      $('#audioanalog12').customA11ySelect();
    });
    $(document).ready(function () {
      $('#audioanalog2').customA11ySelect();
    });
    $(document).ready(function () {
      $('#video_quality').customA11ySelect();
    });
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



// ajax call
    // $('#leave-room').on('click', function(){
  function getscreen(){
  var caption = 'bellapont';
  $('#caption-text').html(caption);
  html2canvas(document.body, {
    dpi:192,
    onrendered: function(canvas){
      $('#blank').attr('href', canvas.toDataURL('image/png'));
      $('#blank').attr('download', caption + '.png');
      $('#blank')[0].click();
      console.log(canvas.toDataURL('image/png'));
    }
  })
  }

  function leaving_room(){
    var str = window.location.href; 
    var res = str.slice(42);
    var pid = $('.pat_id').val(); 
    // set time date
    var data = new Date();
    var d = new Date,
    dformat = [d.getFullYear() ,d.getMonth()+1,
               d.getDate()
               ].join('-')+' '+
              [d.getHours(),
               d.getMinutes(),
               d.getSeconds()].join(':');
      $.ajax({
        type: 'POST',
        url: '/end_status',
        data: {
           pid :pid,
           dformat:dformat
           },
        })
      $.ajax({
        type: 'POST',
        url: '/patient_remove',
        data: {
           room_name :res,
         },
      })
     window.history.back();
    }
