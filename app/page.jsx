"use client"
import Image from "next/image";
import Header from "./Components/Navbar";
import FrontPage from "./Components/FrontPage";
import WhatWeDo from "./Components/WhatWeDo";
import Cards from "./Components/Cards";
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from "react";
export default function Home() {
    useEffect(() => {
        AOS.init()
    }, [])

    return (
        <div className="">
            <FrontPage />
            <Cards />
            <WhatWeDo />
        </div>
    );
}