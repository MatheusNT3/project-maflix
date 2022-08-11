function adicionarFilme() {
    var filmeAssistir = document.getElementById("filme").value;
    if (filmeAssistir.endsWith(".jpg")) {
        listarFilmesNaTela(filmeAssistir);
    } else {
        console.error("Invalid movie address")
    }
    document.getElementById("filme").value = "";
}

function listarFilmesNaTela(filme) {
    var elementoFilmeAssistir = "<img src=" + filme + ">";
    var elementoListaFilmes = document.getElementById("listaFilmes");
    elementoListaFilmes.innerHTML =
        elementoListaFilmes.innerHTML + elementoFilmeAssistir;
}