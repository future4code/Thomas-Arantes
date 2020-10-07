const inputTitulo = document.getElementById("titulo-post")
const inputAutor = document.getElementById("autor-post")
const inputConteudo = document.getElementById("conteudo-post")
const containerBlog = document.getElementById("container-de-posts")
let arrayPost = []

const postBlog = {
    titulo: inputTitulo.value,
    autor: inputAutor.value,
    conteudo: inputConteudo.value
}

function adicionarPost(){
    postBlog.titulo = inputTitulo.value
    postBlog.autor = inputAutor.value
    postBlog.conteudo = inputConteudo.value
    
    arrayPost.push(postBlog.titulo, postBlog.autor, postBlog.conteudo)
    console.log(arrayPost)
    
    inputTitulo.value = ""
    inputAutor.value = ""
    inputConteudo.value = ""

    containerBlog.innerHTML += `<h2> ${postBlog.titulo} </h3> <h5> ${postBlog.autor} <p> ${postBlog.conteudo} </p> `
}

