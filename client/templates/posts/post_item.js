/**
 * Created by adm9360 on 6/10/2015.
 */

Template.postItem.helpers({
    domain: function() {
        var a = document.createElement('a');
        a.href = this.url;
        return a.hostname;
    }
});
