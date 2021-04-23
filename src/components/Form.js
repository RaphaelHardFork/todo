import React from 'react'


const Form = ({ setText, text, setTasks, tasks, setStatus, status }) => {
  const handleTextInput = (e) => {
    setText(e.target.value)
  }
  const handleSubmitClick = (e) => {
    e.preventDefault()
    setTasks([...tasks, { text, completed: false, id: Math.floor(Math.random() * 1000) }])
    setText('')
  }
  const handleChangeStatus = (e) => {
    setStatus(e.target.value)
  }
  return (
    <form>
      <input value={text} onChange={handleTextInput} type="text" className="todo-input" />
      <button onClick={handleSubmitClick} type='submit' className="todo-button">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select value={status} onChange={handleChangeStatus} name="todos" id="todo" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  )
}

export default Form