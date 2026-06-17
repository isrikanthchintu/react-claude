import { BrowserRouter, Routes, Route } from 'react-router-dom'
import TodoApp from './TodoApp.tsx'
import CoffeeRoastery from './CoffeeRoastery.tsx'
import BrewGuide from './BrewGuide.tsx'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TodoApp />} />
        <Route path="/coffee" element={<CoffeeRoastery />} />
        <Route path="/brew" element={<BrewGuide />} />
      </Routes>
    </BrowserRouter>
  )
}
