import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from "./NavBar";
import ProductsList from "./ProductsList";
import AddProduct from './AddProduct';


const App = () => {
  return (
    <div className="ui container">
        <BrowserRouter>
            <div>
                <NavBar />
                <Routes>
                    <Route path="/" element={<ProductsList />} />
                    <Route path="/add-product" element={<AddProduct />} />
                </Routes>
            </div>
        </BrowserRouter>
    </div>
  );
}

export default App;
