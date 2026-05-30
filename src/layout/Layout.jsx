import { Outlet } from "react-router"
import { Footer } from "../components/Footer"
import { Header } from "../components/Header"

export const Layout = () => {
    return(
        <>
    <Header />
    <Outlet />
    <Footer />
    </>
    )
}