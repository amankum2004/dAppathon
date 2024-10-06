import React from "react"; 
import {BrowserRouter,Routes,Route} from "react-router-dom"
import { Home } from "./pages/home"
import { About } from "./pages/About"
import { Contact } from "./pages/Contact"
import { Service } from "./pages/Service"
import { Register } from "./pages/Register"
import  Login  from "./pages/Login"
import GetOTP from "./pages/GetOtp"
import { Error } from "./pages/Error"
import {Header }from "./components/Header"
import { Footer } from "./components/Footer"
import Forget from "./pages/Forget"
import UpdatePassword from "./pages/UpdatePassword"
import { AdminLayout } from "./pages/Admin-Layout"
import { AdminUsers } from "./pages/Admin-Users"
import { AdminContacts } from "./pages/Admin-Contacts"
import { AdminServices } from "./pages/Admin-Services"
import { AdminUserUpdate } from "./pages/Admin-User-Update"
import { Shops } from "./pages/Shops"
import { RegisterShop } from "./pages/RegisterShop"
import { AdminShops } from "./pages/Admin-Shops"
import { AdminShopUpdate } from "./pages/Admin-Shop-Update"
import  DateTimeSelection  from "./pages/ShopInfo"
import { Payment } from "./pages/Payment"
import { CustomerProfile } from "./pages/CustomerProfile"
import {BarberProfile} from "./pages/BarberProfile"
import { LoginProvider } from "./components/LoginContext"
import BarberProfileUpdate from "./pages/BarberProfile-Update";
import {AptosWalletAdapterProvider,WalletProvider} from '@aptos-labs/wallet-adapter-react'
import {WellDoneWalletAdapter} from '@welldone-studio/aptos-wallet-adapter'
import { useMemo } from "react";


function App()  {
  const wallets = useMemo(() => [new WellDoneWalletAdapter()], []);
  
  return (
    <>
    <WalletProvider wallets={wallets} autoConnect={true}>
    <BrowserRouter>
      <LoginProvider>
      <Header/>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/" element = {<Home />}/>
          <Route path="/about" element = {<About />}/>
          <Route path="/contact" element = {<Contact />}/>
          <Route path="/services" element = {<Service />}/>
          <Route path="/register" element = {<Register />}/>
          <Route path="/login" element = {<Login />}/>
          <Route path="/getOTP" element = {<GetOTP />}/>
          <Route path="/forget" element = {<Forget />}/>
          <Route path="/update" element = {<UpdatePassword />}/>
          <Route path="/nearbyShops" element = {<Shops/>}/>
          <Route path="/registershop" element = {<RegisterShop/>}/>
          <Route path="/customerprofile" element = {<CustomerProfile/>}/>
          <Route path="/barberprofile" element = {<BarberProfile/>}/>
          <Route path="/barber-profile-update" element = {<BarberProfileUpdate/>}/>
          <Route path="/payment" element = {<Payment/>}/>
          <Route path="/nearbyShops/:shopId/shopinfo" element = {<DateTimeSelection/>}/>
          <Route path="*" element={<Error />}/>
          <Route path="/admin" element={<AdminLayout />}>
            <Route path="users" element={<AdminUsers/>}/>
            <Route path="contacts" element={<AdminContacts/>}/>
            <Route path="services" element={<AdminServices/>}/>
            <Route path="shops" element={<AdminShops/>}/>
            <Route path="users/:id/edit" element={<AdminUserUpdate/>}/>
            <Route path="shops/:id/edit" element={<AdminShopUpdate/>}/>
          </Route>
        </Routes>
      </LoginProvider>
      <Footer/>
    </BrowserRouter>
    </WalletProvider>
    </>
  )
}

export default App;
