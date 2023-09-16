window.onscroll = () => {
    var navbar = document.getElementById("navbar");
    var navLinkArray = document.getElementsByClassName("navLink");
    var logo = document.getElementById("logo");
    var navWrapper = document.getElementById("navWrapper");
    var scrollSign = document.getElementById("scrollSign");
    var hideNavButton = document.getElementById("toggle_nav_button");
    var menuSwitch = document.getElementById("menuSwitch");

    if (window.scrollY != 0) {
        navbar.classList.add("navbar-ativo");
        logo.src = "assets/img/Logos/nowlLogoPreta.svg";
        logo.style.width = "7.5rem";
        scrollSign.style.opacity = 0;
        navWrapper.classList.add("navWrapperAtivo");
        menuSwitch.style.color = "black";
        for (var i = 0; i < navLinkArray.length; i++) {
            var link = navLinkArray[i];
            link.classList.add("navLinkAtivo");
        }
        hideNavButton.style.opacity = "1";
    } else {
        navbar.classList.remove("navbar-ativo");
        logo.src = "assets/img/Logos/nowLogo.svg";
        logo.style.width = "10rem";
        logo.style.opacity = 1;
        scrollSign.style.opacity = 1;
        menuSwitch.style.color = "white";
        navWrapper.classList.remove("navWrapperAtivo");
        for (var i = 0; i < navLinkArray.length; i++) {
            var link = navLinkArray[i];
            link.classList.remove("navLinkAtivo");
        }
        navbar.style.transform = "translateY(0%)";
        navWrapper.style.userSelect = "all";
        navHidden = false;
        hideNavButton.style.opacity = "0";  
        arrow.style.transform = "rotate(0deg)"
    }
}

function validar_nome() {
    var input = document.getElementById('input_nome')
    var nome = input_nome.value
    var span = document.getElementById('span_validar_nome')

    if (nome.length < 3) {
        span.style.color = 'red';
        input.style.borderColor = 'red'
        span.innerHTML = 'O nome deve possuir pelo menos dois caracteres.'
        input.classList.add("shake");
    }
    else {
        span.innerHTML = ''
        span.style.color = "green";
        input.style.borderColor = "#d9d9d9";
        span.innerHTML = 'O nome inserido é válido.'
        input.classList.remove("shake");
    }
}

function validar_assunto() {
    var input = document.getElementById('input_assunto')
    var assunto = input_assunto.value
    var span = document.getElementById('span_validar_assunto')

    if (assunto.length < 2) {
        span.style.color = 'red'
        input.style.borderColor = 'red'
        span.innerHTML = 'O assunto deve possuir pelo menos 3 caracteres'
        input.classList.add("shake");
    }
    else {
        span.innerHTML = ''
        span.style.color = "green";
        input.style.borderColor = "#d9d9d9";
        span.innerHTML = 'O assunto inserido é válido'
        input.classList.remove("shake");
    }
}

function validar_email_contato() {
    var input = document.getElementById('input_email')
    var email_contato = input_email.value
    var span = document.getElementById('span_validar_email_contato')

    if (email_contato.indexOf("@") == -1 || email_contato.indexOf(".") == -1 || email_contato.length < 5) {
        span.style.color = 'red'
        input.style.borderColor = 'red'
        span.innerHTML = 'O e-mail cadastrado é inválido.'
        input.classList.add("shake");
    }
    else {
        span.innerHTML = ''
        span.style.color = 'green';
        input.style.borderColor = "#d9d9d9";
        span.innerHTML = 'O email inserido é válido.'
        input.classList.remove("shake");
    }
}


function enviar() {

    var ctNome = input_nome.value;
    var ctAssunto = input_assunto.value;
    var ctEmail = input_email.value;
    var ctComunicado = input_comunicado.value;


    if (ctNome == "" || ctAssunto == "" || ctEmail == "" || ctComunicado == "") {
        //cardErro.style.display = "block"
        swal("Ops", "Preencha todos os campos", "error")
    }
    else if (ctNome.length < 3) {
        swal("Ops", "O nome inserido é muito curto. Por favor, insira um nome com pelo menos 3 caracteres", "warning")
    }
    else if (ctEmail.indexOf("gmail") == -1 && ctEmail.indexOf("@") == -1 && ctEmail.indexOf(".") == -1 && ctEmail.length < 10) {
        swal("Ops", "O e-mail cadastrado é inválido. Insira um e-mail válido", "warning")
    }
    else {
        swal("Sua mensagem foi enviada!", "Aguarde o contato de nossa equipe no email informado.", "success");
    }
}

var navbarHidden = false;
function hide_navbar() {
    var navbar = document.getElementById("navbar");
    var navWrapper = document.getElementById("navWrapper");
    var logo = document.getElementById("logo");
    var arrow = document.getElementById("arrow");

    if(window.scrollY != 0) {
        if(!navbarHidden) {
            navbar.style.transform = "translateY(-70%)";
            logo.style.opacity = 0;
            navWrapper.style.userSelect = "none";
            arrow.style.transform = "rotate(180deg)";
            navbarHidden = true;    
        } else {
            navbar.style.transform = "translateY(0%)";
            logo.style.opacity = 1;
            navWrapper.style.userSelect = "all";
            arrow.style.transform = "rotate(0deg)"
            navbarHidden = false;
        }
    }
}



var menuSwitch = document.getElementById("menuSwitch");
var nav = document.getElementById("navMobile");
var sectionsArray = document.getElementsByTagName("section");

menuSwitch.addEventListener("click", function(){
    if (nav.style.display === "flex") {
        nav.style.display = "none"
        menuSwitch.style.color = "#F05D5E"
        nav.classList.remove("requires-no-scroll")

        for(i = 0; i < sectionsArray.length; i++){
            sectionsArray[i].style.filter = "brightness(1)"
        }

    } else {
        nav.style.display = "flex"

        for(i = 0; i < sectionsArray.length; i++){
            sectionsArray[i].style.filter = "brightness(0.7)"
        }
        menuSwitch.style.color = "black"
        nav.classList.add("requires-no-scroll")
    }
});