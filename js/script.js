function voltar() {
    window.history.back();
}

function handleFormSubmit(event) {
    event.preventDefault();
    console.log(campos);
};

document.addEventListener("DOMContentLoaded", function () {

// Functions
function clear() {
    let mainC = document.querySelector("main");
    mainC.innerText = "";
}
    
    

console.log('loading file');
// console.log(publicacao);


if( sessionStorage.getItem('dados_projeto') == null ) {
    sessionStorage.setItem("dados_projeto", JSON.stringify(projeto));
}

if( sessionStorage.getItem('dados_publicacao') == null ) {
    sessionStorage.setItem("dados_publicacao", JSON.stringify(publicacao));
}


if( sessionStorage.getItem('dados_portifolio') == null ) {
    sessionStorage.setItem("dados_portifolio", JSON.stringify(portifolio));
}



postAbout();

//------ Requisição para about.json -------//
function postAbout() {
    clear();
    console.log(2);

    fetch(
        "/about.json"
    ).then(response =>{
        return response.json();
    }).then(data => {
        const main = document.querySelector("main");
        
        const h2 = document.createElement("h2");
        h2.setAttribute('class','AboutTitle');
        h2.innerHTML = data.title;
        main.appendChild(h2);
        
        const p = document.createElement("p");
        p.setAttribute('class','AboutResumo');
        p.innerHTML = data.resumo;
        main.appendChild(p);
    });
}

//------ Associar evento de click a função ------//
document.getElementById("about-pub").addEventListener("click", postAbout);

//----- Conteúdo para Publicações -----//
function postPublic() {
    // Apagar o conteúdo anterior
    clear();

        let data = JSON.parse(sessionStorage.getItem("dados_publicacao"));
        console.log(data);
        const main = document.querySelector("main");

        data.forEach((item) =>{
            const h2 = document.createElement("h2");
            h2.setAttribute('class','publicTitle');
            h2.innerHTML = item.title;
            h2.style.marginTop = "30px";
            main.appendChild(h2)
            
            const pRes = document.createElement("p");
            pRes.setAttribute('class','publicRes');
            pRes.innerHTML = item.resumo;
            main.appendChild(pRes);

            const pAuthor = document.createElement("P");
            pAuthor.setAttribute('class','publicAuthor');
            pAuthor.innerHTML = item.sobreArtigo.autor;
            main.appendChild(pAuthor);

            const pPubli = document.createElement("p");
            pPubli.setAttribute('class','publicPubli');
            pPubli.innerHTML = item.sobreArtigo.publicacao;
            main.appendChild(pPubli);

            const aLink = document.createElement("a");
            aLink.setAttribute("href", item.sobreArtigo.link);
            aLink.setAttribute('class','publicLink');
            aLink.innerHTML = item.sobreArtigo.link;
            main.appendChild(aLink);
        })
}


document.getElementById("pub-get").addEventListener("click", postPublic);
/*pega o id adciona o listener a dar inicio a equisição */


//------ portifolio ------//
function criaPortifolio() {
    // Apagar o conteúdo anterior
    clear();

        let data = JSON.parse(sessionStorage.getItem("dados_portifolio"));
        console.log(data);
        const main = document.querySelector("main");

        data.forEach((item) =>{
            const h2 = document.createElement("h2");
            h2.setAttribute('class', 'ppTitle');
            h2.innerHTML = item.title;
            main.appendChild(h2)
            
            const divi = document.createElement("div");
            divi.setAttribute('class', 'imgText');

            const img = document.createElement("img");
            img.setAttribute("src", item.img);
            img.setAttribute('class', 'ppImg');
            img.style.width = "300px";
            img.style.height = "200px";
            divi.appendChild(img);

            const pRes = document.createElement("p");
            pRes.setAttribute('class', 'ppRes');
            pRes.innerHTML = item.resumo;
            pRes.style.marginBottom = "40px";
            divi.appendChild(pRes);
            
            main.appendChild(divi);
        })
}
document.getElementById("pub-port").addEventListener('click', criaPortifolio);


//------  Projetos -------//

function postProjetos() {
    // Apagar o conteúdo anterior
    clear();

        let data = JSON.parse(sessionStorage.getItem("dados_projeto"));
        console.log(data);
        const main = document.querySelector("main");

        data.forEach((item) =>{
            const h2 = document.createElement("h2");
            h2.setAttribute('class', 'ppTitle');
            h2.innerHTML = item.title;
            main.appendChild(h2)
            
            const divi = document.createElement("div");
            divi.setAttribute('class', 'imgText');

            const img = document.createElement("img");
            img.setAttribute("src", item.img);
            img.setAttribute('class', 'ppImg');
            img.style.width = "300px";
            img.style.height = "200px";
            divi.appendChild(img);

            const pRes = document.createElement("p");
            pRes.setAttribute('class', 'ppRes');
            pRes.innerHTML = item.resumo;
            pRes.style.marginBottom = "40px";
            divi.appendChild(pRes);
            
            main.appendChild(divi);
        })
}

document.getElementById("pub-project").addEventListener('click', postProjetos);


//evento click para pegar o arquivo pdf e adicionar estilos na sua exibição //
function publicaCv () {
    clear();
    
    const main = document.querySelector("main");

    let iframe = document.createElement("iframe");
    iframe.setAttribute("src", "./pdfdocs/curriculo_ellen_satti.pdf");
    iframe.style.width = "100%";
    iframe.style.height = "500px";
    main.appendChild(iframe);

}

document.getElementById("cv-post").addEventListener("click", publicaCv);

});







