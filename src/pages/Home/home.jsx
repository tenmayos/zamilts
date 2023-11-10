import Navbar from "../../components/Navbar"
import Hero from '../../components/Hero'
import Intro from "../../components/Intro"
import Services from "../../components/Services"
import OurClients from "../../components/OurClients"
import Footer from "../../components/Footer"
import GetIn from "../../components/GetIn"

function Home() {

    return (
        <>
            <Navbar />
            <Hero />
            <Intro />
            <Services />
            <OurClients />
            {/* <GetIn /> */}
            <Footer />
        </>
    )
}

export default Home;