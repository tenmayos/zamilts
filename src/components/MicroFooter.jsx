import { useLocation } from "react-router-dom";
import { microfooterLanguages } from "../data/footerData";

function MicroFooter() {

    const currentYear = new Date().getFullYear();
    const isArabic = useLocation().pathname.includes('/ar');
    const languagePack = isArabic ? microfooterLanguages.ar : microfooterLanguages.en;

    return (
        <div className='text-center'>
            <span className='text-sm text-center pb-4'>
                © {currentYear + ` ${languagePack[0]}`}
            </span>
        </div>
    )
}

export default MicroFooter;