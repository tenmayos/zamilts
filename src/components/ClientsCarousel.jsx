import { useEffect, useState } from "react";

function ClientsCarousel({ children: slides, autoSlide = false, autoSlideInterval = 3000, allowedViews = 1 }) {
    // slide at 50% when inner width is bigger than 769
    const [currentIndex, setCurrentIndex] = useState(0);

    function prev() {
        setCurrentIndex(
            prevState => prevState === 0 ? allowedViews : prevState - 1
        )
    }
    function next() {
        setCurrentIndex(
            prevState => prevState === allowedViews ? 0 : prevState + 1
        )
    }

    useEffect(() => {
        if (!autoSlide)
            return
        const slideInterval = setInterval(next, autoSlideInterval);
        return () => clearInterval(slideInterval);
    }, [])

    return (
        <div className="relative">
            <div className="flex transition-transform ease-out duration-500"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {slides}
            </div>
            <div className="absolute inset-0 flex items-center justify-between">
                <button onClick={prev}>
                    <i className="fa-solid fa-chevron-left"></i>
                </button>
                <button onClick={next}>
                    <i className="fa-solid fa-chevron-right"></i>
                </button>
            </div>
            <div className="absolute bottom-4 right-0 left-0">
            </div>
        </div>
    )
}

export default ClientsCarousel;