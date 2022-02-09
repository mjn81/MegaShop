import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
    return (
        <footer className="w-full border-t-4 border-secondary-100 ">
            <div className="bg-stone-800">
                <section className="text-white text-center w-3/4 mx-auto text-4xl py-6 ">
                    <a href="https://tweeterdummy.com">
                        <FontAwesomeIcon icon={faTwitter} />
                    </a>
                    <a href="https://instagram.com" className="mx-4">
                        <FontAwesomeIcon icon={faInstagram}  />
                    </a>
                    <a href="https://facebook.com">
                        <FontAwesomeIcon icon={faFacebook} />
                    </a>
                    <a href="https://linkedin.com" className="mx-4">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                </section>
                <section className="bg-stone-900 border-t-4 border-zinc-900 w-full text-center text-gray-50 text-lg py-4">
                    Made By MJN
                </section>
            </div>
        </footer>
    );
}
 
export default Footer;