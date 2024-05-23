import React, {ChangeEvent, useState} from 'react';

interface FormProps extends React.PropsWithChildren{
    onAddTask: React.MouseEventHandler;
}

const AddTaskForm: React.FC<FormProps> = ({onAddTask}) => {
    const [taskData, setTaskData] = useState('');

    const onFielChange = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setTaskData(value);
    }

    const onFormSubmit = (event:React.FormEvent) => {
        event.preventDefault();
        return taskData;
    }
    return (
        <form className="add-task-form" onSubmit={onFormSubmit}>
            <h6>Create Tasks</h6>
            <label>Add:
                <input placeholder="Add a task" type="text" onChange={onFielChange} />
            </label>
            <button type="submit" onClick={onAddTask}>Add</button>
        </form>
    );
};

export default AddTaskForm;