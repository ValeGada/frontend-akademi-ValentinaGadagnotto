import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from "./NavBar";
import ProductsList from "./ProductsList";
import ProductDetail from './ProductDetail';
import AddProduct from './AddProduct';
import ProductEdit from './ProductEdit';
import ProductDelete from './ProductDelete';
import styled from 'styled-components';

const AppContainer = styled.div`
  width: 100%;
  heigth: 100%;
  margin: 0;
  padding: 0;
  top:0;
  font-family: Helvetica, sans-serif;
  font-weight: 400;
  background-size: contain;
  background-repeat: no-repeat;
  background: url(${(props)=>props.imgUrl});
`

const App = () => {
  return (
    <AppContainer imgUrl={'https://images.unsplash.com/photo-1678924587662-d8c63e57eb11?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}>
      <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<ProductsList />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/edit-product/:id" element={<ProductEdit />} />
            <Route path="/add-product" element={<AddProduct />} />
            <Route path="/delete-product/:id" element={<ProductDelete />} />
          </Routes>
      </BrowserRouter>
    </AppContainer>
  );
}

export default App;