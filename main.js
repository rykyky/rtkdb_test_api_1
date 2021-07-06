#!/usr/bin/env nodejs
require('dotenv').config()
const fs = require("fs");
const rtkCtrlFreeGet = require("./controllers/rtk_ctrl_free_get/rtkCtrlFreeGet");

const options = {
  key: fs.readFileSync("certificates/key.perm"),
  cert: fs.readFileSync("certificates/cert.perm"),
};
let xhttp = require("https");
 
/*
let xhttp = require('http');
*/

let dbf = require("./db_functions");
let prodO = require("./prodO");
//const { createConnection } = require("net");

let xport = 4343;
xhttp
  .createServer(options,(rq, res) => {   
    rtkCtrlFreeGet(rq,res)
  }).listen(xport, "");

console.log(process.env.USERDOMAIN, process.env.USERNAME);  
console.log('process.env.USERDOMAIN:',process.env.USERDOMAIN ??process.env.WSL_DISTRO_NAME);
console.log('process.env.USERNAME:',process.env.USERNAME?? process.env.USER);
console.log('Port:',xport,process.env.RTHK_CLUSTER_MAIN);
console.log((new Date).toLocaleString());
 