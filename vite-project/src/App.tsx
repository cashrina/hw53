import AddTaskForm from "./AddTaskForm/AddTaskForm.tsx";
import './App.css'
import {useState} from "react";
import Task from "./Task/Task.tsx";

const App = () => {
    const [tasks, setTasks] = useState([
        {task: 'By milk', id:'q1'},
        {task: 'Walk with dog', id:'w2'},
        {task: 'Do homework', id:'e3'}
    ]);

    const addTask = () => {
        console.log('add task');

    };

    return (
        <>
            <div>
                <AddTaskForm onAddTask={addTask}/>
            </div>
            {tasks.map(item => (
                <Task
                    task={item.task}
                    key={item.id}
                />
            ))}
        </>
    )
};

export default App
