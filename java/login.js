var login = document.getElementById("login_btn");

login.onclick = function()
{
    var user = document.getElementById("username").value;
    var pass = document.getElementById("password").value;
    var admin = user =="admin" && pass =="admin@123"? "login sucess":"Failed";
    var first = user=="dharampal" && pass=="dharampal@123"? "login sucess": "Failed";
    var second = user=="lalit" && pass=="lalit@123"? "login sucess": "Failed";
    var third = user=="karan" && pass=="karan@123"? "login sucess": "Failed";
    if (admin=="login sucess") {
        window.location.href='adminmain.html';
    } 
    if (first=="login sucess") {
        window.location.href='dharampalmain.html';
    } 
    if (second=="login sucess") {
        window.location.href='lalitmain.html';
    } 
    if (third=="login sucess") {
        window.location.href='karanmain.html';
    }
    return false;
}