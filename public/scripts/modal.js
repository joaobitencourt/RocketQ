export default function Modal(){

    const modalwrapper = document.querySelector(".modal-wrapper");

    const cancelbutton = document.querySelector(".button.cancel")

    //fechando a modal
    cancelbutton.addEventListener("click", close);
    function open(){
        modalwrapper.classList.add("active");
    }

    function close(){
        modalwrapper.classList.remove("active");
    }

    return{
        open, 
        close
    }
}