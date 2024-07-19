function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  location.replace("users/user_1/user_1.html");
  $("#profile_name").text(profile.getName());
  $("#profile_pic").attr('scr', profile.getImageUrl());
  $("#userpage").css("display","block");
  $("#mainloginpage").css("display","none");
}