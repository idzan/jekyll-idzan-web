/* function klaroCookieChange() {
    return klaro.show();
}

document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('#cookieChange').addEventListener('click', clickHandler);
    klaroCookieChange();
}); */


//Just a test
window.onload = function() {
    var changeCookie = document.querySelector("#cookieChange");
    changeCookie.onclick =  klaro.show();
    return false;
}