//VALIDACAO DE PREENCHIMENTO
function acessar(){
     let loginEmail = document.getElementById('loginEmail').value;
     let loginSenha = document.getElementById('loginSenha').value;
     
     if(!loginEmail || !loginSenha){
       alert('favor preencher todos os campos');
    }else{
       // alert('campos preenchidos cm sucesso');
       window.location.href = 'cadastro.html';
     }
     
}
// funçao de criacao de arrey para armazenamento de nomes
function salvarUser(){
  let nomeUser = document.getElementById('nomeUser').value;
  if(nomeUser){
      dadosLista.push(nomeUser);
      // console.log(dadosLista);
      criaLista();
      document.getElementById('nomeUser').value = "";
  } else{
      alert("Favor, informar um nome para cadastro");
  }
}
var dadosLista =[];

// FUNÇÃO PARA CRIAR LISTA DE USUÁRIOS
function criaLista(){
  let tabela = document.getElementById('tabela').innerHTML = "<tr><th>Nome Usuário</th><th>Ações</th></tr>";
  for(let i=0;i<=(dadosLista.length - 1);i++){
      tabela += "<tr><td>" + dadosLista[i] + "</td><td><button type='button' onclick='editar(parentNode.parentNode.rowIndex)'>Editar</button><button type='button' onclick='excluir(parentNode.parentNode.rowIndex)'>Excluir</button></td></tr>";
      document.getElementById('tabela').innerHTML = tabela;
  }
}

 // FUNÇÃO PARA EDITAR NOMES DE LISTA
function editar(i){
  document.getElementById('nomeUser').value = dadosLista[(i - 1)];
  dadosLista.splice(dadosLista[(i - 1)], 1);
}
// FUNÇÃO PARA EXCLUIR NOME DE LISTA
function excluir(i){
  dadosLista.splice((i - 1), 1);
  document.getElementById('tabela').deleteRow(i);
}