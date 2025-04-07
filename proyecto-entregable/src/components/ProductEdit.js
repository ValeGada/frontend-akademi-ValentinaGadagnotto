import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { fetchProduct, editProduct, setMessage } from '../store/actions';
import ProductForm from './ProductForm';
import { Card, StyledImageGrid, StyledHeader, FlexGap, BackIcon } from '../styles';


const ProductEdit = ({ selectedProduct, fetchProduct, editProduct, setMessage }) => {
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
    // alert('Producto actualizado correctamente'); // Pasado a modal
    setMessage('Producto editado correctamente');
    navigate('/'); // Redirige a la página principal
  };

  if (!selectedProduct) return <p>Cargando...</p>;

  return (
    <Card>
      <StyledImageGrid>
        <img src={selectedProduct.image_url} width={300} style={{objectFit: 'contain'}}/>
      </StyledImageGrid>
      <StyledHeader>
        <h2>Editar Producto</h2>
      </StyledHeader>
      <ProductForm
        product={selectedProduct}
        onSubmit={handleEditProduct}
        isEditable={true}
        onCancel={() => navigate(-1)}
      />
    </Card>
  );
};

const mapStateToProps = state => {
  return { selectedProduct: state.products.selected };
};

export default connect(mapStateToProps, { fetchProduct, editProduct, setMessage })(ProductEdit);