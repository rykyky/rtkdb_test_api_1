const r = require('rethinkdb')
require('dotenv').config()
module.exports.rtk_ctrl_stuffs = { sec_ch_ua_mobile, connectRethinkdb}
function sec_ch_ua_mobile(rh) { let t = rh; return t[t.indexOf('sec-ch-ua-mobile') + 1] }

function connectRethinkdb(rethinkhost = JSON.parse(process.env.RTHK_CLUSTER_MAIN)) {
    let connection = null;
    return Promise.resolve(
        r.connect(
            { host: rethinkhost[0], port: process.env.RTHK_PORT_MAIN,user:process.env.RTHK_USER_TOP,password:process.env.RTHK_PASSWORD_TOP },
            function (err, conn) {
                if (err) connection = err;
                if (conn) connection = conn;
                return connection;
            }
        )
    );
}