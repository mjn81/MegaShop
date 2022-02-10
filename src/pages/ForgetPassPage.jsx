import {Button, Input} from "../components/core";
import {useNavigate, useOutletContext} from "react-router-dom";
import {LinkOutLined} from "../components/core/Link";

const ForgetPassPage = () => {
    const navigate = useNavigate();
    const onSubmit = () => {
        console.log("token is gotten");
        navigate("/Authentication/ResetPass" , {replace:true});
    }
    const setTitle = useOutletContext();
    setTitle("Get SMS Code");
    return (
        <>
            <p className="text-center">we will send you a code via sms</p>
            <div className="mb-6">
                <label className="text-lg mb-3 block" htmlFor="phoneNum">Mobile :</label>
                <Input id="phoneNum" placeHolder="enter phone number" />
            </div>
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
        </>
    );
};

export default ForgetPassPage;
