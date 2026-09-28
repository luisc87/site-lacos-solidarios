/* variáveis ---------------------------------------------------------------------*/
const botaoMenu=document.getElementById("botao-menu");
const menu=document.getElementById("menu");

/* funções -----------------------------------------------------------------*/
botaoMenu.addEventListener("click",function(){
    const aberto=menu.classList.toggle("aberto");
    botaoMenu.setAttribute("aria-expanded",aberto);
});