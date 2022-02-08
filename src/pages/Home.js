import Ads from "../components/Ads/Ads";
import Carousel from "../components/Carousel/Carousel";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Latest , Populars } from "../components/Offers&Limits/Offers";
const Home = () => {

    return (
        <>
            {/* header and navbar component */}
            <Header />
            {/* slider & Ads [hero area] */}
            <section className="md:grid md:grid-cols-3 md:gap-5 my-5 mx-auto w-3/4">
                <div className="col-span-2">
                    <Carousel />
                </div>
                <div className="col-span-1">
                   <Ads />
                </div>
            </section>
            <main>
                <section className="shadow-lg w-3/4 mx-auto rounded-lg  my-10">
                    <Latest />
                </section>
                <section className="shadow-lg w-3/4 mx-auto rounded-lg  my-10">
                    <Populars />
                </section>
            </main>
            <Footer />
        </>
    );
}
 
export default Home;