import React from "react";
import CarouselBox from "../Components/CarouselBox";
import About from "./About";
import Portfolio from "./Portfolio";
import Services from "./Services";
import Contacts from "./Contacts";

export default function Home() {
    return (
        <>
            <CarouselBox/>
            <About/>
            <Services/>
            <Portfolio/>
            <Contacts/>
        </>
    );
}