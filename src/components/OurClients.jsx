import ClientsCarousel from "./ClientsCarousel";
import fullClientsData from "../data/clientsData";
import { useLocation } from "react-router-dom";
import { clientsLanguage } from "../pages/Home/PageData/homeData";

function OurClients() {

    const isArabic = useLocation().pathname.includes('/ar');
    const languagePack = isArabic ? clientsLanguage.ar : clientsLanguage.en;

    return (
        <section className="grid grid-rows-2 content-center m-4 pb-6">
            <div className="row-start-1 text-center m-auto">
                <h1 className="text-3xl">
                    <strong>
                        {languagePack[0]}
                    </strong>
                </h1>
                <p className="p-4">
                    {languagePack[1]}
                </p>
            </div>
            <div className="row-start-2 flex justify-center">
                {/* insert the partners and clients carousel in here */}
                <div className="max-w-sm md:max-w-2xl overflow-hidden">
                    <ClientsCarousel autoSlide={false} allowedViews={(fullClientsData.length - 1) / 2}>
                        {
                            fullClientsData.map(
                                (src) =>
                                    <img className="resized" src={src} />
                            )
                        }
                    </ClientsCarousel>
                </div>
            </div>
        </section>
    )
}

export default OurClients;