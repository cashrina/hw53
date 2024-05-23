import React from 'react';

interface FormProps extends React.PropsWithChildren{
    onAddTask: React.FormEventHandler<HTMLFormElement>;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
}

const AddTaskForm: React.FC<FormProps> = ({onAddTask, onChange}) => {

    return (
        <form className="add-task-form" onSubmit={onAddTask}>
            <h6>Create Tasks</h6>
            <label>Add:
                <input placeholder="Add a task" type="text" onChange={onChange} required/>
            </label>
            <button type="submit">Add</button>
        </form>
    );
};

export default AddTaskForm;