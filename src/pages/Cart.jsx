import {SimpleCard} from "../components/core";

const Cart = () => {
    return (
        <main className="w-3/4 mx-auto my-4 grid grid-cols-3 gap-6">
            <div className="col-span-2">
                <SimpleCard>
                    <div className="pb-3 border-b-2 border-secondary-200">
                        <h1 className="text-3xl">Cart</h1>
                    </div>
                    <div className="mt-4">
                        <SimpleCard>

                        </SimpleCard>
                    </div>
                </SimpleCard>

            </div>
        </main>
    );
};

export default Cart;
