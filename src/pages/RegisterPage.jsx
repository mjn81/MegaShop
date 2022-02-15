import {Button, FormInput} from "../components/core";
import {useOutletContext} from "react-router-dom";
import CheckBox from "../components/core/CheckBox";
import {LinkOutLined} from "../components/core/Link";

const RegisterPage = () => {
    const onCheckHandler = () => {
        // on checkbox checked
    }
    const setTitle = useOutletContext();
    setTitle("Register");
    return (
        <form>
            <FormInput id="fullName" name="name"
                       title="FullName" placeHolder="enter your FullName"/>
            <FormInput haveSpace={true} name="email"
                       id="email" type="email" title="Email"
                       placeHolder="enter your email"/>
            <FormInput name="username" id="username"
                       title="Username" placeHolder="choose a username"/>
            <FormInput haveSpace={true} name="password"
                       id="password" type="password" title="Password"
                       placeHolder="choose a password"/>
            <div className="mb-6">
                <CheckBox text="I Agree to terms & policies" onClick={onCheckHandler}/>
            </div>
            <section>
                <Button isFull={true} noBorder={true} borderColor="secondary-200"
                        textColor="white" bgColor="primary">
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
