import React from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addProduct } from '../store/actions';
import ProductForm from './ProductForm';
import styled from 'styled-components';

const Add = styled.div`
    top: 0;
    padding-top: 70px;
    height: 110vh;
    margin: 1.5em 5em;
    justify-items: center;
`

const AddProduct = ({ addProduct }) => {
  const navigate = useNavigate();

  // Manejar el envío del formulario
  const handleAddProduct = (product) => {
    addProduct(product); // Envía los datos a Redux y JSON Server
    alert('Producto agregado correctamente'); // Modal
    navigate('/'); // Redirige a la página principal
  };

  return (
    <Add>
      <h2>Agregar Producto</h2>
      <ProductForm
        onSubmit={handleAddProduct}
        isEditable={true}
      />
    </Add>
  );
};

export default connect(null, { addProduct })(AddProduct);