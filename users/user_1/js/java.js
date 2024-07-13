
// Logout coding start

var logout = document.getElementById("logout");

logout.onclick = function()
{  
    sessionStorage.clear();
    var logout_text = document.getElementById("logout_text");
    logout_text.innerHTML = "Please wait...";
    setTimeout(function(){window.location = "../../index.html"},2000);
}

// Logout coding end