var express = require('express'),
    fs = require('fs'),
    _ = require('underscore');
    
var app = express.createServer(),
    pub = __dirname + '/public';

var controller_directory = './controllers/';
fs.readdir(controller_directory, function(err, files){
    _(files).each(function (controller_file){
        var controller = require(controller_directory + controller_file);
        if ('init' in controller){
            controller.init({
                app : app,
                base_dir : __dirname
            });
        }
    });
});

app.listen(process.env.PORT, '0.0.0.0');