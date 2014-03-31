requirejs.config({
    waitSeconds: 10,
    paths: {
        jquery: '../lib/jquery/jquery.min',
        backbone: '../lib/backbone/backbone.min',
        underscore: '../lib/underscore/underscore.min',
        text: '../src/text',
        localstore: '../lib/backbone/backbone.localStorage',
        config: '../config/config_dev',
        templates: '../templates',
        taskModel: '../src/models/tasks/index',
        taskCollection: '../src/collections/tasks/index',
        tasksFormView : '../src/views/tasks/form',
        jasmine: '../lib/tests/jasmine',
        'jasmine-html': '../lib/tests/jasmine-html',
        boot: '../lib/tests/boot',
    },

    shim: {
        'underscore': {
            exports: '_'
        },
        'jquery': {
            exports: '$'
        },
        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        'text' : {
            exports : 'text'
        },
        'jasmine': {
            exports: 'jasmine'
        },
        'jasmine-html': {
            deps: ['jasmine'],
            exports: 'jasmine'
        },
        'boot': {
            deps: ['jasmine', 'jasmine-html'],
            exports: 'jasmine'
        }
    },
});

require(['jquery', 'boot'], function ($, jasmine) {

    var specs = [];

    specs.push('../test/formTaskSpec', '../test/modelTaskSpec');

    $(function () {
        require(specs, function (spec) {
            window.onload();
        });
    });

});
