var login_btn = document.getElementById("login_link");
var signup_btn = document.getElementById("signup_link");
var signup_box = document.getElementById("signup");
var login_box = document.getElementById("login");
    
login_btn.onclick = function()
{
    signup_box.style.display = "none";
    login_box.style.display = "block";
}

signup_btn.onclick = function()
{
    login_box.style.display = "none";
    signup_box.style.display = "block";
}