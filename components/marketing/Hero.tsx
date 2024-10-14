// /src/components/Hero.js
import React from 'react';
import Button from './Button';

const Hero = () => {

    return (
        <section className="bg-cover bg-center bg-no-repeat h-screen text-white flex items-center justify-center" style={{ backgroundImage: "url('/images/hero-bg.png')" }}>
            <div className='container px-4 md:px-8 mx-auto flex items-center justify-end'>
                <div className=' max-w-[643px] '>
                    <div className=" px-10 pt-14 pb-8 bg-[#FFF3E3] rounded-[10px]">
                        <p className="pb-1 text-[#333333] font-semibold leading-[24px] text-[16px] tracking-[3px] ">New Arrival</p>
                        <h1 className=" text-[#B88E2F] p-0 m-0 py-0 font-[700] text-[52px]  leading-[60px]">Discover Our New Collection</h1>
                        <p className="pb-11 pt-[10px] pr-[15px] text-[#333333] font-[500] text-[18px] leading-6 ">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
                        </p>
                        <Button>SHOP NOW</Button>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default Hero;
