'use strict';

module.exports = function(City) {

    City.this_is_remote_method = async function(msg) {
        return 'Greetings... ' + msg;
    }

    City.remoteMethod('this_is_remote_method', {
          accepts: {arg: 'msg', type: 'string'},
          returns: {arg: 'greeting', type: 'string'},
          http: {path: '/this_is_remote_method', verb: 'get'}
    });


};
