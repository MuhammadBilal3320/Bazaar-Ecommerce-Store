import React, { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './components/HomePage/HomePage'
import ProductPage from './components/ProductPage/ProductPage'
import ProductDetails from './components/ProductDetailsPage/ProductDetails'
import RegistrationPage from './components/Authentication/RegistrationPage'
import LoginPage from './components/Authentication/LoginPage'
import RegistrationSuccessful from './components/Authentication/RegistrationSuccessful'
import ForgotPasswordPage from './components/Authentication/ForgotPasswordPage'
import ResetPasswordPage from './components/Authentication/ResetPasswordPage'
import EmailSentSuccessful from './components/Authentication/EmailSentSuccessful'
import ResetPasswordSuccessful from './components/Authentication/ResetPasswordSuccessful'
import store from './store'
import { userLoaderAction } from './actions/AuthenticationAction'


const App = () => {

useEffect(() => {
store.dispatch(userLoaderAction());
}, [])


  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<HomePage />} ></Route>
        <Route exact path='/home' element={<HomePage />} ></Route>
        <Route exact path='/product' element={<ProductPage />} ></Route>
        <Route exact path='/product/:keyword' element={<ProductPage />} ></Route>
        <Route exact path='/product/singleProduct/:id' element={<ProductDetails />} ></Route>
      
      //Authentication
        <Route exact path='/registration' element={<RegistrationPage/>} ></Route>
        <Route exact path='/registrationSuccessful' element={<RegistrationSuccessful/>} ></Route>
        <Route exact path='/login' element={<LoginPage/>} ></Route>
        <Route exact path='/forgotPassword' element={<ForgotPasswordPage/>} ></Route>
        <Route exact path='/emailSentSuccessful' element={<EmailSentSuccessful/>} ></Route>
        <Route exact path='/resetPassword/:token' element={<ResetPasswordPage/>} ></Route>
        <Route exact path='/resetPasswordSuccessful' element={<ResetPasswordSuccessful/>} ></Route>
        <Route exact path='/logout' element={<HomePage/>} ></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
