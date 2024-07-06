

// email validation coding end


/*
// login coding start

var login_frm = document.getElementById("login_frm");

login_frm.onsubmit = function()
{
    var email =document.getElementById("login_uname");
    var password = document.getElementById("login_pwd");
    var email_war = document.getElementById("email_warning");
    var pass_war = document.getElementById("password_warning");

    if(localStorage.getItem(btoa(email.value)) == null)
        {
            email_war.style.display = "block";
            email.style.borderBottomColor = "red";

            email.onclick = function()
            {
                email.value = "";
                email_war.style.display = "none";
                email.style.borderBottomColor = "#ccc";
            }
        }
        else
        {
            var text_data = localStorage.getItem(btoa(email.value));
            var object_data = JSON.parse(text_data);
            var correct_email = object_data.email;
            var correct_password = object_data.password;

            if(btoa(email.value) == correct_email)
                {
                    if(btoa(password.value) == correct_password)
                        {
                            sessionStorage.setItem("user",btoa(email.value));
                            location.replace("users/user_1/user_1.html");
                        }
                        else
                        {
                            pass_war.style.display = "block";
                            password.style.borderBottomColor = "red";

                            password.onclick = function()
                            {
                                password.value = "";
                                pass_war.style.display = "none";
                                password.style.borderBottomColor = "#ccc";
                            }
                        }
                }
        }
        return false;
}

// login coding end
*/



var login_frm = document.getElementById("login_frm");

login_frm.onsubmit = function()
{
    var user = document.getElementById("login_uname").value;
    var pass = document.getElementById("login_pwd").value;
    var admin = user =="admin" && pass =="admin@123"? "login sucess":"Failed";
    var first = user=="Dharampal" && pass=="dharampal@123"? "login sucess":"Failed";
    var second = user=="Lalit" && pass=="lalit@123"? "login sucess":"Failed";
    var third = user=="Karan" && pass=="karan@123"? "login sucess":"Failed";
    if (admin=="login sucess") {
        window.location.href='users/user_1/user_1.html';
    } 
    if (first=="login sucess") {
        window.location.href='users/user_1/user_1.html';
    } 
    if (second=="login sucess") {
        window.location.href='users/user_1/user_1.html';
    } 
    if (third=="login sucess") {
        window.location.href='users/user_1/user_1.html';
    }

    return false;
}

/*
    var user = document.getElementById("username").value;
    var pass = document.getElementById("password").value;
    var admin = user =="admin" && pass =="admin@123";
    var first = user=="dharampal" && pass=="dharampal@123";
    var second = user=="lalit" && pass=="lalit@123";
    var third = user=="karan" && pass=="karan@123";
    if (admin=="login sucess") {
        window.location.href='user/user_1/user_1.html';
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
    */
