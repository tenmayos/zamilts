import ClientsCarousel from "./ClientsCarousel";
import fullClientsData from "../data/clientsData";

function OurClients() {

    return (
        <section className="grid grid-rows-2 content-center m-4">
            <div className="row-start-1 text-center m-auto">
                <h1 className="text-3xl">
                    <strong>
                        Our Clients
                    </strong>
                </h1>
                <p className="p-4">
                    We are considered as one of the most reputed trading organizations of Saudi Arabia and is the best when it comes to total reliability
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