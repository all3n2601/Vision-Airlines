
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom' 
import './App.css'
import HomePage from './pages/Shared/HomePage'
import SignInPage from './pages/Auth/Signinpage';
import SignUpPage from './pages/Auth/Signuppage';
import ForgotPasswordPage from './pages/Auth/ForgotPasswordpage';
import BookTicketPage from './pages/Shared/HomePage';
import ExploreFlightsPage from './pages/Shared/HomePage';



function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/book-ticket" element={<BookTicketPage />} />
        <Route path="/explore-flights" element={<ExploreFlightsPage />} />
      </Routes>
    </Router>
  )
}

export default App
