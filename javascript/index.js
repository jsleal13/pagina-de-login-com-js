var email = document.querySelector('#email');
var botaoLogin = document.querySelector('#botao-entrar');
var erro = document.querySelector('#mensagem-erro');
var icone = document.querySelector('.material-icons-outlined');

botaoLogin.addEventListener('click', function(event){
   event.preventDefault

   var verificarEmail = [
      email.value
   ];

   if (!verificarEmail.includes('@' || '.com')){
      email.classList.remove('input-padrao');
      email.classList.add('erro-email-input');
      erro.classList.remove('invisivel');
      icone.setAttribute('style', 'color: #FF5757');
   }
})

email.addEventListener('input', function(){

   if (this.value.length == 0) {
      this.classList.remove('erro-email-input');
      this.classList.add ('input-padrao');
      erro.classList.add ('invisivel');
      icone.removeAttribute('style');
   }
})

