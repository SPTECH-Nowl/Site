
var status = 1;
function senha(){
	if(status > 0){
      document.getElementById('senha_input').type='password';
      document.getElementById("olho_login").classList.remove("icon_hide")
      document.getElementById("olho_login").classList.add("icon")
      status = 0;
    }else{
    document.getElementById('senha_input').type='text';
    document.getElementById("olho_login").classList.remove("icon")
      document.getElementById("olho_login").classList.add("icon_hide")
      status = 1;
    
    }
     
}

var status_senha = 1;
function senha_cadastro(){

	if(status > 0){
      document.getElementById('senha_input_cadastro').type='password';
      document.getElementById("olho").classList.remove("icon_senha_desativado")
      document.getElementById("olho").classList.add("icon_senha")
      status = 0;
    }else{
    document.getElementById('senha_input_cadastro').type='text';
    document.getElementById("olho").classList.remove("icon_senha")
    document.getElementById("olho").classList.add("icon_senha_desativado")
      status = 1;
    
    }
     
}


var status_confirmar_senha = 1;
function confirmar_senha_cadastro(){

	if(status > 0){
      document.getElementById('conf_senha_input').type='password';
      document.getElementById("olho_confirmar").classList.remove("icon_confirmar_desativado")
      document.getElementById("olho_confirmar").classList.add("icon_confirmar")
      status = 0;
    }else{
    document.getElementById('conf_senha_input').type='text';
    document.getElementById("olho_confirmar").classList.remove("icon_confirmar")
    document.getElementById("olho_confirmar").classList.add("icon_confirmar_desativado")
      status = 1;
    
    }
     
}




function validar_email() {
    var input = document.getElementById('email_input');
    var email = email_input.value;
    var span = document.getElementById('span_validar_email');
    var icon = document.getElementById('icon_email_input');

    if (email.indexOf("@") == -1 || email.indexOf(".") == -1 || email.length < 7) {
        span.innerHTML = 'Por favor, insira um e-mail válido.';
        span.classList.remove("valid");
        span.classList.add("not-valid");
        input.classList.add("shake");
        icon.src = "./assets/img/Icone/Não Verificado.svg";

    } else {
        span.classList.remove("not-valid");
        span.innerHTML = "";
        span.classList.add("valid");
        input.classList.remove("shake");
        icon.src = "./assets/img/Icone/Verificado.svg";

    }
}

function validar_senha() {
    var input = document.getElementById('senha_input');
    var senha = senha_input.value
    var span = document.getElementById('span_validar_senha');
    var icon = document.getElementById('icon_senha_input');

    if (senha.length < 8) {
        span.innerHTML = 'Por favor, insira uma senha com pelo menos 8 caracteres';
        span.classList.remove("valid");
        span.classList.add("not-valid");
        input.classList.add("shake");
        icon.src = "./assets/img/Icone/Não Verificado.svg";

    } else {
        span.classList.remove("not-valid");
        span.classList.add("valid");
        span.innerHTML = 'Senha válida'
        input.classList.remove("shake");
        icon.src = "./assets/img/Icone/Verificado.svg";

    }
}


function entrar() {


    var emailVar = email_input.value;
    var senhaVar = senha_input.value;

    if (emailVar == "" || senhaVar == "") {
        // cardErro.style.display = "block"
        swal("Ops", "Preencha os campos para logar 😠!", "error")
        finalizarAguardar();
        return false;
    }
    else {
        swal("Parábens", "Login realizado!!, redirecionando para dashboard", "success");
        setInterval('...', 2000)


        console.log("FORM LOGIN: ", emailVar);
        console.log("FORM SENHA: ", senhaVar);

        fetch("/usuarios/entrar", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                emailServer: emailVar,
                senhaServer: senhaVar
            })
        }).then(function (resposta) {
            console.log("ESTOU NO THEN DO entrar()!")

            if (resposta.ok) {
                console.log(resposta);

                resposta.json().then(json => {
                    console.log(json);
                    console.log(JSON.stringify(json));

                    sessionStorage.EMAIL_USUARIO = json.email;
                    sessionStorage.NOME_USUARIO = json.nome;
                    sessionStorage.ID_USUARIO = json.idUsuario;

                    setTimeout(function () {
                        window.location = "dashboard.html";
                    }, 3000); 

                });

            } else {

                swal("Ops", "Email e/ou senha inválido(s)", "error")

                resposta.text().then(texto => {
                });
            }

        }).catch(function (erro) {
            console.log(erro);
        })

        return false;
    }
}
    
