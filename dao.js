/**
 * Created with JetBrains WebStorm.
 * User: hadoop
 * Date: 13-4-1
 * Time: 下午5:37
 * To change this template use File | Settings | File Templates.
 */
var mongoose = require('mongoose'),
    schema = mongoose.Schema,
    util = require('util'),
    fs = require('fs'),
    config = require('./config'),
    Model
    ;

var Dao = function(host, port, dbName){
    var uri = util.format('mongodb://%s:%d/%s', host, port, dbName);
    console.log('db uri: ' + uri);
    mongoose.connect(uri);

    Model =  require('./model')(mongoose, schema);

    console.log('User:' + Model.User);

    var user = new Model.User({
        name: 'Admin',
        username: 'admin',
        password: 123456
    });

    user.save(function(err){
        if(!err)
            console.log('save ok !');

    });
}


module.exports = new Dao(config.dbHost, config.dbPort, config.dbName)



