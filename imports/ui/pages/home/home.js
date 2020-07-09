import './home.html';

import '../../components/hello/hello.js';
import '../../components/info/info.js';
import '../../components/menu/menu.js';
import '../../components/social/social.js';
import '../../components/takeaway/takeaway.js';


import './notify';
import { type } from 'jquery';

var storageKey = '__cookiesAccepted__';
Template.App_home.onCreated(function () {
    this.lang = new ReactiveVar();
});
Template.App_home.onRendered(function () {
    /* setTimeout(function(){
        $("#promo").click();
    }, 1200); */


    if (isStorageAllowed() && !isSetPreference()){
        initializeNotice();
    }

    let lang = localStorage.getItem('lang');
    if (!lang || typeof lang == "undefined" || lang == "undefined") {
        localStorage.setItem("lang", "pt");
        this.lang.set("pt");
        Session.set("lang", "pt");
        setTimeout(function () {
            $("#lang").click();
        }, 1200);
    } else {
        this.lang.set(lang);
        Session.set("lang", lang);
    }


});






function initializeNotice() {
    var el = document.querySelector('.cookie-notice');
    var dismissEl = el.querySelector('.cookie-notice-dismiss');

    el.style.display = 'block';

    dismissEl.addEventListener('click', function () {
        el.style.display = 'none';
        setPreferenceAccepted();
    }, false);
}


function setPreferenceAccepted() {
    localStorage.setItem(storageKey, true);
    console.log("cookie acceptance set");
    console.log(localStorage.getItem(storageKey));
}


function isSetPreference() {
    return JSON.parse(localStorage.getItem(storageKey) || false);
}


function isStorageAllowed() {
    var test = '__localStorageTest__';

    try {
        localStorage.setItem(test, test);
        localStorage.removeItem(test);

        return true;
    } catch (e) {
        console.warn('Storage not allowed, please allow cookies');
        return false;
    }
};

Template.App_home.events({
    'click .js-select-lang': function (e, tmpl) {
        let lang = $(e.target).data("lang");

        localStorage.setItem("lang", lang);
        Template.instance().lang.set(lang);
        Session.set("lang", lang);
        $(".close").click();
    }
});

Template.App_home.helpers({
    'lang': function () {
        let lang = Template.instance().lang.get();

        return lang;
    },
    'get_lang': function (check) {
        let lang = Template.instance().lang.get();

        return check == lang ? true : false;
    }
});