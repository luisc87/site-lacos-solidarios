/* variáveis gerais ---------------------------------------------------------------*/
const area=document.querySelector("main");

async function abrirPagina(endereco,guardar=true){
    try{
        const resposta=await fetch(endereco);
        if(!resposta.ok)throw new Error("Página não encontrada");
        const texto=await resposta.text();
        const pagina=new DOMParser().parseFromString(texto,"text/html");
        area.innerHTML=pagina.querySelector("main").innerHTML;
        mostrarCampanhas();
        document.getElementById("confirmacao")?.remove();
        const modal=pagina.getElementById("confirmacao");
        if(modal)document.body.append(modal);
        document.title=pagina.title;
        if(guardar)history.pushState(null,"",endereco);
        ativarCadastro();
        window.scrollTo(0,0);
    }catch{
        location.href=endereco;
    }
}
/* eventos -------------------------------------------------------------------------------*/
document.addEventListener("click",function(evento){
    const link=evento.target.closest("a");
    if(!link||link.origin!==location.origin||!link.pathname.endsWith(".html"))return;
    evento.preventDefault();
    abrirPagina(link.href);
});
window.addEventListener("popstate",function(){
    abrirPagina(location.href,false);
});
ativarCadastro();