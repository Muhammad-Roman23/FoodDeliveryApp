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
import { ListFoods } from "../AdminDashboard/ListFoods"
import { AddFoods } from "../AdminDashboard/AddFoods"
import { ListOrders } from "../AdminDashboard/ListOrders"
import { PendingOrders } from "../AdminDashboard/PendingOrders"
import { CompletedOrders } from "../AdminDashboard/CompletedOrders"
import { ListUsers } from "../AdminDashboard/ListUsers"
import { PendingRequests } from "../AdminDashboard/PendingRequests"
import { ListCategories } from "../AdminDashboard/ListCategories"
import { AddCategory } from "../AdminDashboard/AddCategory"


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
                 <Route path="/foods/listfoods" element={<ListFoods />} />
                 <Route path="/foods/add-foods" element={<AddFoods />} />
                 <Route path="/orders/list-orders" element={<ListOrders />} />
                 <Route path="/orders/pending" element={<PendingOrders />} />
                 <Route path="/orders/completed" element={<CompletedOrders />} />
                 <Route path="/users/list-users" element={<ListUsers />} />
                 <Route path="/users/pending" element={<PendingRequests />} />
                 <Route path="/categories/list-categories" element={<ListCategories />} />
                 <Route path="/categories/add-category" element={<AddCategory />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}