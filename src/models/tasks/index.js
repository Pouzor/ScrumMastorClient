define([
    'underscore',
    'backbone',
    'config'
], function(_, Backbone, config) {

    var TaskModel = Backbone.Model.extend({
        defaults: {
            title: "Nouvelle tache",
            description: "Ce que j'ai a faire",
            username: "Anonymous",
        },

        initialize: function Doc() {
            console.log('Task Constructor');

            this.bind("invalid", function(model, error) {
                console.log(error);
            });
        },

        validate: function(attributes) {
            if (attributes.title === '') {
                return "Le titre du document ne peut pas être vide !!!";
            }
        },

        getId: function() {
            return this.get('id');
        },

        setId: function(value) {
            this.set({id: value});
        },

        getTitle: function() {
            return this.get('title');
        },

        setTitle: function(value) {
            this.set({title: value}, {validate: true});
        },

        getUsername: function() {
            return this.get('username');
        },

        setUsername: function(value) {
            this.set({username: value}, {validate: true});
        },

        getDescription: function() {
            return this.get('description');
        },

        setDescription: function(value) {
            this.set({description: value}, {validate: true});
        },
    });

    return TaskModel;
});
