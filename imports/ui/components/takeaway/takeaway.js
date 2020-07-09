import './takeaway.html';


Template.takeaway.helpers({
    'lang': function(){
        return Session.get("lang");
    },  
    'get_lang': function (check) {
        let lang = Session.get("lang");

        return check == lang ? true : false;
    }
});