"use client"
import Image from "next/image";
import React, { useEffect } from "react";
import Container from "./container";
import trust from '../../public/trust.jpeg';
import AOS from 'aos';
import 'aos/dist/aos.css';

const WhatsWeDO = () => {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <Container>
            {/* Heading */}
            <div className="text-center m-auto items-center" id="industries">
                <p className="font-bold text-4xl" data-aos="fade-up" data-aos-duration="900">
                    <span className="text-purple-500">Revolutionizing </span> supply chain verification
                </p>
                <p className="w-[50%] text-center my-6 text-base items-center m-auto" data-aos="fade-up" data-aos-duration="1000">
                   Discover how we are going to change the whole supply chain ecosystem of expensive and important products from HealthCare to Protien/Supplement industry to Art Industry.
                </p>
            </div>
            <div className="flex flex-col md:flex-row gap-14 items-center justify-center">


                {/* Three Divs */}
                <div className="flex flex-col w-full md:w-[32%] mt-14 gap-4">
                    <div className="flex flex-col justify-between w-full h-full bg-gray-100 shadow-xl text-black px-14 rounded-2xl py-14 dark:bg-trueGray-800" data-aos="fade-right">
                        <p className="text-xl font-serif leading-normal flex">
                            <p className="justify-center flex items-center">Healthcare is one of the biggest focus of ours, with many important medicined having temperature sensitivity and faked distribution to be verified with our unique algorithm </p>
                        </p>
                    </div>
                    <div className="flex flex-col justify-between w-full h-full bg-gray-100 shadow-xl text-black px-14 rounded-2xl py-14 dark:bg-trueGray-800" data-aos="fade-right">
                        <p className="text-xl font-serif leading-normal flex">
                            <p className="justify-center flex items-center">Many Protien and Expensive Supplement industries are already exloring verification systems and we bring the best one there ever will be.</p>
                        </p>
                    </div>

                </div>

                {/* Image */}
                <div className="flex-shrink-0 overflow-hidden rounded-full">
                    <Image
                        src={trust}
                        width={500}
                        height={400}
                    />
                </div>
            </div>
        </Container>
    );
}

export default WhatsWeDO;