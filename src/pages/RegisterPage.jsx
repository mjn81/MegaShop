import {Button, Input} from "../components/core";
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
        <>
            <div>
                <label className="text-lg mb-3 block" htmlFor="fullname">FullName :</label>
                <Input id="fullname" placeHolder="enter your FullName" />
            </div>
            <div className="mt-6 mb-8">
                <label className="text-lg mb-3 block" htmlFor="email">Email :</label>
                <Input id="email" type="email" placeHolder="enter your email" />
            </div>
            <div>
                <label className="text-lg mb-3 block" htmlFor="username">Username :</label>
                <Input id="username" placeHolder="choose a username" />
            </div>
            <div className="mt-6 mb-8">
                <label className="text-lg mb-3 block" htmlFor="pass">Password :</label>
                <Input id="pass" type="password" placeHolder="password" />
            </div>
            <div className="mb-6">
                <CheckBox text="I Agree to terms & policies" onClick={onCheckHandler} />
            </div>
            <section>
                <Button isFull={true} borderColor="secondary-200"
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
        </>
    );
};

export default RegisterPage;
