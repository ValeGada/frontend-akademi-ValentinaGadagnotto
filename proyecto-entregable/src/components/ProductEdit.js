import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchProduct, editProduct } from '../store/actions';
import ProductForm from './ProductForm';

const ProductEdit = ({ products, fetchProduct, editProduct }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find(p=>p.id === id);

  // Cargar el producto al montar el componente
  useEffect(() => {
    if (!product) {
      fetchProduct(id);
    }
  }, [product, fetchProduct, id]);

  // Manejar el envío del formulario
  const handleEditProduct = (updatedProduct) => {
    const productId = product.id;
    editProduct(productId, updatedProduct); // Envía los datos a Redux y JSON Server
    alert('Producto actualizado correctamente'); // Pasar a modal
    navigate('/'); // Redirige a la página principal
  };

  if (!product) return <p>Cargando...</p>;

  return (
    <div>
      <h2>Editar Producto</h2>
      <ProductForm
        product={product}
        onSubmit={handleEditProduct}
        isEditable={true}
        onCancel={() => navigate('/')}
      />
    </div>
  );
};

const mapStateToProps = state => {
  return { products: state.products };
};

export default connect(mapStateToProps, { fetchProduct, editProduct })(ProductEdit);