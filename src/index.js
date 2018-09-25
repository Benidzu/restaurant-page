console.log("test");
console.log("sup");

import head from './header';
import contents from './content';
import navbr from './navbar';
import contact from './contact';
import menu from './menu';

var wrapper = document.querySelector("#content");

wrapper.innerHTML = head +  navbr + `<div id="content-box">` + contents + `</div>` ;

var ctbx = document.querySelector("#content-box");

window.openmenu = function () {
    ctbx.innerHTML = menu;
}

window.opencontacts = function () {
    ctbx.innerHTML = contact;
}

window.openhome = function () {
    ctbx.innerHTML = contents;
}