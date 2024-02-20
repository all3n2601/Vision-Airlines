
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom' 
import './App.css'
import HomePage from './pages/Shared/HomePage'
import Signin from './pages/Shared/Signin';
import Signup from './pages/Shared/Signup';
import ForgotPassword from './pages/Shared/ForgotPassword';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sign-in" element={<Signin />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
    </Router>
  )
}

export default App
