/**
 * Created by adm9360 on 7/10/2015.
 */

Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',
    notFoundTemplate: 'notFound',
    waitOn: function(){ return Meteor.subscribe('posts'); }
});

Router.route('/', {name: 'postsList'});
Router.route('/posts/:_id', {
    name: 'postPage',
    data: function() {
        return Posts.findOne(this.params._id);
    }
});

Router.route('/submit', {name: 'postSubmit'});

//This method must be the last one called.
Router.onBeforeAction('dataNotFound', {only: 'postPage'});