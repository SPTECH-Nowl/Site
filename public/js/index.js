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