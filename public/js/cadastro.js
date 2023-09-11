function validar_nome_cadastro() {
    var input = document.getElementById('nome_input_cadastro');
    var nome = nome_input_cadastro.value;
    var span = document.getElementById('span_validar_nome');
    var icon = document.getElementById('icon_nome_input');
    
    if (nome.length < 3) {
        span.innerHTML = 'Insira um nome com pelo menos 3 caracteres.';
        span.classList.remove("valid");
        span.classList.add("not-valid");
        input.classList.add("shake");
        icon.src = "./assets/img/Icone/Não Verificado.svg";

    } else {
        span.classList.remove("not-valid");
        span.classList.add("valid");
        span.innerHTML = 'nome válido'
        input.classList.remove("shake");
        icon.src = "./assets/img/Icone/Verificado.svg";

    }
}




function validar_email_cadastro() {
    var input = document.getElementById('email_input_cadastro');
    var email = email_input_cadastro.value;
    var span = document.getElementById('span_validar_email_cadastro');
    var icon = document.getElementById('icon_email_input');

    if (email.indexOf("@") == -1 || email.indexOf(".") == -1 || email.length < 7) {
        span.innerHTML = 'Insira um e-mail válido.';
        span.classList.remove("valid");
        span.classList.add("not-valid");
        input.classList.add("shake");
        icon.src = "./assets/img/Icone/Não Verificado.svg";

    } else {
        span.innerHTML = 'O email é valido.';
        span.classList.remove("not-valid");
        span.classList.add("valid");
        input.classList.remove("shake");
        icon.src = "./assets/img/Icone/Verificado.svg";

    }
}

function validar_senha_cadastro() {
    var input = document.getElementById('senha_input_cadastro');
    var senha = senha_input_cadastro.value
    var span = document.getElementById('span_senha_cadastro');

    var icon = document.getElementById('icon_senha_input');
    
    if (senha.length < 8) {
        span.innerHTML = 'Insira uma senha com pelo menos 8 caracteres';
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

function validar_conf_senha_cadastro() {
    var input = document.getElementById('conf_senha_input');
    var senha = senha_input_cadastro.value
    var conf_senha = conf_senha_input.value
    var span = document.getElementById('span_validar_conf_senha');
    var icon = document.getElementById('icon_confirmar_senha_input');
    
    if (conf_senha != senha) {
        span.innerHTML = 'Senhas não coincidem.'
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

function validar_codigo() {
    var input = document.getElementById('codigo_input');
    var codigo = codigo_input.value
    var span = document.getElementById('span_validar_codigo');
    var icon = document.getElementById('icon_codigo_input');
    
    if (codigo.length  != 6) {
        span.innerHTML = 'Códigos de intituição devem possuir pelo menos 6 caracteres.';
        span.classList.remove("valid");
        span.classList.add("not-valid");
        input.classList.add("shake");
        icon.src = "./assets/img/Icone/Não Verificado.svg";

    } else {
        span.classList.remove("not-valid");
        span.classList.add("valid");
        span.innerHTML = 'Código válido'
        input.classList.remove("shake");
        icon.src = "./assets/img/Icone/Verificado.svg";

    }
}











function cadastrar() {
    var nomeVar = nome_input_cadastro.value;
    var emailVar = email_input_cadastro.value;
    var senhaVar = senha_input_cadastro.value;
    var confirmar_senhaVar = conf_senha_input.value;
    var codigo = codigo_input.value;

    if (nomeVar ==""||emailVar == "" || senhaVar == ""||confirmar_senhaVar ==""|| codigo =="") {
        // cardErro.style.display = "block"
        swal("Ops", "Preencha os campos para logar!", "error")
        //    finalizarAguardar();
        finalizarAguardar();
        return false;
}
else if (nomeVar.length < 3) {
    swal("Ops", "O nome inserido é muito curto. Insira um nome com pelo menos 3 caracteres", "warning")
}
else if (emailVar.indexOf("@") == -1 || emailVar.indexOf(".com") == -1 || emailVar.length < 7) {
    swal("Ops", "O e-mail cadastrado é inválido. Insira um e-mail válido.", "warning")
}
else if (senhaVar.length < 8) {
    swal("Ops", "A senha inserida é muito curta. Isira uma senha com pelo menos 8 caracteres.", "warning")
}
else if (confirmar_senhaVar != senhaVar) {
    swal("Ops", "As senhas não coincidem", "warning")
}
else if (codigo == 5) {
    swal("Ops", "Codigo inválido, apenas 5 caracteres.", "warning")
}
else {

        setInterval('...', 5000)
    }
    console.log("FORM NOME: ", nomeVar);
    console.log("FORM EMAIL: ", emailVar);
    console.log("FORM SENHA: ", senhaVar);
    console.log("FORM CONFIRMAR-SENHA: ", confirmar_senhaVarVar);
    console.log("FORM CODIGO: ", codigoVar);

    fetch("/usuarios/autenticar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            nomeServer: nomeVar,
            emailServer: emailVar,
            senhaServer: senhaVar,
            confirmar_senhaServer: confirmar_senhaVarVar,
            codigoServer: codigoVar
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


