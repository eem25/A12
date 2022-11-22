function setCookie(cname,cvalue,exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
var user = getCookie("username");
function checkCookie() {

    if (user != "") {
        user = prompt("Welcome again " + user + " Please enter your new full name:","");
        if (user != "" && user != null) {
            setCookie("username", user, 30);
        }
    } else {
        user = prompt("Please enter your full name:","");
        if (user != "" && user != null) {
            setCookie("username", user, 30);
            add();
        }
    }
}

function add(){
    user = getCookie("username");
    document.getElementById("cookie").innerHTML = " Your name saved by the cookie right now is: " + user;
}