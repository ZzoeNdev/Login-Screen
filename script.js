const divNoLogin = document.getElementById("semloginContainer")
const newButton = document.getElementById("newButton")
const h1 = document.getElementById("h1")
const containerL = document.getElementById("loginContainer")
const containerS = document.getElementById("signContainer")

newButton.addEventListener("click", function(){

    if (divNoLogin.classList.contains("open")){

        divNoLogin.classList.remove("open")
        divNoLogin.classList.add("close")
        containerS.classList.add("dragLeftWithLogin")
        h1.classList.add("fadeIn")
        h1.style.textAlign = "end"
        setTimeout(function(){h1.classList.remove("fadeIn");containerS.classList.remove("dragLeftWithLogin");containerL.classList.remove("dragRightWithLogin");}, 800)
        h1.innerText = "Ainda não tem cadastro?"
        newButton.innerText = "Cadastre-se agora!"
        containerL.classList.add("dragRightWithLogin")
    }

    else{

        divNoLogin.classList.remove("close")
        divNoLogin.classList.add("open")
        containerL.classList.add("dragRightNoLogin")
        h1.classList.add("fadeIn")
        h1.style.textAlign = "start"
        setTimeout(function(){h1.classList.remove("fadeIn");containerL.classList.remove("dragRightNoLogin");containerS.classList.remove("dragLeftNoLogin");}, 800)
        h1.innerText = "Já possui cadastro?"
        newButton.innerText = "Entrar em sua conta!"
        containerS.classList.add("dragLeftNoLogin")
    }

});