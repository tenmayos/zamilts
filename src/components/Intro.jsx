import aboutPic from '../assets/png/about.png'
import PrimaryButton from './PrimaryButton';
import { useLocation } from 'react-router-dom';
import { introLanguages } from '../pages/Home/PageData/homeData';

function Intro() {
    const isArabic = useLocation().pathname.includes('/ar');
    const languagesPack = isArabic ? introLanguages.ar : introLanguages.en;
    return (
        <section className="md:grid md:grid-cols-2 text-left my-12 p-4">
            <div className='flex md:justify-center md:self-center'>
                <img className='p-6' src={aboutPic} alt="Hardworking man standing proudly" />
            </div>
            <div className='flex flex-wrap justify-start self-center mt-4 py-1 lg:pr-14'>
                <h1 className='text-left text-2xl'>
                    <strong>
                        {languagesPack[0]}
                    </strong>
                </h1>
                <p className="text-base text-left mt-4 leading-relaxed">
                    {languagesPack[1]}
                </p>
                <p className="text-base mt-4 text-left leading-relaxed">
                    {languagesPack[2]}
                </p>
                <div className="mt-6">
                    <PrimaryButton innerText={languagesPack[3]} />
                </div>
            </div>
        </section>
    )
}

export default Intro;