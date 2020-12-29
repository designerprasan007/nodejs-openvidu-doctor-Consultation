const app = require('./app');
const config = require('./config');
const https = require('https');
const fs = require('fs');
var https_options = {
  key: fs.readFileSync("/opt/openvidu/certificates/live/pontis.me/privkey.pem"),
  cert: fs.readFileSync("/opt/openvidu/certificates/live/pontis.me/cert.pem"),
}
const server =https.createServer(https_options, app).listen(5060,()=>{
    console.log('Server listening to port 5060');
  });

module.exports = server;
