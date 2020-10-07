const inputTitulo = document.getElementById("titulo-post")
const inputAutor = document.getElementById("autor-post")
const inputImagem = document.getElementById("imagem-post")
const inputConteudo = document.getElementById("conteudo-post")
const containerBlog = document.getElementById("container-de-posts")
let arrayPost = []

const postBlog = {
    titulo: inputTitulo.value,
    autor: inputAutor.value,
    imagem: inputImagem.value,
    conteudo: inputConteudo.value
}

function adicionarPost(){
    postBlog.titulo = inputTitulo.value
    postBlog.autor = inputAutor.value
    postBlog.imagem = inputImagem.value
    postBlog.conteudo = inputConteudo.value
    
    arrayPost.push(postBlog.titulo, postBlog.autor, postBlog.conteudo)
    console.log(arrayPost)
    
    inputTitulo.value = ""
    inputAutor.value = ""
    inputConteudo.value = ""

    containerBlog.innerHTML += `<h2> ${postBlog.titulo} </h3> <h5> ${postBlog.autor} <p> ${postBlog.conteudo} </p> `

    if (postBlog.imagem.includes('.png') || postBlog.imagem.includes('.jpg')){
        containerBlog.innerHTML += `<img src=${postBlog.imagem}>`
    } else {
        alert('Link incorreto! Insira imagem válida')
    }
}

