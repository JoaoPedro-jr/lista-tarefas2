const tarefas = [
    ' funçoes',
    ' mat basica',   
    ' p enem'
]

function mostrarTarefas(ListaTarefas) {
    const ul = document.querySelector('#taskList')
    ul.innerHTML = ''
    ListaTarefas.forEach(tarefas=> {
        const li = `<li>${tarefas}</li>`
        ul.innerHTML += li
    }
    )
}
function filtrarTarefas() {
    const textoFiltrado = document.querySelector('#searchInput').value
    const tarefasFIltradas = tarefas.filter (tarefa => tarefa.includes (textoFiltrado))
    console.log(tarefasFIltradas)
}




mostrarTarefas(tarefas)

