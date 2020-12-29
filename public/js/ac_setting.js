 $('.content1').hide();
    $(document).ready(function () {
      $(".clickme1").click(function () {
        $(".content1").slideToggle("fast", function () {
          $('.clickme1').toggleClass('btn-outline-info').toggleClass('btn-outline-info');
          if ($(".content1").is(":hidden")) {
            $(".clickme1").html(
              '<i id="iconChange" class="fas fa-angle-down"></i>&nbsp; <span class="textstyle"> Expand</span>  '
            );
          } else {
            $(".clickme1").html(
              ' <i id="iconChange" class="fas fa-times"></i> &nbsp; <span class="textstyle_close"> Close</span>   '
            );
          }
        });
      });
    });
    $('.content2').hide();
    $(document).ready(function () {
      $(".clickme2").click(function () {
        $(".content2").slideToggle("fast", function () {
          $('.clickme2').toggleClass('btn-outline-info').toggleClass('btn-outline-info');
          if ($(".content2").is(":hidden")) {
            $(".clickme2").html(
              '<i id="iconChange" class="fas fa-angle-down"></i>&nbsp; <span class="textstyle"> Expand</span>   '
            );
          } else {
            $(".clickme2").html(
              ' <i id="iconChange" class="fas fa-times"></i> &nbsp; <span class="textstyle_close"> Close</span>   '
            );
          }
        });
      });
    });

    $('.content3').hide();
    $(document).ready(function () {
      $(".clickme3").click(function () {
        $(".content3").slideToggle("fast", function () {
          $('.clickme3').toggleClass('btn-outline-info').toggleClass('btn-outline-info');
          if ($(".content3").is(":hidden")) {
            $(".clickme3").html(
              '<i id="iconChange" class="fas fa-angle-down"></i>&nbsp; <span class="textstyle"> Expand</span>   '
            );
          } else {
            $(".clickme3").html(
              ' <i id="iconChange" class="fas fa-times"></i> &nbsp; <span class="textstyle_close"> Close</span>   '
            );
          }
        });
      });
    });
    $('.content4').hide();
    $(document).ready(function () {
      $(".clickme4").click(function () {
        $(".content4").slideToggle("fast", function () {
          $('.clickme4').toggleClass('btn-outline-info').toggleClass('btn-outline-info');
          if ($(".content4").is(":hidden")) {
            $(".clickme4").html(
              '<i id="iconChange" class="fas fa-angle-down"></i>&nbsp; <span class="textstyle"> Expand</span>   '
            );
          } else {
            $(".clickme4").html(
              ' <i id="iconChange" class="fas fa-times"></i> &nbsp; <span class="textstyle_close"> Close</span>   '
            );
          }
        });
      });
    });
    $('.content5').hide();
    $(document).ready(function () {
      $(".clickme5").click(function () {
        $(".content5").slideToggle("fast", function () {
          $('.clickme5').toggleClass('btn-outline-info').toggleClass('btn-outline-info');
          if ($(".content5").is(":hidden")) {
            $(".clickme5").html(
              '<i id="iconChange" class="fas fa-angle-down"></i>&nbsp; <span class="textstyle"> Expand</span>   '
            );
          } else {
            $(".clickme5").html(
              ' <i id="iconChange" class="fas fa-times"></i> &nbsp; <span class="textstyle_close"> Close</span>   '
            );
          }
        });
      });
    });

    // for switch toggle button hide show //
    $(".content6").hide();

    $("#customSwitch5").click(function () {

      if (this.checked) {
        $(".content6").show();
        $('input[type=checkbox]').toggleClass('clickme6').toggleClass('clickme6');
        $(".cb6").html(
          '<label class="clabel" >ON</label>  '
        );
      } else {
        $(".content6").hide();
        $('input[type=checkbox]').toggleClass('clickme6').toggleClass('clickme6');
        $(".cb6").html(
          '<label class=" clabel" >OFF</label>  '
        );
      }

    });
     // for switch toggle button hide show //
     $(".profilepic_show").hide();

     $("#customSwitch1").click(function () {
 
       if (this.checked) {
         $(".profilepic_show").show();
         $('input[type=checkbox]').toggleClass('clickme14').toggleClass('clickme14');
         $(".cb6").html(
           '<label class=" clabel" >ON</label>  '
         );
       } else {
         $(".profilepic_show").hide();
         $('input[type=checkbox]').toggleClass('clickme14').toggleClass('clickme14');
         $(".cb6").html(
           '<label class=" clabel" >OFF</label>  '
         );
       }
 
     });
     // for switch toggle button hide show //
      // for switch toggle button hide show //
      $(".service_link").hide();

      $("#customSwitch4").click(function () {
  
        if (this.checked) {
          $(".service_link").show();
          $('input[type=checkbox]').toggleClass('clickme15').toggleClass('clickme15');
          $(".cb6").html(
            '<label class=" clabel" >ON</label>  '
          );
        } else {
          $(".service_link").hide();
          $('input[type=checkbox]').toggleClass('clickme15').toggleClass('clickme15');
          $(".cb6").html(
            '<label class=" clabel" >OFF</label>  '
          );
        }
  
      });
      // for switch toggle button hide show //
    $(".content7").hide();

    $("#customSwitch6").click(function () {

      if (this.checked) {
        $(".content7").show();
        $('input[type=checkbox]').toggleClass('clickme7').toggleClass('clickme7');
        $(".cb7").html(
          '<label class=" clabel" >ON</label>  '
        );
      } else {
        $(".content7").hide();
        $('input[type=checkbox]').toggleClass('clickme7').toggleClass('clickme7');
        $(".cb7").html(
          '<label class=" clabel" >OFF</label>  '
        );
      }

    });
    $(".content8").hide();

    $("#customSwitch7").click(function () {

      if (this.checked) {
        $(".content8").show();
        $('input[type=checkbox]').toggleClass('clickme8').toggleClass('clickme8');
        $(".cb8").html(
          '<label class=" clabel" >ON</label>  '
        );
      } else {
        $(".content8").hide();
        $('input[type=checkbox]').toggleClass('clickme8').toggleClass('clickme8');
        $(".cb8").html(
          '<label class=" clabel" >OFF</label>  '
        );
      }

    });

    $('.content9').hide();
    $(document).ready(function () {
      $(".clickme9").click(function () {
        $(".content9").slideToggle("fast", function () {
          $('.clickme9').toggleClass('btn-outline-info').toggleClass('btn-outline-info');
          if ($(".content9").is(":hidden")) {
            $(".clickme9").html(
              '<i id="iconChange" class="fas fa-angle-down"></i>&nbsp; <span class="textstyle"> Expand</span>   '
            );
          } else {
            $(".clickme9").html(
              ' <i id="iconChange" class="fas fa-times"></i> &nbsp; <span class="textstyle_close"> Close</span>   '
            );
          }
        });
      });
    });
    $('.content10').hide();
    $(document).ready(function () {
      $(".clickme10").click(function () {
        $(".content10").slideToggle("fast", function () {
          $('.clickme10').toggleClass('btn-outline-info').toggleClass('btn-outline-info');
          if ($(".content10").is(":hidden")) {
            $(".clickme10").html(
              '<i id="iconChange" class="fas fa-angle-down"></i>&nbsp; <span class="textstyle"> Expand</span>   '
            );
          } else {
            $(".clickme10").html(
              ' <i id="iconChange" class="fas fa-times"></i> &nbsp; <span class="textstyle_close"> Close</span>   '
            );
          }
        });
      });
    });
    $('.content11').hide();
    $(document).ready(function () {
      $(".clickme11").click(function () {
        $(".content11").slideToggle("fast", function () {
          $('.clickme11').toggleClass('btn-outline-info').toggleClass('btn-outline-info');
          if ($(".content11").is(":hidden")) {
            $(".clickme11").html(
              '<i id="iconChange" class="fas fa-angle-down"></i>&nbsp; <span class="textstyle"> Expand</span>   '
            );
          } else {
            $(".clickme11").html(
              ' <i id="iconChange" class="fas fa-times"></i> &nbsp; <span class="textstyle_close"> Close</span>   '
            );
          }
        });
      });
    });
    $('.content12').hide();
    $(document).ready(function () {
      $(".clickme12").click(function () {
        $(".content12").slideToggle("fast", function () {
          $('.clickme12').toggleClass('btn-outline-info').toggleClass('btn-outline-info');
          if ($(".content12").is(":hidden")) {
            $(".clickme12").html(
              '<i id="iconChange" class="fas fa-angle-down"></i>&nbsp; <span class="textstyle"> Expand</span>   '
            );
          } else {
            $(".clickme12").html(
              ' <i id="iconChange" class="fas fa-times"></i> &nbsp; <span class="textstyle_close"> Close</span>   '
            );
          }
        });
      });
    });
    $('.content13').hide();
    $(document).ready(function () {
      $(".clickme13").click(function () {
        $(".content13").slideToggle("fast", function () {
          $('.clickme13').toggleClass('btn-outline-info').toggleClass('btn-outline-info');
          if ($(".content13").is(":hidden")) {
            $(".clickme13").html(
              '<i id="iconChange" class="fas fa-angle-down"></i>&nbsp; <span class="textstyle"> Expand</span>   '
            );
          } else {
            $(".clickme13").html(
              ' <i id="iconChange" class="fas fa-times"></i> &nbsp; <span class="textstyle_close"> Close</span>   '
            );
          }
        });
      });
    });
    $(document).ready(function () {
      $('#headerVideoLink').magnificPopup({
        type: 'inline',
        midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
      });

    });
    $(document).ready(function () {
            $('#initial').customA11ySelect();
        });
        $(document).ready(function () {
            $('#Business_type').customA11ySelect();
        });
        $(document).ready(function () {
            $('#checkin_msg').customA11ySelect();
        });
        $(document).ready(function () {
            $('#checkin_msg1').customA11ySelect();
        });
        $(document).ready(function () {
            $('#preferred_language').customA11ySelect();
        });
        $("#country_selector").countrySelect({
  				preferredCountries: ['ca', 'gb', 'us']
      });
      
      // delete button disable if the text field is empty
      function success() {
        if(document.getElementById("delete_pass").value==="") { 
                 document.getElementById('button_delete').disabled = true; 
             } else { 
                 document.getElementById('button_delete').disabled = false;
             }
         }
           // delete button disable if the text field is empty  A link to your TOS
      function success1() {
        if(document.getElementById("textsend1").value==="") { 
                 document.getElementById('room_setting').disabled = true; 
             } else { 
                 document.getElementById('room_setting').disabled = false;
             }
         }
         // email and password change prevent modal from closing
      
   $(document).ready(function(){
    $('#changepas').on('click', function(){
    $('#change_password').modal({
      backdrop: 'static',
      keyboard: false
    })
  })
  $('#change_mail').on('click', function(){
    $('#change_e-address').modal({
      backdrop: 'static',
      keyboard: false
    })
  })
})
   // update button disable if the text field is for multiple  empty fileds
  
$(document).ready(function () {
  $('.update-button').attr('disabled', true);
  $('#cur_pass,#new_pass,#conf_pass').on('keyup', function () {
      var textarea_value = $("#new_pass").val();
      var text_value = $('#cur_pass').val();
      var text_value1 = $('#conf_pass').val();
      if (textarea_value != '' && text_value != '' && text_value1 != '') {
          $('.update-button').attr('disabled', false);
      } else {
          $('.update-button').attr('disabled', true);
      }
  });
});

// for  email address  change 
$(document).ready(function () {
  $('.update-button1').attr('disabled', true);
  $('#cur_pass1,#new_email,#c_newemail').on('keyup', function () {
      var currentPass = $("#cur_pass1").val();
      var email = $('#new_email').val();
      var NewEmail = $('#c_newemail').val();
      if (currentPass != '' && email != '' && NewEmail != '') {
          $('.update-button1').attr('disabled', false);
      } else {
          $('.update-button1').attr('disabled', true);
      }
  });
});


    //  ++++++++++++++++++++++++++//+++++++++++++++++++++++++++++++++++++++++++++//

 


// ajax call to server
$(document).ready(function () {
  $('#personal_up').on('click', function (e) {
    e.preventDefault();
    var initial = $('#initial').val();
    var firstname = $('#firstname').val();
    var lastname = $('#lastname').val();
    var dsp_name = $('#display_name').val();
    var special = $('#speciality').val();
    var position = $('#position').val();
    var NPI = $('#npi').val();
    var provider = $('#country_selector_code').val();
    var language = $('#preferred_language').val();
    var id = $('#Uid').val();
    // console.warn(initial, firstname, lastname, dsp_name, special, position, NPI, 
    //              provider, language);
    $.ajax({
      type: 'POST',
      url: '/personal_data',
        data: {
          initial: initial,
          firstname: firstname,
          lastname: lastname,
          dsp_name: dsp_name,
          special: special,
          position: position,
          NPI: NPI,
          provider: provider,
          language: language,
          id: id,
        },
        success: function (data) {
        console.log(data);
      },
    });
  })
})

// room setting
$(document).ready(function () {
  $('#room_setting').on('click', function (e) {
    e.preventDefault();
    var profile_pic = $('#customSwitch1').is(":checked");
    var room_name = $('#room_name').val();
    var d_name = $('#d_name').val();
    var cam_pre = $('#customSwitch2').is(":checked");
    var room_pass = $('#customSwitch3').is(":checked");
    var c_term = $('#customSwitch4').is(":checked");
    var id = $('#Uid').val();
    cam_pre = (cam_pre == true) ? '1' :'0';
    profile_pic = (profile_pic == true) ? '1' :'0';
    room_pass = (room_pass == true) ? '1' :'0';
    c_term = (c_term == true) ? '1' :'0';
    // console.warn(profile_pic, room_name, d_name, cam_pre, room_pass, c_term, id);
    $.ajax({
      type: 'POST',
      url: '/room_data',
        data: {
          profile_pic:profile_pic,
          room_name:room_name,
          d_name:d_name,
          cam_pre:cam_pre,
          room_pass:room_pass,
          c_term:c_term,
          id: id,
        },
        success: function (data) {
        console.log(data);
      },
    });
  })
})
// email update
$(document).ready(function () {
  $('#update_button1').on('click', function (e) {
    e.preventDefault();
    var pass = $('#cur_pass1').val();
    var email = $('#new_email').val();
    var c_email = $('#c_newemail').val();
    var id = $('#Uid').val();
    if (email !== c_email) {
          alert('failed')
    }
    else{
      $.ajax({
        type: 'POST',
        url: '/u_doc_email',
          data: {
            email :email,
            pass  : pass,
            id: id,
          },
          success: function (data) {
          if (data == 'failed') {
            alert('wrong password')
          }
          else{
          alert('email updated')
          $('#email_reset')[0].reset();
          }
        },
      });
    }
  })
})
// password update
$(document).ready(function () {
  $('.update_button').on('click', function (e) {
    e.preventDefault();
    var cu_pass = $('#cur_pass').val();
    var new_pass = $('#new_pass').val();
    var c_pass = $('#conf_pass').val();
    var id = $('#Uid').val();
    if (new_pass !== c_pass) {
          alert('failed')
       }
    else{
      $.ajax({
        type: 'POST',
        url: '/u_doc_pass',
          data: {
            new_pass :new_pass,
            pass  : cu_pass,
            id: id,
          },
          success: function (data) {
          if (data == 'failed') {
            alert('wrong password')
          }
          else{
          alert('password updated')
          $('#psw_setup')[0].reset();
          }
        },
      });
    }
  })
})
// delete account
$(document).ready(function () {
  $('#button_delete').on('click', function (e) {
    e.preventDefault();
    var pass = $('#delete_pass').val();
    var id = $('#Uid').val();
      $.ajax({
        type: 'POST',
        url: '/delete_doc',
          data: {
            pass  : pass,
            id: id,
          },
          success: function (data) {
          if (data == 'failed') {
            alert('wrong password')
          }
          else{
         window.location.href = "https://pontis.me:5060/logout";
          }
        },
      });
  })
})