import React, { useState, useEffect } from 'react'
import './App.css';
// Import des components
import Form from './components/Form'
import TodoList from './components/TodoList'

function App() {
  // States variable
  const [text, setText] = useState('')
  const [tasks, setTasks] = useState([])
  const [status, setStatus] = useState('all')
  const [filteredTasks, setFilteredTasks] = useState([])
  // Une seule fois quand l'app démarre
  useEffect(() => {
    const getLocal = () => {
      if (localStorage.getItem('tasks') === null) {
        localStorage.setItem('tasks', JSON.stringify([]))
      } else {
        let localData = JSON.parse(localStorage.getItem('tasks'))
        setTasks(localData)
      }
    }
    getLocal()
  }, [])
  // useEffect : attention plusieurs déclaration de fonctions à l'intérieur sinon WARNING
  useEffect(() => {
    const filterHandler = () => {
      switch (status) {
        case 'completed':
          setFilteredTasks(tasks.filter((task) => task.completed === true))
          break
        case 'uncompleted':
          setFilteredTasks(tasks.filter((task) => task.completed === false))
          break
        default:
          setFilteredTasks(tasks)
          break
      }
    }
    filterHandler()
    // save to local
    const saveLocal = () => {
      localStorage.setItem('tasks', JSON.stringify(tasks))
    }
    saveLocal()
  }, [tasks, status])

  return (
    <div className="App">
      <header>
        <h1>Voici une TODO liste dynamique</h1>
        <a href="https://www.youtube.com/watch?v=pCA4qpQDZD8">Made with this tutorial</a>
      </header>
      <Form
        tasks={tasks}
        setTasks={setTasks}
        text={text}
        setText={setText}
        status={status}
        setStatus={setStatus}
      />
      <TodoList
        filteredTasks={filteredTasks}
        tasks={tasks}
        setTasks={setTasks}
      />
    </div>
  );
}

export default App;