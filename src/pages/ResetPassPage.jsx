import {useNavigate, useOutletContext} from "react-router-dom";
import {Button, FormInput, Input} from "../components/core";
import {LinkOutLined} from "../components/core/Link";

const ResetPassPage = () => {
    const navigator = useNavigate();
    const onClickHandler = () => {
        navigator("/home" , {replace:true});
    }
    const setTitle = useOutletContext();
    setTitle("Reset Password");
    return (
        <form>
            <FormInput id="npass" name="pass"
                       title="New Password" placeHolder="enter new password" />
            <FormInput haveSpace={true} name="rpass"
                       id="rpass" title="Repeat Password"
                       placeHolder="repeat new password" />
            <section>
                <Button isFull={true} borderColor="secondary-200"
                        textColor="white" bgColor="primary" onSubmit={onClickHandler}>
                    <p className="py-1">
                        Reset Password
                    </p>
                </Button>
            </section>
        </form>
    );
};

export default ResetPassPage;
