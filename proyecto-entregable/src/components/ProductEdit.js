import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchProduct, editProduct } from '../store/actions';
import ProductForm from './ProductForm';
import styled from 'styled-components';

const Edit = styled.div`
    top: 0;
    padding-top: 70px;
    height: 110vh;
    margin: 1.5em 5em;    
    justify-items: center;
`

const ProductEdit = ({ selectedProduct, fetchProduct, editProduct }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Cargar el producto al montar el componente
  useEffect(() => {
    if (!selectedProduct) {
      fetchProduct(id);
    }
  }, [selectedProduct, fetchProduct, id]);

  // Manejar el envío del formulario
  const handleEditProduct = (updatedProduct) => {
    const productId = selectedProduct.id;
    editProduct(productId, updatedProduct); // Envía los datos a Redux y JSON Server
    alert('Producto actualizado correctamente'); // Pasar a modal
    navigate('/'); // Redirige a la página principal
  };

  if (!selectedProduct) return <p>Cargando...</p>;

  return (
    <Edit>
      <h2>Editar Producto</h2>
      <ProductForm
        product={selectedProduct}
        onSubmit={handleEditProduct}
        isEditable={true}
        onCancel={() => navigate(`/product/${selectedProduct.id}`)}
      />
    </Edit>
  );
};

const mapStateToProps = state => {
  return { selectedProduct: state.products.selected };
};

export default connect(mapStateToProps, { fetchProduct, editProduct })(ProductEdit);