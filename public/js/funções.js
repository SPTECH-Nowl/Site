// sessão
function validarSessao() {
    // aguardar();

    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;

    var b_usuario = document.getElementById("usuario");

    if (email != null && nome != null) {
        
        b_usuario.innerHTML = nome;

      
    } else {
        window.location = "../login.html";
    }
}

function limparSessao() {

    sessionStorage.clear();

    window.location = "../login.html";
}


