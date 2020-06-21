import './menu.html';

Template.menu.onCreated(function () {
    this.lang = new ReactiveVar();
});
Template.menu.onRendered(function () {
    let lang = localStorage.getItem('lang');
    if (!lang || typeof lang == "undefined" || lang == "undefined") {
        localStorage.setItem("lang", "pt");
        this.lang.set("pt");
    } else {
        this.lang.set(lang);
    }
});


Template.menu.helpers({
    'lang': function(){
        let lang = Template.instance().lang.get();

        return lang;
    },  
    'get_lang': function (check) {
        let lang = Template.instance().lang.get();

        return check == lang ? true : false;
    }
});