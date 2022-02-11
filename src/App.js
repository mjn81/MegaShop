import React , {Suspense} from "react";
import Home from "./pages/Home";
import {BrowserRouter as Router , Navigate , Route, Routes} from "react-router-dom";
import UserLayout from "./Layouts/UserLayout";
import FormLayout from "./Layouts/FormLayout";
import NotFound from "./pages/404";
import Cart from "./pages/Cart";
const ProductList = React.lazy(()=>
   import("./pages/ProductList")
);
const ProductPage = React.lazy(()=>
    import("./pages/ProductPage")
);
const LoginPage  = React.lazy(()=>
   import("./pages/LoginPage")
)
const ForgetPassPage = React.lazy(()=>
    import("./pages/ForgetPassPage")
)
const ResetPassPage = React.lazy(()=>
    import("./pages/ResetPassPage")
)
const RegisterPage = React.lazy(()=>
    import("./pages/RegisterPage")
)
const App = () => {
   return (
      <Router>
         <Suspense fallback={<div>loading...</div>}>
            <Routes>
                <Route path="/" element={<Navigate to="/home" />} />
                <Route path="/" element={<UserLayout />}>
                    <Route path="home" element={<Home />} />
                    <Route path="category/:category/">
                        <Route path="" element={ <ProductList />} />
                        <Route path=":start/:end" element={<ProductList />} />
                    </Route>
                    <Route path="productpage/:id" element={<ProductPage />} />
                    <Route path="Cart" element={<Cart />} />
                    <Route path="*" element={<NotFound />}/>
                </Route>
                <Route path="/Authentication" element={<FormLayout />}>
                    <Route path="Login" element={<LoginPage />} />
                    <Route path="ForgetPass" element={<ForgetPassPage />} />
                    <Route path="ResetPass" element={<ResetPassPage />} />
                    <Route path="Register" element={<RegisterPage />} />
                    <Route path="*" element={<NotFound />}/>
                </Route>
            </Routes>
         </Suspense>
      </Router>
   );
}
 
export default App;
