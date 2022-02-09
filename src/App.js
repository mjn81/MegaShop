import Home from "./pages/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import ProductList from "./pages/ProductList";

const App = () => {
   return (
      <>
         <Header />
            <Routes> 
               <Route path="/" element={<Home />} />
               <Route path="/category/:category/">
                  <Route path="" element={<ProductList />} />
                  <Route path=":limit" element={<ProductList />} />
               </Route>
            </Routes>
         <Footer />
      </>
   );
}
 
export default App;
