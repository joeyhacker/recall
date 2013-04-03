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
    config = require('config')
    ;

var Dao = function(host, port, dbName){
    var uri = util.format('mongodb://%s:%d/%s', host, port, dbName);
    console.log('db uri: ' + uri);
    mongoose.connect(uri);


    var models_path = __dirname + '/models';
    fs.readdirSync(models_path).forEach(function (file) {
        require(models_path + '/' + file)
    })

}


module.exports = new Dao(config.dbHost, config.dbPort, config.dbName)



