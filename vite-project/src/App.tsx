import './App.css'
import React, {useState} from "react";
import AddTaskForm from "./AddTaskForm/AddTaskForm.tsx";
import Task from "./Task/Task.tsx";


const App = () => {
    const [tasks, setTasks] = useState([
        {task: 'By milk', id:'q1'},
        {task: 'Walk with dog', id:'w2'},
        {task: 'Do homework', id:'e3'}
    ]);
    const [taskData, setTaskData] = useState('');

    const onFieldChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setTaskData(value);
    };

    const getRandom = () => {
       const id = Math.random() * 1000000;
        return String(id);
    };

    const addTask = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const newTaskData = {
            task: taskData,
            id: getRandom(),
        };
        setTasks(prevTasks => [...prevTasks, newTaskData]);
        setTaskData('');
        const form = event.target as HTMLFormElement;
        form.reset();
    };

    const removeTask = (id:string) => {
        setTasks((prevState) => {
            const tasksCopy = [...prevState];
            const index = tasksCopy.findIndex((item) => item.id === id);
            tasksCopy.splice(index, 1);
            return tasksCopy
        });
    };

    return (
        <>
            <div>
                <AddTaskForm onAddTask={(event) => {addTask(event)}}
                onChange={(event) => onFieldChange(event)}/>
            </div>
            {tasks.map(item => (
                <Task
                    task={item.task}
                    key={item.id}
                    onRemove={() => removeTask(item.id)}
                />
            ))}
        </>
    )
};

export default App
