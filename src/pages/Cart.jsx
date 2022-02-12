import {Button, SimpleCard} from "../components/core";
import {Link} from "react-router-dom";

const Cart = () => {
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
                </SimpleCard>

            </div>
        </main>
    );
};

export default Cart;
