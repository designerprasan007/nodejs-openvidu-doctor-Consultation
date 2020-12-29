var reload = window.location.href;
      if (reload.length <= 37) {
        window.location.href = "https://pontis.me:5060/patient_login";
      }
      $(window).on('load', function () {
        $('#myModal').modal({
          backdrop: 'static',
        });
      });
      var video = document.querySelector("#videoElement");

if (navigator.mediaDevices.getUserMedia) {
  navigator.mediaDevices.getUserMedia({ video: true })
    .then(function (stream) {
      video.srcObject = stream;
    })
    .catch(function (err0r) {
      console.log("Something went wrong!");
    });
}
// get browser data
(function () {
    'use strict';
    
    var module = {
        options: [],
        header: [navigator.platform, navigator.userAgent, navigator.appVersion, navigator.vendor, window.opera],
        dataos: [
            { name: 'Windows Phone', value: 'Windows Phone', version: 'OS' },
            { name: 'Windows', value: 'Win', version: 'NT' },
            { name: 'iPhone', value: 'iPhone', version: 'OS' },
            { name: 'iPad', value: 'iPad', version: 'OS' },
            { name: 'Kindle', value: 'Silk', version: 'Silk' },
            { name: 'Android', value: 'Android', version: 'Android' },
            { name: 'PlayBook', value: 'PlayBook', version: 'OS' },
            { name: 'BlackBerry', value: 'BlackBerry', version: '/' },
            { name: 'Macintosh', value: 'Mac', version: 'OS X' },
            { name: 'Linux', value: 'Linux', version: 'rv' },
            { name: 'Palm', value: 'Palm', version: 'PalmOS' }
        ],
        databrowser: [
            { name: 'Chrome', value: 'Chrome', version: 'Chrome' },
            { name: 'Firefox', value: 'Firefox', version: 'Firefox' },
            { name: 'Safari', value: 'Safari', version: 'Version' },
            { name: 'Internet Explorer', value: 'MSIE', version: 'MSIE' },
            { name: 'Opera', value: 'Opera', version: 'Opera' },
            { name: 'BlackBerry', value: 'CLDC', version: 'CLDC' },
            { name: 'Mozilla', value: 'Mozilla', version: 'Mozilla' }
        ],
        init: function () {
            var agent = this.header.join(' '),
                os = this.matchItem(agent, this.dataos),
                browser = this.matchItem(agent, this.databrowser);
            
            return { os: os, browser: browser };
        },
        matchItem: function (string, data) {
            var i = 0,
                j = 0,
                html = '',
                regex,
                regexv,
                match,
                matches,
                version;
            
            for (i = 0; i < data.length; i += 1) {
                regex = new RegExp(data[i].value, 'i');
                match = regex.test(string);
                if (match) {
                    regexv = new RegExp(data[i].version + '[- /:;]([\\d._]+)', 'i');
                    matches = string.match(regexv);
                    version = '';
                    if (matches) { if (matches[1]) { matches = matches[1]; } }
                    if (matches) {
                        matches = matches.split(/[._]+/);
                        for (j = 0; j < matches.length; j += 1) {
                            if (j === 0) {
                                version += matches[j] + '.';
                            } else {
                                version += matches[j];
                            }
                        }
                    } else {
                        version = '0';
                    }
                    return {
                        name: data[i].name,
                        version: parseFloat(version)
                    };
                }
            }
            return { name: 'unknown', version: 0 };
        }
    };
    
    var e = module.init(),
        debug = '';
    
    // debug += 'browser.name = ' + e.browser.name + '<br/>';
    // debug += 'browser.version = ' + e.browser.version + '<br/>';
    // debug += 'navigator.platform = ' + navigator.platform + '<br/>';

    $('#b_name').val(e.browser.name);
    $('#b_version').val(e.browser.version);
    $('#p_form').val(navigator.platform);

    console.log(e.browser.name, e.browser.version, navigator.platform);
    // document.getElementById('log').innerHTML = debug;
}());




  var ajaxResult;
    $("#check_in").prop('disabled', true);
    $("#p_name").on('keyup', function(){
    $("#check_in").prop('disabled', $('#p_name').val().length>0? false:true);
      $('#check_in').on('click', function (e) {
        e.preventDefault();
        $('.video-container').show();
        var name = $('#p_name').val();
        var doc_id = $('#doc_id').text();
        var link = window.location.href;
        var room_id = link.slice(32);
        // user browser data
        var b_name = $('#b_name').val();
        var b_version = $('#b_version').val();
        var p_form = $('#p_form').val();

        $('.video-container').show();
        $.ajax({
          type: 'POST',
          url: '/patient_join',
          data: {
          d_id: doc_id,
          p_name: name,
          room_name: room_id,
          b_name : b_name,
          b_version : b_version,
          p_form : p_form
          },
          success: function (data) {
            var val = data.slice(8);
            ajaxResult = val;
          },
        });
      })
    })
  

 $("#ellipsecontent").hide();
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

      // making group call
    setInterval(function(){
       var g_p_id = $('.g_p_id').val();
       var group_room = $('.g_room').val();
       if (ajaxResult == g_p_id) {
          window.location.href = "https://pontis.me:5060/Group_Call/#"+group_room;
          $('.g_room').val(''); 
          ajaxResult = 'abcd';        
        }        
      }, 5000);
    // send messages
      $(document).ready(function () {
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



   $('#leave-room').on('click', function(){
      var str = window.location.href; 
      var res = str.slice(32);
      $.ajax({
        type: 'POST',
        url: '/patient_remove',
        data: {
           room_name :res,
           },
        success: function (data) {
           window.history.back();
          },
      })
    })    
    setInterval(function(){
    $("#msg_q").load(" #msg_q > *");
  }, 7000);
      // toggle msg box
      $('.msg_tab').on('click', function(){
        $('.msg_box').toggle();
      }) 

$(document).ready(function () {
       $("#p_que_msg").click(function () {
         $("#chatpopup").slideToggle("fast");
       });
     });


 $('#hide_pr').on('click', function(){
    $('#selfvideo').toggle(); 
    $('#self_hide').toggle(); 
    $("#ellipsecontent").toggle();
  }) 

$('#show_pr').on('click', function(){
    $('#selfvideo').toggle(); 
    $('#self_hide').toggle(); 
  }) 
  $('#selfvideo').click(function(){
    $('#selfvideo').toggleClass('video-container remotevideo');
    $('#videos').toggleClass('remotevideo video-container');
    $('.video-container').show();
    });
