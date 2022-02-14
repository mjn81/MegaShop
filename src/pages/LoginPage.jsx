import {Button, Input} from "../components/core";
import {LinkOutLined} from "../components/core/Link";
import CheckBox from "../components/core/CheckBox";
import {authActions} from "../redux/AutheSlice";

import {useNavigate, useOutletContext} from "react-router-dom";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";

const LoginPage = () => {
    const dispatch = useDispatch();
    const navigator = useNavigate()
    const onCheckedHandler = () => {
        // handling checkbox
    }
    const onLoginHandler = () => {
        //  TODO: handle token fetching
        dispatch(authActions.logIn({token:'lkmvfldkmvkdfmv'}));
        navigator('/home', {replace:true});
    }

    const setTitle = useOutletContext();
    setTitle("Login");



    return (
        <form>
            <div>
                <label className="text-lg mb-3 block" htmlFor="username">Username :</label>
                <Input id="username" placeHolder="username or email" />
            </div>
            <div className="mt-6 mb-8">
                <label className="text-lg mb-3 block" htmlFor="pass">Password :</label>
                <Input id="pass" type="password" placeHolder="password" />
            </div>

            <section>
                <div className="mb-6">
                    <CheckBox text="Remember me" onClick={onCheckedHandler} />
                </div>
                <Button isFull={true} borderColor="primary"
                        textColor="white" bgColor="primary" onSubmit={onLoginHandler}>
                    <p className="py-1">
                        Login
                    </p>
                </Button>
                <div className="bg-orange-300 rounded-lg my-3">
                    <Link to="/Authentication/Register"
                          className="text-white font-bold text-center">
                        <p className="py-3">register</p>
                    </Link>
                </div>
            </section>
            <section className="flex justify-between">
                <LinkOutLined path="/Authentication/ForgetPass">
                    <p className="hover:underline">forget password?</p>
                </LinkOutLined>
                <LinkOutLined path="/home">
                    <p className="text-cyan-600">back to home</p>
                </LinkOutLined>
            </section>
        </form>
    );
};

export default LoginPage;
