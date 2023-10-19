import Footer from "../components/Footer";
import Header from "../components/Header";
import Main from "../components/Main";
import Banner from '../components/Banner'
import Testimonials from "./Testimonials";
import OurStory from "./OurStory";


const Home = () => {
    return (
        <>
        <Banner />
        <Main />
        <Testimonials />
        <OurStory />
        </>
    );
}

export default Home;