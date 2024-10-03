import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import K from "../constants/index";

const Offers = () => {
    return (
        <div className="grid grid-cols-3 w-3/5 mx-auto gap-12">
            {
                //"offer" is a generic semantic name for current value
                K.OFFERS.map((offer, index) => {
                    console.log(`${index}: ${offer.text}`);
                    return (<div key={index} className="flex flex-col gap-y-2">
                        <span className="p-4 bg-black w-fit text-white rounded-full text-2xl">
                            <FontAwesomeIcon icon={offer.icon} />
                        </span>
                        <h3 className="text-2xl font-semibold">{offer.text}</h3>
                        <p>{offer.description}</p>
                    </div>)
                })
            }
            
        </div>
    )

}

export default Offers;