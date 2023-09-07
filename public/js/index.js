function enviar() {

   var ctNome = input_nome.value;
   var ctAssunto = input_assunto.value;
   var ctEmail = input_email.value;
   var ctComunicado = input_comunicado.value;


   if (ctNome == "" || ctAssunto == "" || ctEmail == "" || ctComunicado == "") {
       //cardErro.style.display = "block"
       swal("Ops", "Preencha todos os campos 😠", "error")
   }
   else if (ctNome.length < 3) {
       swal("Ops", "O nome inserido é muito curto. Por favor, insira um nome com pelo menos 3 caracteres 😠", "warning")
   }
   else if (ctEmail.indexOf("gmail") == -1 && ctEmail.indexOf("@") == -1 && ctEmail.indexOf(".com") == -1 && ctEmail.length < 10) {
       swal("Ops", "O e-mail cadastrado é inválido. insira um e-mail válido 😠", "warning")
   }
   else {
       swal("Parábens", "Mensagem enviada com sucesso, aguarde nosso contato 😄!", "success");

       setTimeout(() => {
           window.location = "index.html";
       }, 3000)
   }
}

window.onscroll = () => {
   var navbar = document.getElementById("navbar");
   var navLinkArray = document.getElementsByClassName("navLink");
   var logo = document.getElementById("logo");
   var navWrapper = document.getElementById("navWrapper");

   if(window.scrollY != 0) {
      navbar.classList.add("navbar-ativo");
      logo.src = "assets/img/Logos/nowlLogoPreta.svg";
      logo.style.width = "7.5rem";
      navWrapper.classList.add("navWrapperAtivo");
      for(var i = 0; i < navLinkArray.length; i++) {
         var link = navLinkArray[i];
         link.classList.add("navLinkAtivo");
      }
   } else {
      navbar.classList.remove("navbar-ativo");
      logo.src = "assets/img/Logos/nowLogo.svg";
      logo.style.width = "10rem";
      navWrapper.classList.remove("navWrapperAtivo");
      for(var i = 0; i < navLinkArray.length; i++) {
         var link = navLinkArray[i];
         link.classList.remove("navLinkAtivo");
      }
   }
}


function validar_nome() {
   var input = document.getElementById('input_nome')
   var nome = input_nome.value
   var span = document.getElementById('span_validar_nome')

   if (nome.length <3) {
       span.style.color = 'red'
       span.innerHTML = 'O nome inserio é inválido. Por favor, insira um nome válido.'
       span.style.marginTop = '-20px'
       span.style.fontFamily = 'Mulish'
       span.style.fontSize = '11px'
       input.style.borderColor = 'red'
       input.classList.add("shake");
   }
   else {
       span.innerHTML = ''
       span.style.fontFamily = 'Mulish'
       span.style.fontSize = '15px'
       input.style.borderColor = 'green'
       span.style.color = 'green'
       span.innerHTML = 'O nome está validado'
       input.classList.remove("shake");
   }
}
function validar_assunto() {
   var input = document.getElementById('input_assunto')
   var assunto = input_assunto.value
   var span = document.getElementById('span_validar_assunto')

   if (assunto.length <5) {
       span.style.color = 'red'
       span.innerHTML = 'O assunto é muito curta. Por favor, insira um assunto válido'
       span.style.fontFamily = 'Mulish'
       span.style.fontSize = '10px'
       input.style.borderColor = 'red'
       span.style.marginTop = '-20px'
       input.classList.add("shake");
   }
   else {
       span.innerHTML = ''
       span.style.color = 'green'
       span.style.fontFamily = 'Mulish'
       span.style.fontSize = '15px'
       input.style.borderColor = 'green'
       span.innerHTML = 'A assunto inserido é valido'
       input.classList.remove("shake");
   }
}

function validar_email_contato() {
   var input = document.getElementById('input_email')
   var email_contato = input_email.value
   var span = document.getElementById('span_validar_email_contato')

   if (email_contato.indexOf("@") == -1 || email_contato.indexOf(".com") == -1 || email_contato.length < 7) {
       span.style.color = 'red'
       span.innerHTML = 'O e-mail cadastrado é inválido. Por favor, insira um e-mail válido.'
       span.style.marginTop = '-20px'
       span.style.fontFamily = 'Mulish'
       span.style.fontSize = '11px'
       input.style.borderColor = 'red'
       input.classList.add("shake");
   }
   else {
       span.innerHTML = ''
       span.style.fontFamily = 'Mulish'
       span.style.fontSize = '15px'
       input.style.borderColor = 'green'
       span.style.color = 'green'
       span.innerHTML = 'O email está validado'
       input.classList.remove("shake");
   }
}


function validar_email() {
   var input = document.getElementById('email_input')
   var email = email_input.value
   var span = document.getElementById('span_validar_email')

   if (email.indexOf("@") == -1 || email.indexOf(".com") == -1 ||email.length < 7) {
      span.style.color = 'red'
       span.innerHTML = 'O e-mail cadastrado é inválido. Por favor, insira um e-mail válido.'
       span.style.marginTop = '-20px'
       span.style.fontFamily = 'Mulish'
       span.style.fontSize = '11px'
       input.style.borderColor = 'red'
       input.classList.add("shake");
   }
   else {
       span.innerHTML = ''
       span.style.fontFamily = 'Mulish'
       span.style.fontSize = '15px'
       input.style.borderColor = 'green'
       span.style.color = 'green'
       span.innerHTML = 'O email está validado'
       input.classList.remove("shake");
   }
}
function validar_senha() {
   var input = document.getElementById('senha_input')
   var senha = senha_input.value
   var span = document.getElementById('span_validar_senha')

   if (senha.length < 8) {
       span.style.color = 'red'
       span.innerHTML = 'A senha inserida é muito curta. Por favor, insira uma senha com pelo menos 8 caracteres'
       span.style.fontFamily = 'Mulish'
       span.style.fontSize = '10px'
       input.style.borderColor = 'red'
       span.style.marginTop = '-20px'
       input.classList.add("shake");
   }
   else {
       span.innerHTML = ''
       span.style.color = 'green'
       span.style.fontFamily = 'Mulish'
       span.style.fontSize = '15px'
       input.style.borderColor = 'green'
       span.innerHTML = 'A senha inserida está validada'
       input.classList.remove("shake");
   }
}
function logar() {
   //aguardar();

   var emailVar = email_input.value;
   var senhaVar = senha_input.value;

   if (emailVar == "" || senhaVar == "") {
       // cardErro.style.display = "block"
       swal("Ops", "Preencha os campos para logar!", "error")
       finalizarAguardar();
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
               finalizarAguardar(texto);
           });
       }

   }).catch(function (erro) {
       console.log(erro);
   })

   return false;
}


