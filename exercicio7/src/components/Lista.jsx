import { useState } from "react"


    const ListaTarefas = () =>{
        const [tarefas, setTarefas] = useState([
            {id:1, nome:"Lista3"},
            {id:2, nome:"Lista2"},
            {id:3, nome:"Lista1"}
        ])
    


const remover = (id) => {
    const novasTarefas = tarefas.filter(tarefas => tarefas.id !== id)
    setTarefas(novasTarefas)
}

return (
    <>
    <h1>Lista de Tarefas</h1>
    <ul>
        {tarefas.map(tarefas => (
            <li key={tarefas.id}>
                {tarefas.nome}
                <button onClick={() => remover(tarefas.id)}>Remover item</button>
            </li>
        ))}
    </ul>
    </>
)}
export default  ListaTarefas