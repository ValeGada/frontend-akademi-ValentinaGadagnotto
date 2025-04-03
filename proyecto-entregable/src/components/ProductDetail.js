import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchProduct } from '../store/actions';
import ProductForm from "./ProductForm";

const ProductDetail = ({ products, fetchProduct }) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const product = products.find(p=>p.id === id);
    
    // Cargar el producto al montar el componente
    useEffect(() => {
        if (!product) {
            fetchProduct(id);
          }
    }, [product])

    if (!product) return <p>Cargando...</p>;

    return (
      <div>
        <h2>Detalle del Producto</h2>
        <ProductForm 
            product={product}
            isEditable={false}
        />
        <button onClick={() => navigate(`/edit-product/${id}`)}>Editar</button>
      </div>
    );
};

const mapStateToProps = state => {
    return { products: state.products };
};

export default connect(mapStateToProps, { fetchProduct })(ProductDetail);