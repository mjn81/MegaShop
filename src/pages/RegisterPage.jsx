import {useOutletContext , useNavigate} from "react-router-dom";
import { useRef } from "react";
import {useSelector} from "react-redux";

import {Button, FormInput} from "../components/core";
import CheckBox from "../components/core/CheckBox";
import {LinkOutLined} from "../components/core/Link";
import { register, useFetchUser } from "../api";

const RegisterPage = () => {
    const emailRef = useRef();
    const passRef = useRef();    
    const navigator = useNavigate();
    const onCheckHandler = () => {
        // on checkbox checked
    }

    const onRegisterHandler = (e) => {
        e.preventDefault();
        register(emailRef.current.value , passRef.current.value).then(()=>{
            navigator('/Authentication/Login');
        })
    }
    

    const setTitle = useOutletContext();
    setTitle("Register");
    return (
        <form>
            {/* <FormInput id="fullName" name="name"
                       title="FullName" placeHolder="enter your FullName"/> */}
            <FormInput name="email" reference={emailRef}
                       id="email" type="email" title="Email"
                       placeHolder="enter your email"/>
            {/* <FormInput name="username" id="username"
                       title="Username" placeHolder="choose a username"/> */}
            <FormInput haveSpace={true} name="password" reference={passRef}
                       id="password" type="password" title="Password"
                       placeHolder="choose a password"/>
            <div className="mb-6">
                <CheckBox text="I Agree to terms & policies" onClick={onCheckHandler}/>
            </div>
            <section>
                <Button isFull={true} noBorder={true} borderColor="secondary-200"
                        textColor="white" bgColor="primary" onSubmit={onRegisterHandler}>
                    <p className="py-1">
                        Register
                    </p>
                </Button>
            </section>
            <section className="flex justify-center mt-4">
                <LinkOutLined path="/Authentication/Login">
                    <p className="text-cyan-600">back to Login</p>
                </LinkOutLined>
            </section>
        </form>
    );
};

export default RegisterPage;
