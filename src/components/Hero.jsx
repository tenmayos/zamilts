import banner_1 from '../assets/png/banner_1.jpg'
import { useSpring, animated } from '@react-spring/web';
import { useLocation } from 'react-router-dom';
import { heroLanguages } from '../pages/Home/PageData/homeData';

function Hero() {

    const isArabic = useLocation().pathname.includes('/ar');
    const languagePack = isArabic ? heroLanguages.ar : heroLanguages.en;

    const titleSprings = useSpring({
        from: { opacity: 0, top: '70%' },
        to: { opacity: 1, top: '50%' },
        config: {
            duration: 700,
        },
    });

    const bgSprings = useSpring({
        from: { transform: 'scale(1.0)' },
        to: { transform: 'scale(1.1)' },
        config: {
            duration: 6000,
        },
        loop: { reverse: true }
    });

    return (
        <>
            <section id='hero' className='relative text-center overflow-hidden'>
                <animated.div className='absolute text-white top-2/4 left-2/4 transform-center z-10'
                    style={titleSprings}>
                    <h1 className='text-2xl leading-normal md:text-4xl md:leading-tight'>{languagePack[0]} <strong className='text-green-500'>
                        {languagePack[1]}
                    </strong>
                    </h1>
                    <h1 className='text-2xl leading-normal mb-6 md:text-4xl md:leading-tight'>
                        {languagePack[2]} <span className='text-green-500'>
                            {languagePack[3]}</span>
                    </h1>
                    <p className="text-white text-sm leading-relaxed md:text-2xl md:leading-normal">
                        {languagePack[4]}
                    </p>
                </animated.div>
                <animated.div className='w-screen h-screen bg-no-repeat bg-center'
                    style={
                        {
                            'backgroundImage': `url(${banner_1})`,
                            ...bgSprings
                        }}
                />
            </section>
        </>
    )
}

export default Hero;