let passwordone = document.querySelector("#Passwordd")
let eyeIcon = document.querySelector(".eyeicon")
let closeEyeIcon = document.querySelector(".close-eye")

function viewpass(){
    if(password.type == "password"){
      password.type = "text";
      eyeIcon.style.display = "none";
      closeEyeIcon.style.display = "block";
      console.log(password);
    }else{
      password.type = "password";
      eyeIcon.style.display = "block";
      closeEyeIcon.style.display = "none";
    }
  }