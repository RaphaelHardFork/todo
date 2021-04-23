import React from 'react'
import Todo from './Todo'


const TodoList = ({ filteredTasks, tasks, setTasks }) => {

  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filteredTasks.map((task) => (
          <Todo
            tasks={tasks}
            task={task}
            setTasks={setTasks}
            text={task.text}
            key={task.id}
            id={task.id}
          />
        ))}
      </ul>
    </div>
  )
}

export default TodoList