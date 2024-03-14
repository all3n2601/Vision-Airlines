import React from 'react'
import FlightSearch from '../../components/Shared/FlightSearch'
import Header from '../../components/Shared/Header'
import PageIndicator from '../../components/Shared/pageIndicator';

function SearchFlightsPage() {
  return (
   <>
   <Header/>
   <PageIndicator currentPage="select-flight" />
   <FlightSearch/>
   </>
  )
}

export default SearchFlightsPage