import React from "react";
import PlanTrip from "../../components/Shared/PlanTrip";
import Header from "../../components/Shared/Header";
import Footer from "../../components/Shared/Footer"

function PlanTripPage() {
  return (
    <div className="relative">
      <Header/>
      <PlanTrip/>
      <Footer/>
    </div>
  );
}

export default PlanTripPage;   