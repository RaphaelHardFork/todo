import React from 'react'

const Todo = ({ id, text, setTasks, tasks, task }) => {
  const handleRemoveButton = () => {
    setTasks(tasks.filter((elem) => elem.id !== task.id
    ))
  }
  const handleCompleteButton = () => {
    setTasks(tasks.map((elem) => {
      if (elem.id === task.id) {
        return { ...elem, completed: !elem.completed }
      }
      return elem
    }))

  }
  return (
    <div className="todo">
      <li className={`todo-item ${task.completed ? 'completed' : ''}`}>{text}</li>
      <button onClick={handleCompleteButton} className="complete-btn">
        <i className="fas fa-check" />
      </button>
      <button onClick={handleRemoveButton} className="trash-btn">
        <i className="fas fa-trash" />
      </button>
    </div>
  )
}

export default Todo