import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/Shared/HomePage";
import SignInPage from "./pages/Auth/Signinpage";
import SignUpPage from "./pages/Auth/Signuppage";
import ForgotPasswordPage from "./pages/Auth/ForgotPasswordpage";
import BookTicketPage from "./pages/Shared/HomePage";
import ExploreFlightsPage from "./pages/Shared/HomePage";
import PrivateRoute from "./Routes/PrivateRoute";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./Services/store";
import SearchFlightsPage from "./pages/Shared/SearchFlightsPage";

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/sign-in" element={<SignInPage />} />
            <Route path="/sign-up" element={<SignUpPage />} />
            <Route path="/forgot-password" element={<ForgotPasswordPage />} />
            <Route path="/search-flights" element={< SearchFlightsPage/>} />
            {/* <Route element={<PrivateRoute />}> */}
            <Route path="/book-ticket" element={<BookTicketPage />} />
            {/* </Route> */}
          </Routes>
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
