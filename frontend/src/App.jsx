import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/Shared/HomePage";
import SignInPage from "./pages/Auth/Signinpage";
import ForgotPasswordPage from "./pages/Auth/ForgotPasswordpage";
import BookTicketPage from "./pages/Shared/HomePage";
import ExploreFlightsPage from "./pages/Shared/HomePage";
import PrivateRoute from "./Routes/PrivateRoute";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./Services/store";
import SearchFlightsPage from "./pages/Shared/SearchFlightsPage";
import PassengerDeatil from "./pages/Shared/PassengerDetail";
import ContactUsPage from "./pages/Shared/ContactUsPage";
import Checkin from "./pages/Shared/check_in";
import ReviewsPage from "./pages/Shared/ReviewsPage";
import PlanTripPage from "./pages/Shared/PlanTripPage";
import TravelInfoPage from "./pages/Shared/TravelInfoPage";
import BoardingPassPage from "./pages/Shared/BoardingPassPage";
import VisaEnquiryPage from "./pages/Shared/VisaEnquiryPage";
import Payment from "./pages/Shared/Payment";

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/sign-in" element={<SignInPage />} />
            <Route path="/forgot-password" element={<ForgotPasswordPage />} />
            <Route path="/search-flights" element={< SearchFlightsPage/>} />
            <Route path="/passenger-detail" element={< PassengerDeatil/>} />
            <Route path="/contact-us" element={< ContactUsPage/>} />
            <Route path="/check-in" element={< Checkin/>} />
            <Route path="/user-reviews" element={< ReviewsPage/>} />
            <Route path="/plan-trip" element={< PlanTripPage/>} />
            <Route path="/travel-info" element={< TravelInfoPage/>} />
            <Route path="/boarding-pass" element={< BoardingPassPage/>} />
            <Route path="/visa-inquiry" element={< VisaEnquiryPage/>} />
            {/* <Route element={<PrivateRoute />}> */}
            <Route path="/book-ticket" element={<BookTicketPage />} />
            <Route path="/payment" element={<Payment/>} />
            {/* </Route> */}
          </Routes>
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
