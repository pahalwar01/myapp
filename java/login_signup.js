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
        }

}
