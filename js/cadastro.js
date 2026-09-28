/* funções -------------------------------------------------------------*/
function ativarCadastro(){
    const formulario=document.getElementById("formulario-cadastro");
    const confirmacao=document.getElementById("confirmacao");
    if(!formulario)return;

    const rascunho=JSON.parse(localStorage.getItem("rascunhoCadastro")||"{}");
    ["nome","cidade","estado"].forEach(function(id){
        const campo=document.getElementById(id);
        if(rascunho[id])campo.value=rascunho[id];
    });

    formulario.addEventListener("invalid",function(evento){
        const campo=evento.target;
        let mensagem=campo.parentElement.querySelector(".erro");
        if(!mensagem){
            mensagem=document.createElement("small");
            mensagem.className="erro";
            campo.insertAdjacentElement("afterend",mensagem);
        }
        mensagem.textContent=campo.validationMessage;
    },true);

    formulario.addEventListener("input",function(evento){
        const campo=evento.target;
        if(campo.validity.valid){
            campo.parentElement.querySelector(".erro")?.remove();
        }
        const dados={
            nome:document.getElementById("nome").value,
            cidade:document.getElementById("cidade").value,
            estado:document.getElementById("estado").value
        };
        localStorage.setItem("rascunhoCadastro",JSON.stringify(dados));
    });

    formulario.addEventListener("submit",function(evento){
        evento.preventDefault();
        confirmacao?.showModal();
    });
}
