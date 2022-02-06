import Ads from "../components/Ads/Ads";
import Carousel from "../components/Carousel/Carousel";
import Header from "../components/Header/Header";
import Offers from "../components/Offers&Limits/Offers";
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
            <section className="shadow-lg w-3/4 mx-auto rounded-lg  my-10">
                <Offers />
            </section>
        </>
    );
}
 
export default Home;