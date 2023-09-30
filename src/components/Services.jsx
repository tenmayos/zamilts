import { useState } from 'react';
import logo from '../assets/png/logo.png';
import pic1 from '../assets/jpg/home_ser_1.jpg';
import pic2 from '../assets/jpg/home_ser_2.jpg';
import pic3 from '../assets/jpg/home_ser_3.jpg';
import pic4 from '../assets/jpg/home_ser_4.jpg';
import pic5 from '../assets/jpg/home_ser_5.jpg';

function Services() {
    const [currentIndex, setCurrentIndex] = useState(0);
    // TODO:
    // 1- make it change automatically every set amount of time.
    // 2- work on the carousel change animation.
    // 3- see how u can zoom into the picture as the window shrinks.
    
    const imagesUsed = [
        pic1,
        pic2,
        pic3,
        pic4,
        pic5,
    ]

    function goToPrev() {
        if (currentIndex === 0) {
            setCurrentIndex(imagesUsed.length - 1);
        } else {
            setCurrentIndex(currentIndex - 1);
        }

    }
    function goToNext() {
        if (currentIndex === imagesUsed.length - 1) {
            setCurrentIndex(0);
        } else {
            setCurrentIndex(currentIndex + 1);
        }
    }

    return (
        <section>
            <h1 className='text-left text-2xl mb-6 ml-4'>
                <strong>
                    Value Added Services
                </strong>
            </h1>

            <div className='relative'>
                <div
                    className='z-20 
                    absolute top-2/4 left-2 right-auto translate-y-1/3
                     text-white cursor-pointer
                     hover:text-green-500'
                    onClick={goToPrev}>

                    <i className="fa-solid fa-chevron-left text-4xl md:text-5xl lg:text-6xl"></i>
                </div>
                <div
                    className='z-20 absolute top-2/4 left-auto right-2 translate-y-1/3 text-white cursor-pointer
                     hover:text-green-500'
                    onClick={goToNext}>
                    <i className='fa-solid fa-chevron-right text-4xl md:text-5xl lg:text-6xl'></i>
                </div>
                <div>
                    <div className='absolute bg-opacity-50 bg-black z-10 w-7/12 h-full p-4'>
                        <div className='flex'>
                            <img className='ml-4 mt-2 mb-6 w-24' src={logo} alt="" />
                        </div>
                        <h4 className='inline-flex text-2xl text-white mb-2'>Professional logistical support & services</h4>
                        <p className='text-white text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna...</p>
                    </div>
                    {/* changed width to full */}
                    <img className='w-full' src={imagesUsed[currentIndex]} alt="" />
                </div>
            </div>
        </section>
    )
}

export default Services;