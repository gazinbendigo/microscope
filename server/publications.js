/**
 * Created by adm9360 on 6/10/2015.
 */

Meteor.publish('posts', function() {
    return Posts.find();
    }
);
