import {Button, SimpleCard} from "../components/core";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCartPlus} from "@fortawesome/free-solid-svg-icons";

const Cart = () => {
    // TODO: redux implementation
    return (
        <main className="w-3/4 mx-auto my-4 grid grid-cols-3 gap-6">
            <div className="col-span-2">
                <SimpleCard>
                    <div className="pb-3 border-b-2 border-secondary-200">
                        <h1 className="text-3xl">Cart</h1>
                    </div>
                    <div className="mt-4">
                        {/* TODO:static card list until redux implementation */}
                        <SimpleCard>
                            <div className="grid grid-cols-5 gap-6">
                                <Link to="">
                                    <img src="https://via.placeholder.com/1000" alt="lsd"/>
                                </Link>
                                <div className="col-span-4 flex flex-col justify-between">
                                    <Link to="dsjkn" className="w-fit text-2xl
                                    hover:text-secondary-200">title</Link>
                                    <p>
                                        Amount : 5
                                    </p>
                                    <div className="bg-rose-500 rounded-lg">
                                        <Button isFull={true} noBorder={true} textColor="white">
                                            Remove Item
                                        </Button>
                                    </div>

                                </div>
                            </div>
                        </SimpleCard>
                    </div>
                    <div className="mt-4">
                        {/* TODO:static card list until redux implementation */}
                        <SimpleCard>
                            <div className="grid grid-cols-5 gap-6">
                                <Link to="">
                                    <img src="https://via.placeholder.com/1000" alt="lsd"/>
                                </Link>
                                <div className="col-span-4 flex flex-col justify-between">
                                    <Link to="dsjkn" className="w-fit text-2xl
                                    hover:text-secondary-200">title</Link>
                                    <p>
                                        Amount : 5
                                    </p>
                                    <div className="bg-rose-500 rounded-lg">
                                        <Button isFull={true} noBorder={true} textColor="white">
                                            Remove Item
                                        </Button>
                                    </div>

                                </div>
                            </div>
                        </SimpleCard>
                    </div>
                    <div className="mt-4">
                        {/* TODO:static card list until redux implementation */}
                        <SimpleCard>
                            <div className="grid grid-cols-5 gap-6">
                                <Link to="">
                                    <img src="https://via.placeholder.com/1000" alt="lsd"/>
                                </Link>
                                <div className="col-span-4 flex flex-col justify-between">
                                    <Link to="dsjkn" className="w-fit text-2xl
                                    hover:text-secondary-200">title</Link>
                                    <p>
                                        Amount : 5
                                    </p>
                                    <div className="bg-rose-500 rounded-lg">
                                        <Button isFull={true} noBorder={true} textColor="white">
                                            Remove Item
                                        </Button>
                                    </div>

                                </div>
                            </div>
                        </SimpleCard>
                    </div>
                </SimpleCard>

            </div>
            <div>
                <SimpleCard>
                    <div className="pb-3 border-b-2 border-secondary-200">
                        <h3 className="text-3xl">Info</h3>
                    </div>
                    <section className="mt-4 text-lg font-light grid gap-3">
                        <p>Total Amount : 100$</p>
                        <p>Total Quantity : 20</p>
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
