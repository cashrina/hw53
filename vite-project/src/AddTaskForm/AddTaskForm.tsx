import React from 'react';

interface FormProps extends React.PropsWithChildren{
    onAddTask: React.MouseEventHandler;
}

const AddTaskForm: React.FC<FormProps> = ({onAddTask}) => {

    const onFormSubmit = (event:React.FormEvent) => {
        event.preventDefault();
    }
    return (
        <form className="add-task-form" onSubmit={onFormSubmit}>
            <h6>Create Tasks</h6>
            <label>Add:
                <input placeholder="Add a task" type="text" />
            </label>
            <button type="submit" onClick={onAddTask}>Add</button>
        </form>
    );
};

export default AddTaskForm;