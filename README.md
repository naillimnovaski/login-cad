# Sistema de Cadastro de Usuários

* [Sistema de Cadastro de Usuários](#sistema-de-cadastro-de-usuários)
* [Descrição](#descrição)
* [Introdução](#introdução)
* [Funcionalidades](#funcionalidades)
* [Tecnologias Utilizadas](#tecnologias-utilizadas)
* [Autores](#autores)

## Descrição 📖
Este projeto consiste na criação de um sistema de cadastro de usuários que permite a criação, edição e exclusão de nomes de usuários. Na versão mais recente, foi adicionado um campo para cadastro de e-mail com validação para garantir que o e-mail inserido siga o formato adequado, além de validações para garantir que todos os campos obrigatórios sejam preenchidos.

## Introdução ✉️
O projeto foi desenvolvido para praticar habilidades de desenvolvimento web, incluindo manipulação de DOM com JavaScript e validação de dados de entrada. A atualização recente inclui a adição de uma validação no campo de e-mail, aprimorando a integridade dos dados cadastrados pelos usuários. Além disso, o sistema agora conta com uma validação geral para garantir que todos os campos obrigatórios, como nome e e-mail, sejam preenchidos antes de permitir o cadastro.


<img src= "print 123.png">

## Funcionalidades 🧠

### Validação de Preenchimento
Essa funcionalidade verifica se os campos de e-mail e senha foram preenchidos antes de permitir o acesso ao sistema.

javascript
function acessar(){
     let loginEmail = document.getElementById('loginEmail').value;
     let loginSenha = document.getElementById('loginSenha').value;
     
     if(!loginEmail || !loginSenha){
       alert('favor preencher todos os campos');
    } else {
       window.location.href = 'cadastro.html';
     }
}


- *Explicação*:
  - A função acessar valida se os campos de e-mail (loginEmail) e senha (loginSenha) foram preenchidos.
  - Se algum campo estiver vazio, é exibido um alerta solicitando que o usuário preencha todos os campos.
  - Se ambos os campos estiverem preenchidos, o usuário é redirecionado para a página de cadastro.

### Criação e Armazenamento de Usuários
Essa funcionalidade permite salvar o nome do usuário em uma lista (array) e atualiza a tabela de exibição.

javascript
function salvarUser(){
  let nomeUser = document.getElementById('nomeUser').value;
  if(nomeUser){
      dadosLista.push(nomeUser);
      criaLista();
      document.getElementById('nomeUser').value = "";
  } else {
      alert("Favor, informar um nome para cadastro");
  }
}
var dadosLista =[];


- *Explicação*:
  - A função salvarUser obtém o valor do campo de nome (nomeUser).
  - Se o campo estiver preenchido, o nome é adicionado ao array dadosLista, e a função criaLista é chamada para atualizar a tabela.
  - Se o campo estiver vazio, é exibido um alerta solicitando o preenchimento do nome.

### Exibição da Lista de Usuários
Essa funcionalidade gera uma tabela com os nomes dos usuários armazenados.

javascript
function criaLista(){
  let tabela = document.getElementById('tabela').innerHTML = "<tr><th>Nome Usuário</th><th>Ações</th></tr>";
  for(let i=0; i<=(dadosLista.length - 1); i++){
      tabela += "<tr><td>" + dadosLista[i] + "</td><td><button type='button' onclick='editar(parentNode.parentNode.rowIndex)'>Editar</button><button type='button' onclick='excluir(parentNode.parentNode.rowIndex)'>Excluir</button></td></tr>";
      document.getElementById('tabela').innerHTML = tabela;
  }
}


- *Explicação*:
  - A função criaLista inicializa a tabela com cabeçalhos e percorre todos os elementos do array dadosLista.
  - Para cada nome na lista, uma linha é adicionada na tabela com o nome do usuário e botões para editar e excluir.

### Edição de Usuários
Essa funcionalidade permite ao usuário editar o nome de um usuário existente na lista.

javascript
function editar(i){
  document.getElementById('nomeUser').value = dadosLista[(i - 1)];
  dadosLista.splice(dadosLista[(i - 1)], 1);
}


- *Explicação*:
  - A função editar coloca o nome do usuário selecionado no campo de entrada para permitir a edição.
  - O nome antigo é removido da lista (dadosLista) para que o novo nome possa ser inserido.

### Exclusão de Usuários
Essa funcionalidade remove um usuário da lista e atualiza a tabela.

javascript
function excluir(i){
  dadosLista.splice((i - 1), 1);
  document.getElementById('tabela').deleteRow(i);
}


- *Explicação*:
  - A função excluir remove o nome do array dadosLista e a linha correspondente na tabela é deletada.

### Validação de E-mail
Essa funcionalidade valida se o e-mail inserido segue o formato correto antes de permitir o cadastro.

javascript
function validarEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return re.test(String(email).toLowerCase());
}


- *Explicação*:
  - A função validarEmail usa uma expressão regular para verificar se o e-mail segue o formato correto.
  - Se o e-mail não estiver no formato correto, o sistema impede o cadastro até que um e-mail válido seja inserido.

## Tecnologias Utilizadas 🖥️
- Visual Studio Code
- HTML5
- CSS3
- JavaScript
- Git
- GitHub

## Autores 👥
- [Naillim Novaski](https://github.com/naillimnovaski/login-cad)

