import React from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addProduct } from '../store/actions';
import ProductForm from './ProductForm';

const AddProduct = ({ addProduct }) => {
  const navigate = useNavigate();

  // Manejar el envío del formulario
  const handleAddProduct = (product) => {
    addProduct(product); // Envía los datos a Redux y JSON Server
    alert('Producto agregado correctamente');
    navigate('/'); // Redirige a la página principal
  };

  return (
    <div>
      <h2>Agregar Producto</h2>
      <ProductForm
        onSubmit={handleAddProduct}
        isEditable={true}
      />
    </div>
  );
};

export default connect(null, { addProduct })(AddProduct);