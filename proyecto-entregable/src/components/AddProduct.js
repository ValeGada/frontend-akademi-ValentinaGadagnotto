import React from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addProduct, setMessage } from '../store/actions';
import ProductForm from './ProductForm';
import { AddProductCard, StyledHeader } from '../styles' 


const AddProduct = ({ addProduct, setMessage }) => {
  const navigate = useNavigate();

  // Manejar el envío del formulario
  const handleAddProduct = (product) => {
    addProduct(product); // Envía los datos a Redux y JSON Server
    // alert('Producto agregado correctamente'); // Pasado a Modal
    setMessage('Producto agregado correctamente');
    navigate('/'); // Redirige a la página principal
  };

  return (
    <AddProductCard>
      <StyledHeader>
        <h2>Agregar Producto</h2>
      </StyledHeader>
      <ProductForm
        onSubmit={handleAddProduct}
        isEditable={true}
        onCancel={() => navigate('/')}
      />
    </AddProductCard>
  );
};

export default connect(null, { addProduct, setMessage })(AddProduct);