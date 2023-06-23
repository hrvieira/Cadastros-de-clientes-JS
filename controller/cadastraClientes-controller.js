import { clienteService } from "../service/cliente-service.js";

const formulario = document.querySelector('[data-form]')

// quando há um evento, o async entra após a ação e deixa async o que evento vai fazer
addEventListener('submit', async (evento) => {
  evento.preventDefault();
  try {
    const nome = evento.target.querySelector('[data-nome]').value;
    const email = evento.target.querySelector('[data-email]').value;
  
    await clienteService.criaCliente(nome, email)
    window.location.href = '../telas/cadastro_concluido.html'
  }
  catch(erro){
    console.log(erro)
    window.location.href = '../telas/erro.html'
  }
})