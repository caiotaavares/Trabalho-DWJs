// --- extrair as informções dos input's --- //


function enviaPub() {
    let tituloValor = document.querySelector("#insertTitle").value;
    
    let nomeValor = document.querySelector("#nome-autor").value;
    
    let anoValor = document.querySelector("#ano-pub").value;
    
    let resValor = document.querySelector("#description").value;
    
    let linkValor = document.querySelector("#link-input").value;
    
    //------- cria objeto -------//
    
    const pub = {
        title: nomeValor,
        resumo: resValor,
        sobreArtigo: {
            autor: nomeValor,
            publicacao: anoValor,
            link: linkValor
        }
    }
    
    let conteudo = JSON.parse(sessionStorage.getItem("dados_publicacao"));
   conteudo.push(pub);
   console.log(conteudo);
   sessionStorage.setItem("dados_publicacao", JSON.stringify(conteudo));
}

document.getElementById("pub-button").addEventListener("click", enviaPub);


//---- Formulário para portifólios ---- //
// --- extrair as informções dos input's --- //


function enviaPort() {
    let tituloValor = document.querySelector("#titlePort").value;
    
    let imgValor = document.querySelector("#url-input").value;
    
    let resValor = document.querySelector("#descriPort").value;
    
    
    
    //------- cria objeto -------//
    
    const port = {
        title: tituloValor,
        resumo: resValor,
        sobreArtigo: imgValor
    }
    
    let conteudo = JSON.parse(sessionStorage.getItem("dados_portifolio"));
    conteudo.push(port);
    console.log(conteudo);
    sessionStorage.setItem("dados_portifolio", JSON.stringify(conteudo));
}

 document.getElementById("port-button").addEventListener("click", enviaPort);

function enviaProj() {
    let tituloValor = document.querySelector("#titleProj").value;
    
    let imgValor = document.querySelector("#url-input-proj").value;
    
    let resValor = document.querySelector("#descriProj").value;
    
    
    
    //------- cria objeto -------//
    
    const proj = {
        title: tituloValor,
        resumo: resValor,
        sobreArtigo: imgValor
    }
    
    let conteudo = JSON.parse(sessionStorage.getItem("dados_projeto"));
    console.log(conteudo);
    conteudo.push(proj);
    console.log(conteudo);
    sessionStorage.setItem("dados_projeto", JSON.stringify(conteudo));
}
