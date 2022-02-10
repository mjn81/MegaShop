import {Button, Card, Input} from "../components/core";
import {LinkOutLined} from "../components/core/Link";
import {Link} from "react-router-dom";
const LoginPage = () => {
    return (
        <main className="login-background h-screen flex items-center justify-center">
            <div className="w-1/4">
                <Card>
                    <h1 className="text-4xl text-center font-extrabold mt-2 mb-8">Login</h1>
                    <div>
                        <label className="text-lg mb-3 block" htmlFor="username">Username :</label>
                        <Input id="username" placeHolder="username or email" />
                    </div>
                    <div className="mt-6 mb-8">
                        <label className="text-lg mb-3 block" htmlFor="pass">Password :</label>
                        <Input id="pass" type="password" placeHolder="password" />
                    </div>

                    <section>

                        <Button isFull={true} borderColor="secondary-200"
                                textColor="white" bgColor="primary">
                            <p className="py-1">
                                Login
                            </p>
                        </Button>
                        <div className="bg-slate-300 rounded-lg my-3 transition-shadow duration-200 hover:shadow-md">
                            <Button isFull={true} textColor="white">
                                <p className="py-1">register</p>
                            </Button>
                        </div>
                    </section>
                    <section className="flex justify-between">
                        <LinkOutLined path="forgetPass/otp">
                            <p className="hover:underline">forget password?</p>
                        </LinkOutLined>
                        <LinkOutLined path="/home">
                            <p className="text-cyan-600">back to home</p>
                        </LinkOutLined>
                    </section>
                </Card>
            </div>

        </main>
    );
};

export default LoginPage;
