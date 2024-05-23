import React from "react";

interface TaskProps{
    task: string;
}
const Task: React.FC<TaskProps> = ({task}) => {
    return (
        <div className="tasks">
            <p>{task}</p>
            <button>Delete</button>
        </div>
    );
};

export default Task;