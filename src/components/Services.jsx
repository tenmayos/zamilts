import { useState, useEffect } from 'react';
import logo from '../assets/png/logo.png';
import servicesImages from '../data/servicesData';
import { servicesLanguage } from '../pages/Home/PageData/homeData';
import { useLocation } from 'react-router-dom';

function Services() {
    const isArabic = useLocation().pathname.includes('/ar');
    const languagePack = isArabic ? servicesLanguage.ar : servicesLanguage.en;
    const [currentIndex, setCurrentIndex] = useState(0);
    // TODO:
    // 1- make it change automatically every set amount of time.
    // 2- work on the carousel change animation.
    // 3- see how u can zoom into the picture as the window shrinks.

    /*useEffect(() => {
        const carouselChanger = setInterval(goToNext, 5000)
        return () => clearInterval(carouselChanger)
    }, []);*/

    function goToPrev() {
        if (currentIndex === 0) {
            setCurrentIndex(servicesImages.length - 1);
        } else {
            setCurrentIndex(currentIndex - 1);
        }

    }
    function goToNext() {
        if (currentIndex === servicesImages.length - 1) {
            setCurrentIndex(0);
        } else {
            setCurrentIndex(currentIndex + 1);
        }
    }

    return (
        <section className='pb-4'>
            <h1 className='text-left text-2xl mb-6 ml-4'>
                <strong>
                    {languagePack[0]}
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
                    <div className='absolute bg-opacity-50 bg-black z-10 w-3/4 md:w-1/2 lg:w-1/3 h-full p-4'>
                        <div className='flex'>
                            <img className='ml-4 mt-4 mb-6 w-36 md:ml-6 md:mt-6 md:w-40 ' src={logo} alt="Zamil Trade & Services Logo" />
                        </div>
                        <div className='pl-5'>
                            <h4 className='inline-flex text-2xl text-white mb-4'>
                                <strong>
                                    {
                                        isArabic ? servicesImages[currentIndex].language.ar.title : servicesImages[currentIndex].language.en.title
                                    }
                                </strong>
                            </h4>
                            <p className='text-white text-base lg:text-lg'>
                                {isArabic ? servicesImages[currentIndex].language.ar.desc : servicesImages[currentIndex].language.en.desc}
                            </p>
                        </div>
                    </div>
                    <div className='overflow-hidden'>
                        {/* changed width to full */}
                        <img className='long zoomed lg:w-full object-none' src={servicesImages[currentIndex].image}
                            alt={isArabic ? servicesImages[currentIndex].language.ar.alt : servicesImages[currentIndex].language.en.alt} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services;