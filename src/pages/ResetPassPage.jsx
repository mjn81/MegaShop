import {useNavigate, useOutletContext} from "react-router-dom";
import {Button, Input} from "../components/core";
import {LinkOutLined} from "../components/core/Link";

const ResetPassPage = () => {
    const navigator = useNavigate();
    const onClickHandler = () => {
        navigator("/home" , {replace:true});
    }
    const setTitle = useOutletContext();
    setTitle("Reset Password");
    return (
        <>
            <div>
                <label className="text-lg mb-3 block" htmlFor="pass">new Password :</label>
                <Input id="pass" placeHolder="enter new password" />
            </div>
            <div className="mt-6 mb-8">
                <label className="text-lg mb-3 block" htmlFor="newPass">new Password again :</label>
                <Input id="newPass" type="password" placeHolder="enter again" />
            </div>
            <section>
                <Button isFull={true} borderColor="secondary-200"
                        textColor="white" bgColor="primary" onSubmit={onClickHandler}>
                    <p className="py-1">
                        Reset Password
                    </p>
                </Button>
            </section>
        </>
    );
};

export default ResetPassPage;
