window.onload = function(){
    if(sessionStorage.getItem("user") == null)
        {
            window.location.replace("../../index.html");
        }
        else
        {
            var user_email = sessionStorage.getItem("user");
            var json_data = localStorage.getItem(user_email);
            var obj_data = JSON.parse(json_data);
            var profile_name = document.getElementById("profile_name");
            
            profile_name.innerHTML = "Welcome " + atob(obj_data.username);
        }
}

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