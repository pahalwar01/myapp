window.onload = function(){
            var user_email = sessionStorage.getItem("user");
            var json_data = localStorage.getItem(user_email);
            var obj_data = JSON.parse(json_data);
            var profile_name = document.getElementById("view_jobs");
            var dharampal = document.getElementById("dharampal");
            var karan = document.getElementById("karan");
            var lalit = document.getElementById("lalit");
            
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

var add_item = document.getElementById("addwork");

add_item.onclick = function()
{
    var bg = document.getElementById("jobs_bg");
    bg.style.display = "block";
    var user_email = sessionStorage.getItem("user");
    var json_data = localStorage.getItem(user_email);
    var obj_data = JSON.parse(json_data);
    var rider = document.getElementById("r_name");
    rider.value = atob(obj_data.username);
    
}

var close = document.getElementById("close_btn");
close.onclick = function()
{
    window.location.replace("works.html");
}