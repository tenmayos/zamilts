import aboutPic from '../assets/png/about.png'
import PrimaryButton from './PrimaryButton';

function Intro() {
    return (
        <section className="md:grid md:grid-cols-2 text-left my-12 p-4">
            <div className='flex md:justify-center md:self-center'>
                <img className='p-6' src={aboutPic} alt="Hardworking man standing proudly" />
            </div>
            <div className='flex flex-wrap justify-start self-center mt-4 py-1 lg:pr-14'>
                <h1 className='text-left text-2xl'>
                    <strong>
                        Zamil Group Trade & Services
                    </strong>
                </h1>
                <p className="text-base text-left mt-4 leading-relaxed">
                    Zamil Group Trade & Services was formed in the mid 1930s.
                    The enterprising,
                    foresighted and innovative spirit which saw the vast and varied market potential in the kingdom has not only survived; it has blossomed, creating one of Saudi Arabia’s largest and most diversified trading organizations.
                </p>
                <p className="text-base mt-4 text-left leading-relaxed">
                    We function as partners to overseas manufacturers and we are proud to represent many well-known international companies,
                    trading establishments, services and consultancy firms.
                    Our vast experience and enthusiastic team of experts has made us the friendliest and most welcomed supplier to our esteemed clients...
                </p>
                <div className="mt-6">
                    <PrimaryButton innerText='Read More' />
                </div>
            </div>
        </section>
    )
}

export default Intro;