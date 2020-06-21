import './home.html';

import '../../components/hello/hello.js';
import '../../components/info/info.js';
import '../../components/menu/menu.js';
import { type } from 'jquery';


Template.App_home.onCreated(function () {
    this.lang = new ReactiveVar();
});
Template.App_home.onRendered(function () {
    /* setTimeout(function(){
        $("#promo").click();
    }, 1200); */

    let lang = localStorage.getItem('lang');
    if (!lang || typeof lang == "undefined" || lang == "undefined") {
        localStorage.setItem("lang", "pt");
        this.lang.set("pt");
        setTimeout(function () {
            $("#lang").click();
        }, 1200);
    } else {
        this.lang.set(lang);
    }


});

Template.App_home.events({
    'click .js-select-lang': function (e, tmpl) {
        let lang = $(e.target).data("lang");

        localStorage.setItem("lang", lang);
        tmpl.lang.set(lang);
        $(".close").click();
    }
});

Template.App_home.helpers({
    'lang': function(){
        let lang = Template.instance().lang.get();

        return lang;
    },  
    'get_lang': function (check) {
        let lang = Template.instance().lang.get();

        return check == lang ? true : false;
    }
});