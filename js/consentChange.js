function klaroCookieChange() {
    return klaro.show();
}

document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('#cookieChange').addEventListener('click', clickHandler);
    klaroCookieChange();
});