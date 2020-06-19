import './home.html';

import '../../components/hello/hello.js';
import '../../components/info/info.js';


Template.App_home.onRendered(function () {
    /* setTimeout(function(){
        $("#promo").click();
    }, 1200); */

    let lang = localStorage.getItem('lang');

    if (lang) {
        
    }else{

    }

});