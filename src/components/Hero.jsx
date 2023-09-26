import banner_1 from '../assets/png/banner_1.jpg'

function Hero() {
    return (
        <>
            <section id='hero' className='relative text-center'>
                <div className='absolute text-white top-2/4 left-2/4 transform-center lh'>
                    <h1 className='text-2xl leading-normal md:text-4xl md:leading-tight'>Welcome to <strong className='text-green-500'>
                        Zamil
                    </strong>
                    </h1>
                    <h1 className='text-2xl leading-normal mb-6 md:text-4xl md:leading-tight'>
                        Trade & <span className='text-green-500'>
                            Services</span>
                    </h1>
                    <p className="text-white text-sm leading-relaxed md:text-2xl md:leading-normal">
                        Zamil Group Trade & Services
                        was formed in the mid 1930s.
                        The enterprising, foresighted and innovative spirit which...
                    </p>
                </div>
                <img className='w-screen h-screen' src={banner_1} alt="Picture of a futuristic costruction site" />
            </section>
        </>
    )
}

export default Hero;