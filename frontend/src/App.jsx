
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom' 
import './App.css'
import HomePage from './pages/Shared/HomePage'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  )
}

export default App
