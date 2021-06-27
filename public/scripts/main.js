import  Modal  from "./modal.js";
const modal = Modal();

//Pegando os botões com a classe check
const checkButtons = document.querySelectorAll(".actions a.check");
const deleteButtons = document.querySelectorAll(".actions a.delete");
const modalTitle = document.querySelector(".modal h2");
const modalDescription  = document.querySelector(".modal p");
const modalButton = document.querySelector(".modal button");

//Marcar como lida 
checkButtons.forEach( button => {
    button.addEventListener("click", handleClick);
});

//deletar
deleteButtons.forEach(button =>{
    button.addEventListener("click", (event) => handleClick(event, false));
});

function handleClick(event, check = true){
    // não tratar como um link propriamente dito
    event.preventDefault()
    //Operação ternaria(if else) passando o parametro logo de começo
    const text = check ? "Marcar como lida" : "Excluir";
   
    const roomId = document.querySelector("#room-id").dataset.id;
    const form = document.querySelector(".modal form");
    const slug = check ? "check" : "delete"; //se check for true check else delete 
    const questionId = event.target.dataset.id;
    // setAtribut("atributo que ira mudar", o que ira mudar em variaveis
    form.setAttribute("action", `/question/${roomId}/${questionId}/${slug}`);

    // para concotenar uma variavel com uma string comunmente se faz varivel + string, porem o jeito mais "correto" é usar ` ${variavel} string, logo após`
    modalTitle.innerHTML = `${text} esta pergunta`;
    modalDescription.innerHTML = `Tem certeza que você deseja mesmo ${text.toLowerCase()} está pergunta?`;
    modalButton.innerHTML = `Sim, ${text.toLowerCase()}`;
    check ? modalButton.classList.remove("red") : modalButton.classList.add("red");

    modal.open();
}