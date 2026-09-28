const campanhas=[
    {
        id:"alimentos",
        titulo:"Campanha de alimentos",
        texto:"Arrecadamos alimentos não perecíveis e organizamos cestas para famílias em situação de vulnerabilidade.",
        etiqueta:"Alimentos"
    },
    {
        id:"roupas",
        titulo:"Campanha de roupas",
        texto:"Recebemos roupas em bom estado e encaminhamos as peças às pessoas atendidas pela ONG.",
        etiqueta:"Roupas"
    }
];

function mostrarCampanhas(){
    const lista=document.getElementById("lista-campanhas");
    if(!lista)return;
    lista.innerHTML="";
    campanhas.forEach(function(campanha){
        const bloco=document.createElement("article");
        bloco.id=campanha.id;
        bloco.innerHTML=`<h3>${campanha.titulo}</h3><span class="etiqueta">${campanha.etiqueta}</span><p>${campanha.texto}</p>`;
        lista.append(bloco);
    });
}
mostrarCampanhas();