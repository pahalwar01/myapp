var signup_frm = document.getElementById("signup_frm");

signup_frm.onsubmit = function()
{
    var user = btoa(document.getElementById("username").value);
    var email = btoa(document.getElementById("email").value);
    var phone = btoa(document.getElementById("phone").value);
    var pass = btoa(document.getElementById("password").value);

    var user_object_data = {username:user,email:email,phone:phone,password:pass};
    var user_text_data = JSON.stringify(user_object_data);

    if (user != "" && email != "" && phone != "" && pass !="")
        {   
            localStorage.setItem(email,user_text_data);
            var signup_btn = document.getElementById("signup_btn");
            signup_btn.style.background = "#14b129";
            signup_btn.innerHTML = "<i class='fa fa-check' aria-hidden='true'></i> Sign up Successful !😊";
            setTimeout(function() {
                signup_btn.style.background = "linear-gradient(to right, #E100FF, #7F00FF)";
                signup_btn.innerHTML = "Sign up";
                signup_frm.reset();
            }, 3000);
            return false
        }

}




// email validation coding start

var email_input = document.getElementById("email");
email_input.onchange = function()
{
    var email = btoa(document.getElementById("email").value);
    var warning = document.getElementById("email_notice");
    var signup_btn = document.getElementById("signup_btn");
 
    if (localStorage.getItem(email) != null)
        {
            warning.style.display = "block";
            email_input.style.borderBottomColor = "red";
            signup_btn.disabled = true;
            signup_btn.style.background = "#ccc";

            email_input.onclick = function()
            {
                email_input.value = "";
                email_input.style.borderBottomColor = "#ccc";
                warning.style.display = "none";
                signup_btn.disabled = false;
                signup_btn.style.background = "linear-gradient(to right, #E100FF, #7F00FF)";

            }

        }

}

// email validation coding end


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