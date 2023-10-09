import { useEffect, useState } from "react";

function ClientsCarousel({ children: slides, autoSlideInterval = 3000 }) {
    // slide at 50% when inner width is bigger than 769
    const [currentIndex, setCurrentIndex] = useState(0);

    function prev() {
        setCurrentIndex(
            prevState => prevState === 0 ? slides.length - 1 : prevState - 1
        )
    }
    function next() {
        setCurrentIndex(
            prevState => prevState === slides.length - 1 ? 0 : prevState + 1
        )
    }

    useEffect(() => {
        const slideInterval = setInterval(next, autoSlideInterval);
        return () => clearInterval(slideInterval);
    }, [])

    return (
        <div className="relative">
            <div className="flex transition-transform ease-out duration-500"
                style={{ transform: `translateX(-${currentIndex * 335}px)` }}>
                {slides}
            </div>
        </div>
    )
}

export default ClientsCarousel;