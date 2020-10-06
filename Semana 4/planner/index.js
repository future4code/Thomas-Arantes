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
    
    if(tarefaUsuario.value !== ""){

        switch (diaDaSemana.value){
            case "domingo" :
                domingo.innerHTML += `<li>${tarefaUsuario.value}</li>`
                break
            case "segunda" :
                segundaFeira.innerHTML += `<li>${tarefaUsuario.value}</li>`
                break
            case "terca" :
                tercaFeira.innerHTML += `<li>${tarefaUsuario.value}</li>`
                break
            case "quarta" :
                quartaFeira.innerHTML += `<li>${tarefaUsuario.value}</li>`
                break
            case "quinta" :
                quintaFeira.innerHTML += `<li>${tarefaUsuario.value}</li>`
                break
            case "sexta" :
                sextaFeira.innerHTML += `<li>${tarefaUsuario.value}</li>`
                break
            case "sabado" :
                sabado.innerHTML += `<li>${tarefaUsuario.value}</li>`
                break
        }
    }
    tarefaUsuario.value = ""
    

}