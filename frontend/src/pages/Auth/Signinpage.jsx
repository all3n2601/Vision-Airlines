import React from 'react';
import Signin from '../../components/Auth/Signin';
import Header from '../../components/Shared/Header';
import Footer from '../../components/Shared/Footer';

function SignInPage(){
    return (
        <>
           <Header/>
           <Signin />
           <Footer />
        </>
    )
}
 
export default SignInPage;