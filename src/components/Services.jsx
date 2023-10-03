import { useState, useEffect } from 'react';
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
        {
            image: pic1,
            alt: 'image of employees focused on working',
            title: 'Around 250 employees serving 3000 customers',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna...'
        },
        {
            image: pic2,
            alt: 'image of 2 people shaking hands',
            title: 'Professional business approach',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna...',
        },
        {
            image: pic3,
            alt: 'image of a truck and a plane and a car with a ship carrying large containers. i know, dont ask...',
            title: 'Professional logistical support & services',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna...',
        },
        {
            image: pic4,
            alt: 'image of a person pressing a single key on a laptop.',
            title: 'Prompt coordination & easier communication',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna...',
        },
        {
            image: pic5,
            alt: 'image of 2 guys wearing suits and shaking hands while the third person touches a shut down tablet',
            title: 'Strategic partnership approach with clients & suppliers',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna...',
        }
    ]

    useEffect(() => {
        console.log('used Effect')
        const carouselChanger = setInterval(goToNext, 5000)
        return () => {
            console.log('destroyed effect')
            clearInterval(carouselChanger)
        }
    });

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
        <section className='pb-20'>
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
                    <div className='absolute bg-opacity-50 bg-black z-10 w-3/4 md:w-1/2 lg:w-1/3 h-full p-4'>
                        <div className='flex'>
                            <img className='ml-4 mt-4 mb-6 w-36 md:ml-6 md:mt-6 md:w-40 ' src={logo} alt="Zamil Trade & Services Logo" />
                        </div>
                        <div className='pl-5'>
                            <h4 className='inline-flex text-2xl text-white mb-4'>
                                <strong>{
                                    imagesUsed[currentIndex].title}
                                </strong>
                            </h4>
                            <p className='text-white text-base lg:text-lg'>
                                {imagesUsed[currentIndex].desc}
                            </p>
                        </div>
                    </div>
                    <div className='overflow-hidden'>
                        {/* changed width to full */}
                        <img className='long zoomed lg:w-full object-none' src={imagesUsed[currentIndex].image}
                            alt={imagesUsed[currentIndex].alt} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services;