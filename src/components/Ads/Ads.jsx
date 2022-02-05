import { Link } from "react-router-dom";
const Ads = () => {
        const tmpAds = [
        {
            "id":1,
            "img":"https://via.placeholder.com/450",
            "path":"/adsss",
            "title":"img1"
        },
        {
            "id":2,
            "img":"https://via.placeholder.com/450",
            "path":"/adsss",
            "title":"img2"
        },
    ]
    return (
         <div className="grid gap-5">
            {tmpAds?.map(ads=>(
                <div key={ads.id} className="rounded-lg overflow-hidden">
                    <Link to={ads.path} className="block m-auto">
                        <img src={ads.img} alt={ads.title} className="w-full max-h-56 object-cover" />
                    </Link>
                </div>
            ))}
        </div>
      );
}
 
export default Ads;