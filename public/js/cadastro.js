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
    
    if (codigo.length  < 5) {
        span.innerHTML = 'Códigos de intituição devem possuir pelo menos 5 caracteres.';
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
    var codigoVar = codigo_input.value;

    if (nomeVar ==""||emailVar == "" || senhaVar == ""||confirmar_senhaVar ==""|| codigoVar =="") {
      
        validar_nome_cadastro()
        validar_codigo()
        validar_conf_senha_cadastro()
        validar_email_cadastro()
        validar_senha_cadastro()


        return false;
} else {

        setInterval('...', 5000)
    }
    console.log("FORM NOME: ", nomeVar);
    console.log("FORM EMAIL: ", emailVar);
    console.log("FORM SENHA: ", senhaVar);
    console.log("FORM CODIGO: ", codigoVar);


    fetch("/usuarios/cadastrar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            nomeServer: nomeVar,
            emailServer: emailVar,
            senhaServer: senhaVar,
            codigoServer: codigoVar
        })
    }).then(function (resposta) {

        console.log("resposta: ", resposta);

        if (resposta.ok) {
           
            swal("Bom trabalho!", "Cadastro realizado com sucesso redirecionando a tela de login...!", "success");

            setTimeout(() => {
                window.location = "login.html";
            }, "2000")


            
        } else {
            swal("Ops", "Houve um erro ao fazer o cadastro", "error")
        }
    }).catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
        finalizarAguardar();
    });

    return false;



}
