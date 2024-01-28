import React, { useState } from 'react'

export const SpotCheck = ({}) => {
    const [tasks, setTasks]=useState([
          { text: "Take out trash", complete: false },
          { text: "Trash talk Carrie", complete: true },
          { text: "Carry boxes upstairs", complete: false }
        ]
      )
    const completeFunc = function(text){
        const newTasks = tasks.map((task) => {
            if (task.text === text) {
              return { ...task, complete: true };
            }
            return task;
          });
          setTasks(newTasks);
    }
  return (
    <Tasks tasks={tasks} completeF={completeFunc}></Tasks>
  )
}

function Tasks({tasks, completeF}) {
  return (
    <div>
        {tasks.filter(t=> t.complete===false).map(t=> <Task task={t} completeF={completeF}></Task>)}
    </div>
  )
}

function Task({task, completeF}){
    return(
        <div>
            <p>{task.text}</p>
            <button onClick={()=>completeF(task.text)}>complete</button>

        </div>
    )
}


