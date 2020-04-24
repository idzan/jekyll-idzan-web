/* function klaroCookieChange() {
    return klaro.show();
}
 */
document.addEventListener('DOMContentLoaded', function () {
    let changeCookie = document.querySelector('#cookieChange');
    changeCookie.onclick = klaro.show();
    return false;
});


//Just a test
/* window.onload = function() {
    var changeCookie = document.querySelector("#cookieChange");
    changeCookie.onclick =  klaro.show();
    return false;
} */