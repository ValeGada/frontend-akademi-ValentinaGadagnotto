import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from "./NavBar";
import ProductsList from "./ProductsList";
import ProductDetail from './ProductDetail';
import AddProduct from './AddProduct';


const App = () => {
  return (
    <div className="ui container">
        <BrowserRouter>
            <div>
                <NavBar />
                <Routes>
                    <Route path="/" element={<ProductsList />} />
                    <Route path="/product/:id" element={<ProductDetail />} />
                    <Route path="/add-product" element={<AddProduct />} />
                </Routes>
            </div>
        </BrowserRouter>
    </div>
  );
}

export default App;
