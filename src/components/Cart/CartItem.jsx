import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";

import {cartActions} from "../../redux/CartSlice";
import {ReduxAddableInput, Button, SimpleCard} from "../core";


export const CartItem = ({product}) => {
    const dispatch = useDispatch();
    const onRemoveClickHandler = () => {
        dispatch(cartActions.removeFromCart({prodId: product.id , quantity:product.amount }))
    }
    return (
        <div className="mt-4">
            <SimpleCard>
                <div className="grid grid-cols-5 gap-6">
                    <Link to={`/productPage/${product.id}`} className="flex items-center">
                        <img src={product.image} alt={product.title} />
                    </Link>
                    <div className="col-span-4 flex flex-col justify-between">
                        <Link to={`/productPage/${product.id}`} className="w-fit text-lg
                                    hover:text-secondary-200">{product.title}</Link>
                        <div className="flex items-center py-4">
                            <p className="mr-4">
                                Amount :
                            </p>
                            <ReduxAddableInput product={product} />
                        </div>
                        <p>
                            TotalPrice : {Math.round(product.tPrice *100)/100}
                        </p>
                        <div className="bg-rose-500 rounded-lg my-3">
                            <Button isFull={true} noBorder={true} textColor="white" onSubmit={onRemoveClickHandler}>
                                Remove Item
                            </Button>
                        </div>
                    </div>
                </div>
            </SimpleCard>
        </div>
    );
};