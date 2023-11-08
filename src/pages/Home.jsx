import About from "../Components/About/About";
import Banner from "../Components/Banner/Banner";
import Faq from "../Components/Faq/Faq";
import PopularServices from "../Components/PopularServices/PopularServices";
import Testimonial from "../Components/Testimonial/Testimonial";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PopularServices></PopularServices>
            <About></About>
            <Testimonial></Testimonial>
            <Faq></Faq>
        </div>
    );
};

export default Home;