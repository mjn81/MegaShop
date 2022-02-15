import {useParams} from "react-router-dom";
import {faBars, faWarehouse} from "@fortawesome/free-solid-svg-icons";
import {faStar} from "@fortawesome/free-regular-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";

import {useFetchId} from "../api";
import Rating from "../components/core/Rating";
import {AddableInput, Button} from "../components/core";
import {cartActions} from "../redux/CartSlice";

const ProductPage = () => {
    const {id} = useParams();
    const [res, isLoading, error] = useFetchId(id);
    const [number, setNumber] = useState(1);
    const dispatch = useDispatch();
    const logState = useSelector(state => state.auth.loggedIn);
    const onAddClickHandler = () => {
        //TODO : writing hooks for add and delete (optional)
        if (logState) {
            dispatch(cartActions.addToCart({
                prod: {...res, amount: number},
                quantity: number
            }))
        } else {
            // TODO: warning card show
        }
    }

    const quantity = 100;
    return (
        <article className="w-3/4 mx-auto my-6 shadow-sm rounded-xl px-4">
            {!isLoading &&
                <main>
                    <section className="grid grid-cols-3 py-6">
                        <div className="mx-3">
                            <img src={res.image} alt=""/>
                            <div className="my-4 flex text-2xl text-gray-700 justify-center">
                                <h4 className="mr-2">Price : </h4><p>${res.price}</p>
                            </div>
                            <div className="my-4">
                                <div
                                    className="mx-auto my-4 flex flex-col 2xl:flex-row justify-between items-center px-2">
                                    <h4 className="mx-4">Quantity :</h4>
                                    <AddableInput value={number} setValue={setNumber}/>
                                </div>
                                <Button isFull={true} borderColor="primary"
                                        textColor="white" bgColor="primary" onSubmit={onAddClickHandler}>
                                    Add to cart
                                </Button>
                            </div>
                        </div>
                        <section className="mx-3 mb-2 col-span-2">
                            <section className="border-b-2 pb-2 mb-3 border-secondary-200 text-2xl">
                                <h1>{res.title}</h1>
                            </section>
                            <h3 className="text-xl mb-3">description : </h3>
                            <p className="text-gray-800">{res.description}</p>
                            <section className="grid grid-cols-3 my-4 text-gray-500 ">
                                <div className="flex items-center">
                                    <FontAwesomeIcon icon={faBars}/>
                                    <p className="px-1">Category : {res.category}</p>
                                </div>
                                <div className="flex items-center">
                                    <FontAwesomeIcon icon={faStar}/>
                                    <p className="mx-1">Rating :</p>
                                    <Rating rate={res.rating.rate}/>
                                    <p className="ml-2">from {res.rating.count} view</p>
                                </div>
                                <div className="flex items-center">
                                    <FontAwesomeIcon icon={faWarehouse}/>
                                    {/*this feature is not implemented in fakestore api*/}
                                    <p className="ml-2">Quantity : {quantity} left</p>
                                </div>
                            </section>
                        </section>
                    </section>
                </main>}
        </article>
    );
}

export default ProductPage;