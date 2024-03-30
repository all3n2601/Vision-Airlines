import React from 'react'
import Passenger_details from '../../components/Shared/Passenger_details'
import Header from '../../components/Shared/Header'
import PageIndicator from '../../components/Shared/pageIndicator';

function SearchFlightsPage() {
  return (
   <>
   <Header/>
   <PageIndicator currentPage="passenger-details" />
   <Passenger_details/>
   </>
  )
}

export default SearchFlightsPage