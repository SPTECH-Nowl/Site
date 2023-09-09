



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


function logar() {
    var emailVar = email_input.value;
    var senhaVar = senha_input.value;

    if (emailVar == "" || senhaVar == "") {
        // cardErro.style.display = "block"
        swal("Ops", "Preencha os campos para logar!", "error")
        //    finalizarAguardar();
        return false;
    }
    else {
        setInterval('...', 5000)
    }

    console.log("FORM LOGIN: ", emailVar);
    console.log("FORM SENHA: ", senhaVar);

    fetch("/usuarios/autenticar", {
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
            console.log("Os dados é " + resposta);

            resposta.json().then(json => {
                console.log(json);
                console.log(JSON.stringify(json));

                sessionStorage.EMAIL_USUARIO = json.email;
                sessionStorage.NOME_USUARIO = json.nome;
                sessionStorage.ID_USUARIO = json.id;

                setTimeout(function () {
                    window.location = "index.html";
                }, 1000);

            });

        } else {

            swal("Ops", "Email e/ou senha inválido(s)", "error")

            resposta.text().then(texto => {
                console.error(texto);
                //    finalizarAguardar(texto);
            });
        }

    }).catch(function (erro) {
        console.log(erro);
    })

    return false;
}



