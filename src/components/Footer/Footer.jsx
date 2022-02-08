import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
    return (
        <footer className="w-full h-36 border-t-4 border-secondary-100 ">
            <div className="bg-stone-800 h-full flex">
                <section className="text-white">
                    <FontAwesomeIcon icon="fa-brands fa-twitter" />
                </section>
            </div>
        </footer>
    );
}
 
export default Footer;