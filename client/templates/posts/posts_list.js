/**
 * Created by holly on 05/10/2015.
 */

Template.postsList.helpers({
    posts: function() {
        return Posts.find();
    }
});
