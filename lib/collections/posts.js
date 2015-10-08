/**
 * Created by adm9360 on 6/10/2015.
 */

Posts = new Mongo.Collection('posts');

Posts.allow({
    insert: function(userId, doc){
        return !! userId;
    }
});