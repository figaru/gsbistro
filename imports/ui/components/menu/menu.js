import './menu.html';



Template.menu.helpers({
    'lang': function(){
        return Session.get("lang");
    },  
    'get_lang': function (check) {
        let lang = Session.get("lang");

        return check == lang ? true : false;
    }
});