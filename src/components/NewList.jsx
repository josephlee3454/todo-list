import React, {useState} from 'react'


const NewList = ({createTodo}) => {
    
    const [todoText, setTodoText] = useState("")
    const submitTodo = (event) => {
        event.preventDefault();

        createTodo({
            'body': todoText,
            'completed': false
        });


    }
    return (
        <div>
            {todoText}
            <h3>Type a Task to complete</h3>
            <form onSubmit={submitTodo} >
                Task: <input type="text" value={todoText} onChange={e=>setTodoText(e.target.value)} />
                <input type="submit" value="create a new todo"/>
            </form>
        </div>
    )
}

export default NewList