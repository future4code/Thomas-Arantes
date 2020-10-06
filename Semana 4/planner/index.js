function adicionarTarefa(){
    
    const tarefaUsuario = document.getElementById ("tarefa")
    const diaDaSemana = document.getElementById ("dias-semana")
    const domingo = document.getElementById("domingo")
    const segundaFeira = document.getElementById("segunda")
    const tercaFeira = document.getElementById("terca")
    const quartaFeira = document.getElementById("quarta")
    const quintaFeira = document.getElementById("quinta")
    const sextaFeira = document.getElementById("sexta")
    const sabado = document.getElementById("sabado")
    
    if(diaDaSemana.value === "domingo"){
        domingo.innerHTML += `<li>${tarefaUsuario.value}</li>`
    }
    else if(diaDaSemana.value === "segunda"){
        segundaFeira.innerHTML += `<li>${tarefaUsuario.value}</li>`
    }
    else if(diaDaSemana.value === "terca"){
        tercaFeira.innerHTML += `<li>${tarefaUsuario.value}</li>`
    }
    else if(diaDaSemana.value === "quarta"){
        quartaFeira.innerHTML += `<li>${tarefaUsuario.value}</li>`
    }
    else if(diaDaSemana.value === "quinta"){
        quintaFeira.innerHTML += `<li>${tarefaUsuario.value}</li>`
    }
    else if(diaDaSemana.value === "sexta"){
        sextaFeira.innerHTML += `<li>${tarefaUsuario.value}</li>`
    }
    else{
        sabado.innerHTML += `<li>${tarefaUsuario.value}</li>`
    }

    tarefaUsuario.value = ""
    

}