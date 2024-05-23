import React from "react";

interface TaskProps{
    task: string;
    onRemove: React.MouseEventHandler;
}
const Task: React.FC<TaskProps> = ({task,onRemove}) => {
    return (
        <div className="tasks">
            <p>{task}</p>
            <button onClick={onRemove}>Delete</button>
        </div>
    );
};

export default Task;