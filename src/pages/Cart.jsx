import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCartPlus} from "@fortawesome/free-solid-svg-icons";
import {useSelector} from "react-redux";

import {Button, SimpleCard} from "../components/core";
import {CartItem} from "../components/Cart";

const Cart = () => {
    // TODO: redux implementation
    const cart =  useSelector(state => state.cart.cart);
    const total  = useSelector(state => state.cart.total);
    const quantity = useSelector(state => state.cart.quantity);
    return (
        <main className="w-3/4 mx-auto my-4 grid grid-cols-3 gap-6">
            <div className="col-span-2">
                <SimpleCard>
                    <div className="pb-3 border-b-2 border-secondary-200">
                        <h1 className="text-3xl">Cart</h1>
                    </div>
                    {cart.map((product, index) => (
                        <CartItem product={product} key={index} />
                    ))}
                </SimpleCard>
            </div>
            <div>
                <SimpleCard>
                    <div className="pb-3 border-b-2 border-secondary-200">
                        <h3 className="text-3xl">Info</h3>
                    </div>
                    <section className="mt-4 text-lg font-light grid gap-3">
                        <p>Total Amount : ${Math.round(100*total)/100}</p>
                        <p>Total Quantity : {quantity}</p>
                        <p>Shipment to : Africa</p>
                        <p>Arrival Time Estimation : 20d</p>
                        <div className="rounded-lg bg-primary my-2">
                            <Button isFull={true} noBorder={true} textColor="white">
                                Buy
                                <FontAwesomeIcon icon={faCartPlus}/>
                            </Button>
                        </div>
                    </section>
                </SimpleCard>
            </div>
        </main>
    );
};

export default Cart;
