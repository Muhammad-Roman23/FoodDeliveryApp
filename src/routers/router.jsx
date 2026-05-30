import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "../pages/Home"
import { Layout } from "../layout/Layout"
import { About } from "../pages/About"
import { AllProducts } from "../pages/AllProducts"
import { Contact } from "../pages/Contact"
import { CheckoutPage } from "../pages/CheckoutPage"
import { RegisterPage } from "../pages/RegisterPage"
import { LoginPage } from "../pages/LoginPage"
import { AdminLayout } from "../AdminDashboard/SidebarLayout"
import { Dashboard } from "../AdminDashboard/Dashboard"


export const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route element = {<Layout/>} >
                    <Route path="/" element = {<Home/>} />
                    <Route path="/about" element = {<About/>} />
                    <Route path="/products" element = {<AllProducts/>} />
                    <Route path="/contact" element = {<Contact/>} />

                </Route>
                <Route path="/checkout" element={<CheckoutPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/login" element={<LoginPage />} />

                <Route element={<AdminLayout />}>
                 <Route path="/dashboard" element={<Dashboard />} />
                    </Route>
            </Routes>
        </BrowserRouter>
    )
}