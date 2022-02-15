import {Button, FormInput} from "../components/core";
import {LinkOutLined} from "../components/core/Link";
import CheckBox from "../components/core/CheckBox";
import { login } from "../api";

import {useNavigate, useOutletContext} from "react-router-dom";
import {Link} from "react-router-dom";
import { useRef } from "react";
import { useSelector } from "react-redux";

const LoginPage = () => {
    const navigator = useNavigate()
    const emailRef = useRef();
    const passwordRef = useRef();
    const logState = useSelector(state => state.auth.loggedIn);
    const onCheckedHandler = () => {
        // handling checkbox
    }



    const onLoginHandler = (e) => {
        e.preventDefault();
      
        login(emailRef.current.value , passwordRef.current.value).then(()=>{      
            if(logState){
                navigator('/home', {replace: true});
            }
        });
    }

    const setTitle = useOutletContext();
    setTitle("Login");


    return (
        <form>
            <FormInput name="email" id="email" reference={emailRef}
                       title="Email" placeHolder="enter your email"/>
            <FormInput haveSpace={true} name="password" reference={passwordRef}
                       id="password" type="password" title="Password"
                       placeHolder="enter password"/>
            <section>
                <div className="mb-6">
                    <CheckBox text="Remember me" onClick={onCheckedHandler}/>
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
