import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from "./NavBar";
import ProductsList from "./ProductsList";
import ProductDetail from './ProductDetail';
import AddProduct from './AddProduct';
import ProductEdit from './ProductEdit';
import Modal from './Modal';
import { AppContainer } from '../styles';
import { connect } from 'react-redux';

const App = ({message}) => {
  console.log('message: ', message);
  return (
    <AppContainer imgurl={'https://images.unsplash.com/photo-1678924587662-d8c63e57eb11?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}>
      <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<ProductsList />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/edit-product/:id" element={<ProductEdit />} />
            <Route path="/add-product" element={<AddProduct />} />
          </Routes>
      </BrowserRouter>
      <Modal isOpen={Boolean(message)}>
        <p>{message}</p>
      </Modal>
    </AppContainer>
  );
}

const mapStateToProps = state => {
  return { message: state.products.message }
}

export default connect(mapStateToProps)(App);