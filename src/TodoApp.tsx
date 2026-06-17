import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import './TodoApp.css'

interface Task {
  id: number
  text: string
  completed: boolean
  removing: boolean
  clearDelay?: number
}

export default function TodoApp() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [input, setInput] = useState('')
  const nextId = useRef<number>(1)

  function addTask() {
    const text = input.trim()
    if (!text) return
    setTasks(prev => [
      ...prev,
      { id: nextId.current++, text, completed: false, removing: false },
    ])
    setInput('')
  }

  function removeTask(id: number) {
    setTasks(prev => prev.map(t => t.id === id ? { ...t, removing: true } : t))
    setTimeout(() => setTasks(prev => prev.filter(t => t.id !== id)), 320)
  }

  function toggleTask(id: number) {
    setTasks(prev =>
      prev.map(t => t.id === id ? { ...t, completed: !t.completed } : t)
    )
  }

  function clearAll() {
    if (tasks.length === 0) return
    setTasks(prev =>
      prev.map((t, i) => ({ ...t, removing: true, clearDelay: i * 55 }))
    )
    setTimeout(() => setTasks([]), tasks.length * 55 + 320)
  }

  function handleKey(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') addTask()
  }

  const leftCount = tasks.filter(t => !t.completed && !t.removing).length

  return (
    <div className="todo-wrap">
      <div className="todo-card">
        <h1 className="todo-title">
          todo<span className="todo-dot">.</span>
        </h1>

        <div className="input-row">
          <input
            className="task-input"
            type="text"
            placeholder="What needs doing?"
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={handleKey}
            aria-label="New task"
          />
          <button className="add-btn" onClick={addTask} aria-label="Add task">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
              <path d="M8 2v12M2 8h12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
            </svg>
          </button>
        </div>

        {tasks.length === 0 && (
          <p className="empty-state">Nothing here yet — add something above.</p>
        )}

        <ul className="task-list" aria-live="polite" aria-label="Tasks">
          {tasks.map(task => (
            <li
              key={task.id}
              className={[
                'task-item',
                task.removing ? 'removing' : '',
                task.completed ? 'done' : '',
              ].filter(Boolean).join(' ')}
              style={task.removing ? { animationDelay: `${task.clearDelay ?? 0}ms` } : undefined}
            >
              <button
                className={`task-circle${task.completed ? ' filled' : ''}`}
                onClick={() => toggleTask(task.id)}
                aria-label={task.completed ? 'Mark incomplete' : 'Mark complete'}
              />
              <span className="task-text">{task.text}</span>
              <button
                className="task-remove"
                onClick={() => removeTask(task.id)}
                aria-label="Remove task"
              >
                ✕
              </button>
            </li>
          ))}
        </ul>

        {tasks.length > 0 && (
          <div className="footer-row">
            <span className="task-count">
              {leftCount} {leftCount === 1 ? 'task' : 'tasks'} left
            </span>
            <button className="clear-btn" onClick={clearAll}>
              Clear all
            </button>
          </div>
        )}

        <div className="todo-roastery-link">
          <Link to="/coffee" className="todo-roastery-anchor">
            Dark Roast Co. ↗
          </Link>
          <span className="todo-roastery-sep">·</span>
          <Link to="/brew" className="todo-roastery-anchor">
            Brew Guide ↗
          </Link>
        </div>
      </div>
    </div>
  )
}
