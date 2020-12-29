const Router = require('express').Router;
const router = new Router();
const async = require('async');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
var db = require('../db');
var moment = require('moment');
var groupcall_doc_id;
var groupcall_pat_id;
var groupcall_room;
var patient_g_room;
// index page
router.get('/', function(req, res){
  res.render('doc_login.ejs');
});

// Doctor section
// doctor signup
router.post('/register_doctor', function(req, res){
	  const initial = req.body.initial;
	  const firstname = req.body.firstname;
	  const lastname = req.body.lastname;
	  const room_name = req.body.room_name;
	  const email = req.body.email;
	  const password = req.body.password;
	  const provider = req.body.provider ;
	  var doctor = `INSERT INTO Doctors(initial, firstname, lastname, room_name, email, password, provider, status) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;
	  var doctors = [initial, firstname, lastname, room_name, email, password, provider, '0'];
	    db.query(doctor, doctors, function(err, results, fields){
		    if(err){
			   	console.log(err);
				  	if (err.errno == '1062') {
				  		res.send('duplicate');
				  	}
		    	} 
			    else{
			    	res.send('success');
			    }
	  });
})
// get signup
router.get('/doc_signup', function(req, res){
  res.render('doc_signup.ejs');
});
// doctor signup finished

// doctor login
router.post('/doctor_login', function(req, res){
	var email = req.body.email;
	var pass = req.body.pass;
	var remember = req.body.Remember;
 	var sqlQuery = `SELECT * FROM Doctors WHERE email = ? AND password = ?`;
  var values = [email, pass];
 	var session = req.session;
  	db.query(sqlQuery, values, function (err, results, fields) {
  	  if (err) {
	      err.push(err.message);
	      return;
    	}
	    if(results.length < 1){
	    	res.send('failed');
	    }
    	if (results.length == 1) {
    	  if (remember == '1') {
	  			res.cookie('email',email, { maxAge: 1000 * 60 * 10});
	  			res.cookie('pass',pass, { maxAge: 1000 * 60 * 10});
  			}
          req.session.doc_id = results[0].doc_id;
          var doc_id = session.doc_id;
          var u_doc = `UPDATE Doctors SET status = ? WHERE doc_id = ?`;
          var l_doc = ['1' , doc_id];
            db.query(u_doc, l_doc, function(err, results, fields){
              if(err){
                console.error(err);
              } 
              else{
                res.send('success' + ' '+ session.room_name);
              }
            })
                req.session.authorised = true;
                req.session.email = results[0].email;
                req.session.room_name = results[0].room_name;
                req.session.firstname = results[0].firstname;
                req.session.initial = results[0].initial;
                req.session.lastname = results[0].lastname;
  	      }
	 	    });
		});

	router.get('/doc_login', function(req, res){
	  res.render('doc_login.ejs');
	});
// doctor login finished

// index page
router.get('/index', function(req, res){
	var session = req.session;
    if(session.email == undefined) {
      res.redirect('/doc_login');
    }
    else{
    	  db.connect(function(err){
	      db.query('SELECT * FROM Patient WHERE status = 1', (err,rows) => {
          if(err){
            console.log('error ', err);
          }
          else{ 
             db.query("SELECT m.*, p.* FROM msgs m, Patient p WHERE m.url = p.url AND p.status=1 AND m.d_id = ?", 
              [session.doc_id],(err, msgs) => {
              if(err){ 
                console.log('table Error', err); 
              }
            else{
              res.render('index.ejs',{email: session.email, room_name:session.room_name, 
              name: session.firstname, initial: session.initial, doc_id: session.doc_id, result : rows, msgs: msgs });
              }
            });
        	}
          });
        });
    }
});

// get patient data in index

router.post('/get_patient', (req, res) =>{
 var sqlQuery = `SELECT * FROM Patient WHERE patient_id = ?`;
  var values = [req.body.pat_id];
  var session = req.session;
    db.query(sqlQuery, values, function (err, results, fields) {
      if (err) {
        console.log(err)
        }
      else{
        res.send(results);
      }  
    })
  })

// patient section
router.get('/patient_login', function(req, res){
  res.render('patient_login.ejs');
});

/* msg_url is global to select the messages from msg table 
	this varibale is used in the router.get('/patient')
*/
router.post('/patient_signup', function(req, res){
	let room = req.body.room;
  msg_url = req.body.msg_room;
	var sqlQuery = `SELECT * FROM Doctors WHERE room_name = ?`;
  var values = [room];
 	var session = req.session;
  	db.query(sqlQuery, values, function (err, results, fields) {
  		if (err) {
	      err.push(err.message);
	      return;
    	}
	    if(results.length < 1){
	    	res.send('failed');
	    }
    	if (results.length == 1) {
	      req.session.room_name = results[0].room_name;
	      req.session.doc_id = results[0].doc_id;
	      req.session.doc_name = results[0].firstname;
	      req.session.doc_ini = results[0].initial;
        req.session.status = results[0].status;  
	      res.send('success' + ' '+ session.room_name);
	      }
		})
});

// pateint join
// msg_url is global variable came from patient login
var msg_url;
router.post('/patient_join', function(req, res){
  var session = req.session;
  var doctor_id = req.body.d_id;
	var p_name = req.body.p_name;
	var r_name = req.body.room_name;
	var url = 'SELECT * from Patient WHERE url = ?';
	var urls = [r_name];
	db.query(url, urls, function(err, results){
		if (results.length == 1) {
        // res.send('recently' + results.insertId);
		}
		else{
			console.log('new url');
			var patient = `INSERT INTO Patient(patient_name, d_id, url, status, b_name, b_verion,p_form) VALUES (?,?,?,?, ?, ?, ?)`;
  		var patients = [p_name, doctor_id, r_name, '1', req.body.b_name, req.body.b_version, req.body.p_form];
    	db.query(patient, patients, function(err, results, fields){
    	if(err){
     	console.log(err);
	    } 
    	else{
          var num = results.insertId;
          var i_id = num.toString();
    		  res.send('recently' + i_id);
  		  }
   		})
		}
	});
});

// // remove patient when press close or refresh or exit the room
router.post('/patient_remove', function(req, res){
	var r_name = req.body.room_name;
  var patient = `UPDATE Patient SET status = ? WHERE url = ?`;
  var patients = [ '0', r_name];
  db.query(patient, patients, function(err, results, fields){
  if(err){
  console.error(err);
  } 
  else{
    res.send('call connected');
  }
})
});


// patient video call page here is the globally used msg_url variable
router.get('/patient', function(req, res){
  var session = req.session;
  db.connect(function(err){
    var msg = "SELECT * FROM msgs WHERE url = ?";
    var o_msg = [msg_url];
      db.query(msg, o_msg, (err,rows) => {
        if(err){
          console.log('error ', err);
          }
        else{ 
            res.render('patient.ejs',{doc_id:req.session.doc_id, doc_name:req.session.doc_name, doc_ini:req.session.doc_ini,
             result : rows, groupcall_doc_id:groupcall_doc_id, groupcall_pat_id:groupcall_pat_id,
             group_room:groupcall_room, doc_status: req.session.status});
          }
      });
    });
  });
// Patient and dotor msgs storing to db
router.post('/send_msgs', function(req, res){
  var msg = "INSERT INTO msgs (msg, d_id, url) VALUES (?, ?, ?)";
  var msgs = [req.body.message, req.body.d_id, req.body.room_name];
    db.query(msg, msgs, function(err, results, fields){
      if(err){
      console.log(err);
      } 
      else{
        res.send('stored');
        }
    })
});

// end patient section

// msgs showing in doctor page
router.post('/get_doc_msgs', function(req, res){
  db.connect(function(err){
    var d_msg = "SELECT * FROM msgs WHERE d_id = ? AND url = ?";
    var d_msgs = [req.body.doc_msg_id, req.body.doc_msg_url];
      db.query(d_msg, d_msgs, (err,rows) => {
        if(err){
          console.log('error ', err);
          }
        else{ 
            res.send(rows);
          }
      });
    });
});

// call connect and end
var acc_pat_id; 
var acc_pat_name; 
router.post('/star_end_call', function(req, res){
  acc_pat_id = req.body.pat_id;
  acc_pat_name = req.body.p_name;
  var call = `INSERT INTO timing(p_id, d_id, call_start) VALUES (?, ?, ?)`;
  var calls = [req.body.pat_id, req.body.doc_id, req.body.dformat];
  db.query(call, calls, function(err, results, fields){
  if(err){
  console.log(err);
  } 
  else{
    res.send('call connected');
    }
  })
})
// call end
router.post('/end_status', function(req,res){
  var callend = `UPDATE timing SET call_end = ? WHERE p_id = ?`;
  var callends = [ req.body.dformat, req.body.pid];
  db.query(callend, callends, function(err, results, fields){
    if(err){
      console.error(err);
    } 
    else{
      res.send('success');
    }
  })  
})
// meeting page
router.get('/meetings', function(req, res){
	var session = req.session;
    if(session.email == undefined) {
        res.redirect('/doc_login');
    }
    else{
		  db.connect(function(err){
		  db.query('SELECT * FROM timing', (err,rows) => {
		    if(err){
		      console.log('error ', err);
		      }
		    else{ 
		    	res.render('meetings.ejs',{email: session.email, name: session.firstname, 
		    		initial: session.initial, room_n : session.room_name, doc_id: session.doc_id, result : rows, moment:moment });
		    	}
    	});
  	});
	}
});
// accounts setting
router.get('/accounts', function(req, res){
	var session = req.session;
    if(session.email == undefined) {
        res.redirect('/doc_login');
    }
    else{
    	db.connect(function(err){
		  db.query('SELECT r.* FROM room r', (err,rows) => {
		    if(err){
		      console.log('error ', err);
		      }
		    else{ 
		    	db.connect(function(err){
		 			  db.query('SELECT p.* FROM personal p', (err,personal) => {
				  	res.render('accounts.ejs',{email: session.email, name: session.firstname, 
						initial: session.initial, room_n:session.room_name, doc_id: session.doc_id, 
						lastname:session.lastname,result : rows, pers : personal});
  					})
					})
  			}
  		})
		})
	}
})
// account edit

// personal data
router.post('/personal_data', function(req, res){
	var u_up = `UPDATE Doctors SET initial = ?, firstname = ?, lastname = ?
						 WHERE doc_id = ?`;
  var u_ups = [req.body.initial,req.body.firstname,req.body.lastname, req.body.id];
  db.query(u_up, u_ups, function(err, results, fields){
  if(err){
  console.error(err);
  } 
  else{
    console.log('updated');
  }
});
// insert in personal table
var doctor = `INSERT INTO personal(dsp_name, special, position, NPI, provider, language, d_id)
  VALUES (?, ?, ?, ?, ?, ?, ?)  ON DUPLICATE KEY UPDATE
  dsp_name = VALUES(dsp_name), special = VALUES(special), position = VALUES(position),
   NPI = VALUES(NPI), provider = VALUES(provider), language =VALUES(language),
    d_id = VALUES(d_id)`;
var doctors =[ req.body.dsp_name,
							 req.body.special,req.body.position,req.body.NPI,
							 req.body.provider,req.body.language,req.body.id];
  db.query(doctor, doctors, function(err, results, fields){
    if(err){
	   	console.log(err);
	  } 
	  else{
	  res.send('success');
	  }
	});
})

// room settings
router.post('/room_data', function(req, res){
	var u_up = `UPDATE Doctors SET room_name = ? WHERE doc_id = ?`;
	var u_ups = [req.body.room_name, req.body.id];
	  db.query(u_up, u_ups, function(err, results, fields){
	  if(err){
	  console.error(err);
	  } 
	  else{
	    console.log('updated');
	  }
	});
// insert in personal table
var room = `INSERT INTO room(profile_pic, d_name, cam_pre, room_pass, c_term, d_id)
  VALUES (?, ?, ?, ?, ?, ?)  ON DUPLICATE KEY UPDATE
  profile_pic = VALUES(profile_pic), d_name = VALUES(d_name), cam_pre = VALUES(cam_pre),
  room_pass = VALUES(room_pass), c_term = VALUES(c_term), d_id =VALUES(d_id)`;
var rooms =[ req.body.profile_pic ,req.body.d_name, req.body.cam_pre,
							 req.body.room_pass, req.body.c_term, req.body.id];
  db.query(room, rooms, function(err, results, fields){
    if(err){
	   	console.log(err);
	  } 
	  else{
	  res.send('success');
	  }
	});
})
// change account credentials
router.post('/u_doc_email', function(req, res){
	var u_up = `UPDATE Doctors SET email = ? WHERE doc_id = ? AND password = ?`;
	var u_ups = [req.body.email, req.body.id, req.body.pass];
	  db.query(u_up, u_ups, function(err, results, fields){
	  if(err){
	  console.error(err);
	  } 
	  if(results.changedRows == 0){
    	res.send('failed');
    }
    	else {
    	res.send('updated');
		}
	});
})
// password change
router.post('/u_doc_pass', function(req, res){
	var u_up = `UPDATE Doctors SET password = ? WHERE doc_id = ? AND password = ?`;
	var u_ups = [req.body.new_pass, req.body.id, req.body.pass];
	  db.query(u_up, u_ups, function(err, results, fields){
	  if(err){
	  console.error(err);
	  } 
	  if(results.changedRows == 0){
    	res.send('failed');
    }
    	else {
    	res.send('updated');
		}
	});
})
// delete account
router.post('/delete_doc', function(req, res){
	var delete_doc = `DELETE FROM Doctors WHERE doc_id =? AND password = ?`;
	var delete_docs = [req.body.id, req.body.pass];
	  db.query(delete_doc, delete_docs, function(err, results, fields){
	  if(err){
	  console.error(err);
	  } 
	  console.log(results);
	  if(results.changedRows == 0){
    	res.send('failed');
    }
    	else {
    	res.send('updated');
		}
	});
})


// account dashboard(doctor call conecting page)
router.get('/accountsdashboard', function(req, res){
	var session = req.session;
    if(session.email == undefined) {
        res.redirect('/doc_login');
    }
    else{
    	  db.connect(function(err){
	      db.query('SELECT * FROM Patient WHERE status = 1', (err,rows) => {
          if(err){
            console.log('error ', err);
          }
          else{ 
          	console.log(acc_pat_name);
	        	res.render('accountsdashboard.ejs',{email: session.email, room_name:session.room_name, 
							name: session.firstname, initial: session.initial, doc_id: session.doc_id,
						  result : rows, pat_id :acc_pat_id, pat_name :acc_pat_name});
      	    }
          });
	  		})
			}
	});

// edit of doctor page
router.get('/doc_edit', function(req, res){
	var session = req.session;
    if(session.email == undefined) {
        res.redirect('/doc_login');
    }
    else{
    		 db.connect(function(err){
	    db.query('SELECT * FROM Patient WHERE status = 1', (err,rows) => {
          if(err){
            console.log('error ', err);
          }
          else{ 
	        	res.render('edit.ejs',{email: session.email, room_name:session.room_name, 
						name: session.firstname, initial: session.initial, doc_id: session.doc_id, result : rows, });
      	    }
          });
	  		})
			}
		});

// group call storing data

router.post('/group_call', (req, res)=>{
groupcall_doc_id = req.body.group_doc_id;
groupcall_pat_id = req.body.group_pat_id;
groupcall_room = req.body.group_room;
patient_g_room = req.body.pat_room;

})

// connecting group call
router.get('/Group_Call', function(req, res){
  res.render('groupcall.ejs', {pat_room : patient_g_room});
  });



router.get('/patient_info', function(req, res){
  res.render('patient_info.ejs');
});
router.get('/payments', function(req, res){
  res.render('payments.ejs');
});

router.get('/startcall', function(req, res){
  res.render('startcall.ejs');
});
router.get('/doctor_info', function(req, res){
  res.render('doctor_info.ejs');
});
router.get('/admin_dashboard', function(req, res){
  res.render('admin_dashboard.ejs');
});
router.get('/Screen_Share', function(req, res){
	res.render('screenshare.ejs');
  });
  router.get('/subscription', function(req, res){
	res.render('subscription.ejs');
  });
router.get('/video', function(req, res){
  res.render('video.ejs');
});
// logout session
router.get('/logout', function(req, res){
 var session = req.session;
    session.destroy(function(err){
     if(err){
        console.log(err);
     }
     else{
         console.log(session.email);
         var doc_id = session.doc_id;
         console.log(doc_id);
          var u_doc = `UPDATE Doctors SET status = ? WHERE doc_id = ?`;
          var l_doc = ['0' , doc_id];
            db.query(u_doc, l_doc, function(err, results, fields){
              if(err){
                console.error(err);
              } 
              else{
                 res.redirect('/doc_login');
              }
            })  
          }
      });
  })

module.exports = router;
