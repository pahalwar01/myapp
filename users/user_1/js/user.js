window.onload = function(){
    var user = document.getElementById("login_uname").value;
    var pass = document.getElementById("login_pwd").value;
    var admin = user =="admin" && pass =="admin@123"? "login sucess":"Failed";
    var first = user=="Dharampal" && pass=="dharampal@123"? "login sucess":"Failed";
    var second = user=="Lalit" && pass=="lalit@123"? "login sucess":"Failed";
    var third = user=="Karan" && pass=="karan@123"? "login sucess":"Failed";

    if(user != admin , first , second , third )
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
            
            rider_details.innerHTML = atob(obj_data.username) + "'s Total Conveyance Details"
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