// Signup coding start

var signup_frm = document.getElementById("signup_frm");

signup_frm.onsubmit = function()
{
    var user = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var pass = document.getElementById("password").value;

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
//signup coding end

// email validation coding start
var email_input = document.getElementById("email");
email_input.onchange = function()
{
    var email = document.getElementById("email").value;
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

// login coding start

var login_frm = document.getElementById("login_frm");

login_frm.onsubmit = function()
{
    var email =document.getElementById("login_uname");
    var password = document.getElementById("login_pwd");

    if(localStorage.getItem(email.value) == null)
        {
            alert("Your E-mail ID is not register");
        }
        else
        {
            var text_data = localStorage.getItem(email.value);
            var object_data = JSON.parse(text_data);
            var correct_email = object_data.email;
            var correct_password = object_data.password;

            if(email.value == correct_email)
                {
                    if(password.value == correct_password)
                        {
                            alert("Login Sucess")
                        }
                        else
                        {
                            alert("Password Wrong")
                        }
                }
        }
        return false;
}

// login coding end