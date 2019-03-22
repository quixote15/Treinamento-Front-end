/*
As próximas variáveis representam conexões com elementos HTML já presentes no
projeto. O conteúdo desse código executa a função de adicionar e remover itens
de tarefas no bloco de "To Do" do projeto do Trello.
*/
var toDoListElement = document.querySelector(".to-do ul");
//conextada ao <ul> dentro do elemento com a classe .to-do
var inputToDoElement = document.querySelector(".to-do input");
//conextada ao <input> dentro do elemento com a classe .to-do
var buttonToDoElement = document.querySelector(".to-do button");
//conextada ao <button> dentro do elemento com a classe .to-do

var toDos = ["Aprender Framework", "Fazer café", "Iniciar projeto"];
/*
Array que nos permite guardar todas as strings que representam nossas tarefas.
Cada espaço do array é uma tarefa diferente.
*/

/*
A função a seguir representa o bloco de insruções para poder renderizar as
tarefas presentes no array toDos como elementos <li> da nossa lista. Além disso,
também é responsável por criar os elementos <a> e atribuir seus atributos, como
a operação de excluir um item da lista sempre que houver um clique no mesmo.
*/

function renderToDos() {
  toDoListElement.innerHTML = "";
  //Limpa o elemento HTML referente ao <ul>, para que o mesmo fique vazio.
  for (item of toDos) {
    /*
    Uma estrutura de repetição para percorrer o array toDos. A sintaxe
    'of' utilizada representa que cada 'item' representa o conteúdo de um
    espaço do nosso array. Sendo assim, na primeira execução do 'for', o 'item'
    terá valor 'Aprender Framework'.
    */
    var toDoElement = document.createElement("li");
    //Cria um elemento <li>
    var toDoText = document.createTextNode(item);
    //Transforma o 'item' do array em um nó que possa ser atribuído a um elemento.
    var linkElement = document.createElement("a");
    //Cria um elemento <a>
    var linkText = document.createTextNode("Excluir");
    //Cria um text node com o texto 'Excluir' para ser utilizado como o texto do link.

    linkElement.setAttribute("href", "#");
    /*
    Os atributos são as características de um elemento HTML. Estaremos setando
    o atributo 'href' do nosso elemento <a> criado como '#' (não aponta para 
    lugar nenhum).
    */
    linkElement.setAttribute("onclick", `removeToDo(${toDos.indexOf(item)})`);
    /*
    Adiciona o evento de, ao clicar no link, chamar a função de remover toDos
    na posição do 'item' em que o elemento <a> está ligado.
    */

    toDoElement.appendChild(toDoText);
    //Adiciona o texto ao conteúdo do <li>.
    linkElement.appendChild(linkText);
    //Adiciona o texto ao conteúdo do <a>.

    toDoListElement.appendChild(toDoElement);
    //Adiciona o elemento criado <li> à nossa <ul> do HTML.

    toDoListElement.appendChild(linkElement);
    //Adiciona o elemento <a> criado à nossa <ul> do HTML.
  }
}

renderToDos();
//Chama a função de renderizar a lista na página web.

/*
Criação da função de adicionar toDos
*/
function addToDo() {
  var toDoText = inputToDoElement.value;
  //Atribui à variável o texto que está inserido no nosso campo de texto.
  toDos.push(toDoText);
  //Adiciona o texto do <input> ao nosso array.
  inputToDoElement.value = "";
  /*
  Define o conteúdo da caixa de <input>  como vazio, para limpar a caixa quando
  adicionarmos o item
  */

  renderToDos();
  //Renderiza a lista para atualizar nossos elementos
}
/*
Função de remover itens da lista. Precisa receber a posição do item que será
excluído para poder funcionar.
*/
function removeToDo(pos) {
  toDos.splice(pos, 1);
  //Remove 1 elemento na posição 'pos',
  renderToDos();
  //Renderiza a lista para atualizar nossos elementos
}

buttonToDoElement.onclick = addToDo;
//Quando clicar no botão, chama a função addToDo
