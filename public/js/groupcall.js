function startcallbtn(el) {
  var doc_id = $(el).find('.doc_id').val();
  var pat_id =  $(el).find('.patient_id').val();
  var pat_room =  $(el).find('.patient_room').val();
  var str = window.location.href; 
  var group_room = str.slice(42);
  // alert(doc_id + pat_id);
    $.ajax({
      type: 'POST',
      url: '/group_call',
      data: {
          group_doc_id : doc_id,
          group_pat_id :pat_id,
          group_room: group_room,
          pat_room : pat_room,
        },
      })
    } 
