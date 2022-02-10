import React , {Suspense} from "react";
import Home from "./pages/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import {BrowserRouter as Router , Navigate , Route, Routes} from "react-router-dom";
import UserLayout from "./Layouts/UserLayout";
const ProductList = React.lazy(()=>
   import("./pages/ProductList")
);
const ProductPage = React.lazy(()=>
    import("./pages/ProductPage")
);
const LoginPage  = React.lazy(()=>
   import("./pages/LoginPage")
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
                </Route>
            </Routes>
         </Suspense>
      </Router>
   );
}
 
export default App;
