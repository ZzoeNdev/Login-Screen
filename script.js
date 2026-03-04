const divNoLogin = document.getElementById("semloginContainer");
const buttonLogin = document.getElementById("loginButton");

buttonLogin.addEventListener("click", function(){
    if (divNoLogin.classList.contains("open")){
        divNoLogin.classList.remove("open");
        divNoLogin.classList.add("close");
    }
    else{
        divNoLogin.classList.remove("close");
        divNoLogin.classList.add("open");
    }
});