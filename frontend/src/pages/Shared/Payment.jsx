import React from 'react'
import Pay from '../../components/Shared/Payment_page'
import Header from '../../components/Shared/Header'
import PageIndicator from '../../components/Shared/pageIndicator';

function SearchFlightsPage() {
  return (
   <>
   <Header/>
   <PageIndicator currentPage="payment" />
   <Pay/>
   </>
  )
}

export default SearchFlightsPage