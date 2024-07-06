window.onload = function()
        {
            if(sessionStorage.getItem("user") == null)
            {
            var user = document.getElementById("login_uname");
            var profile_name = document.getElementById("profile_name");
            var rider_details = document.getElementById("rider_details");
            
            rider_details.innerHTML = user + "'s Total Conveyance Details"
            profile_name.innerHTML = "Welcome " + user;
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