window.onload = function(){
            var user_email = sessionStorage.getItem("user");
            var json_data = localStorage.getItem(user_email);
            var obj_data = JSON.parse(json_data);
            var profile_name = document.getElementById("view_jobs");
            
            profile_name.innerHTML = "Welcome " + atob(obj_data.username);
}
