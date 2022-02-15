import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCartPlus, faTags, faBars} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import {Button, Card} from ".";
import Rating from "./Rating";
import {cartActions} from "../../redux/CartSlice";

export const ProductCard = ({product}) => {
    const dispatch = useDispatch();

    const logState = useSelector(state => state.auth.loggedIn);
    const onAddHandler = () => {
        if (logState) {
            dispatch(cartActions.addToCart({
                prod: {...product, amount: 1},
                quantity: 1
            }))
        } else {
            //TODO : show warning card
        }
    }

    return (
        <Card key={product.id}>
            <Link to={`/productPage/${product.id}`}>
                <div className="h-80 overflow-hidden ">
                    <img className="w-full object-cover" src={product.image} alt={product.title}/>
                </div>
            </Link>
            <section className="my-3">
                <Link to={`/productPage/${product.id}`}>
                    <h4 className="font-bold ">
                        {product.title}
                    </h4>
                    <section className="flex justify-between text-gray-500 my-4">
                        <h6 className="">
                            <FontAwesomeIcon icon={faTags}/>
                            <span className="mx-2">${product.price}</span>
                        </h6>
                        <p>
                            <FontAwesomeIcon icon={faBars}/>
                            <span className="m-2">{product.category}</span>
                        </p>
                        <Rating rate={product.rating.rate}/>
                    </section>
                </Link>
                <div>
                    <Button textColor='primary' borderColor='secondary-200' onSubmit={onAddHandler}>
                        Add to Cart
                        <FontAwesomeIcon icon={faCartPlus}/>
                    </Button>
                </div>
            </section>

        </Card>
    );
}
