import NavBar from "../components/Navbar"
import Hero from '../components/Hero'
import Intro from "../components/Intro"
import Services from "../components/Services"
import OurClients from "../components/OurClients"

export default function Home() {
    return (
        <>
            <NavBar />
            <Hero />
            <Intro />
            <Services />
            <OurClients />
        </>
    )
}