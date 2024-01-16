import React from 'react';
import './banner.css'; // Retain your existing CSS file
import { FaAngleDoubleDown } from "react-icons/fa";

const Banner = () => {
    return (
        <div className='banner flex justify-center items-center h-screen'>
            <div className="sp-container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="sp-content text-center">
                    <div className="sp-globe mb-4"></div>
                    <h2 className="frame-1 text-xl sm:text-2xl md:text-3xl lg:text-4xl">Hey</h2>
                    <h2 className="frame-2 text-xl sm:text-2xl md:text-3xl lg:text-4xl">I'm</h2>
                    <h2 className="frame-3 text-xl sm:text-2xl md:text-3xl lg:text-4xl">Oshada</h2>
                    <h2 className="frame-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl">Thawalampola</h2>
                    <h2 className="frame-5 text-lg sm:text-xl md:text-2xl lg:text-3xl">
                        <span>Welcome To My Portfolio</span>
                    </h2>
                </div>
            </div>
        </div>
    );
};

export default Banner;
