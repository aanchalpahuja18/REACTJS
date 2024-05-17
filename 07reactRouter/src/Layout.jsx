import React from "react"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import {Outlet} from "react-router-dom"

function Layout () {
    return (
        <>
        <Header/>
        <Outlet/>
        <Footer/>
        </>
    )

}

export default Layout;

//Header aur Footer ke beech me dynamically cheezein pass krni hai jese ki Home, About Us, Contact Us

//Outlet Layout ko same rkhega as in Header & Footer ko as a base rkhega.
//Ab kya hoga header aur footer same rhega and uske andar jo as a Outlet hai vo change hote rhega