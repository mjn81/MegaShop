import Home from "./pages/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import ProductList from "./pages/ProductList";
import ProductPage from "./pages/ProductPage";
const App = () => {
   return (
      <>
         <Header />
            <Routes> 
               <Route path="/" element={<Home />} />
               <Route path="/category/:category/">
                  <Route path="" element={<ProductList />} />
                  <Route path=":start/:end" element={<ProductList />} />
               </Route>
               <Route path="/productpage/:id" element={<ProductPage />} />
            </Routes>
         <Footer />
      </>
   );
}
 
export default App;
