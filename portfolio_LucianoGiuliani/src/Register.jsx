import {useState} from "react"

export default function Life () {
    const [data,setData] =  useState([])
    const add = () =>{
        let task = document.getElementById('task')
        let element = Object({
            id: data.length > 0 ? data[data.length -1].id + 1 : 1,
            title: task.value
        })
        setData([...data,element])
        task.value = null
    } 

    const remove = (id) => setData(data.filter(element =>  element.id != id ))

    return (
        <>
            <h1>Lista {data.length}!</h1>
            <ul>
                {
                    data.map((element) => (
                        <li key={element.id} onClick={() => remove(element.id)}>
                            {element.title}
                        </li> 
                    ))
                }
            </ul>
            <input type="text" id="task"/>
            <button onClick={add}>agregar</button>
        </>
    );
            }