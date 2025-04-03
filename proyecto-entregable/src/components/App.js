import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from "./NavBar";
import ProductsList from "./ProductsList";
import ProductDetail from './ProductDetail';
import AddProduct from './AddProduct';
import DeleteModal from './DeleteModal';
import ProductEdit from './ProductEdit';


const App = () => {
  return (
    <div className="ui container">
      <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<ProductsList />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/edit-product/:id" element={<ProductEdit />} />
            <Route path="/add-product" element={<AddProduct />} />
            <Route path="/delete-product" element={<DeleteModal />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;