import React from "react";
import Task from "./Task"


function TaskList({ removeTasks, filteredTasks}) {

  const displayedTasks = filteredTasks.map((task) => {
    return <Task removeTasks={removeTasks} category={task.category} text={task.text} key={task.text}/>
  })

 
  return (
    <div className="tasks">
      {displayedTasks}
    </div>
  );
}

export default TaskList;
