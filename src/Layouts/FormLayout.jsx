import {Card} from "../components/core";
import {Outlet} from "react-router-dom";
import {useState} from "react";

const FormLayout = () => {
    const [title , setTitle] = useState("");
    return (
        <main className="login-background h-screen flex items-center justify-center">
            <div className="login-display">
                <Card>
                    <h1 className="text-4xl text-center font-extrabold mt-2 mb-8">{title}</h1>
                    <Outlet context={setTitle} />
                </Card>
            </div>

        </main>
    );
};

export default FormLayout;
