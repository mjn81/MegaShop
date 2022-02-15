import {Button, FormInput} from "../components/core";
import {useNavigate, useOutletContext} from "react-router-dom";
import {LinkOutLined} from "../components/core/Link";

const ForgetPassPage = () => {
    const navigate = useNavigate();
    const onSubmit = () => {
        console.log("token is gotten");
        navigate("/Authentication/ResetPass", {replace: true});
    }
    const setTitle = useOutletContext();
    setTitle("Get Code");
    return (
        <form>
            <p className="text-center">we will send you a code via sms</p>
            <FormInput name="phoneNumber" haveSpace={true} id="phone"
                       type="phone" title="Phone Number" placeHolder="enter your phone number"/>
            <Button isFull={true} onSubmit={onSubmit} borderColor="secondary-200"
                    textColor="white" bgColor="primary">
                <p className="py-1">
                    Get Code
                </p>
            </Button>
            <section className="flex justify-center mt-4">
                <LinkOutLined path="/Authentication/Login">
                    <p className="text-cyan-600">back to Login</p>
                </LinkOutLined>
            </section>
        </form>
    );
};

export default ForgetPassPage;
