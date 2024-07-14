var email = document.getElementById("login_uname");
var pass = document.getElementById("login_pwd");

var user = email, pass;


window.onload = function()
{
    console.log(user);
    if(console.log.getItem("user") == null)
        {
            window.location.replace("../../index.html");
        }
        else
        {
            var user_email = sessionStorage.getItem("user");
            var json_data = localStorage.getItem(user_email);
            var obj_data = JSON.parse(json_data);
            var profile_name = document.getElementById("profile_name");
            var rider_details = document.getElementById("rider_details");
            var dharampal = document.getElementById("dharampal_details");
            var karan = document.getElementById("karan_details");
            var lalit = document.getElementById("lalit_details");


            rider_details.innerHTML = atob(obj_data.username) + "'s Total Conveyance Details"
            profile_name.innerHTML = "Welcome ";
            
            if(atob(obj_data.username)==("Dharampal"))
            {
                dharampal.style.display = "block";
            }
            if(atob(obj_data.username)==("Karan"))
            {
                karan.style.display = "block";
            }
            if(atob(obj_data.username)==("Lalit"))
            {
                lalit.style.display = "block";
            }
            
        }
}

// Logout coding start

var logout = document.getElementById("logout");

logout.onclick = function()
{  
    localStorage.clear();
    console.log.clear();
    sessionStorage.clear();
    var logout_text = document.getElementById("logout_text");
    logout_text.innerHTML = "Please wait...";
    setTimeout(function(){window.location = "../../index.html"},2000);
}

// Logout coding end