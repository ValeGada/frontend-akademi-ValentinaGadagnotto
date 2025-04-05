import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchProduct } from '../store/actions';
import ProductForm from "./ProductForm";
import styled from 'styled-components';

const Detail = styled.div`
    top: 0;
    padding-top: 70px;
    height: 100%;
    margin: 1.5em;
    justify-items: center;
`
const DetailButton = styled.button`
    margin: 1.85em;
    justify-self: center;
    padding: 3px 10px;
    cursor: pointer;
    background: #e0e1e2;
    color: #555555;
    transition: all .3s ease;
    border: 3px solid #e0e1e2;
    border-radius: 5px;

    &:hover{
    text-decoration: none;
    color: #f1f1f1;
    background: #555555;
    border: 3px solid #555555;
    }
`

const ProductDetail = ({ selectedProduct, fetchProduct }) => {
    const { id } = useParams();
    const navigate = useNavigate();
    
    useEffect(() => {
        if (!selectedProduct) {
            fetchProduct(id);
        }
    }, [id])

    if (!selectedProduct) return <p>Cargando...</p>;

    return (
      <Detail>
        <h2>Detalle del Producto</h2>
        <ProductForm
            product={selectedProduct}
            isEditable={false}
        />
        <DetailButton onClick={() => navigate(`/edit-product/${id}`)}>Editar</DetailButton>
        <DetailButton onClick={() => navigate('/')}>Cancelar</DetailButton>
      </Detail>
    );
};

const mapStateToProps = state => {
    return { selectedProduct: state.products.selected };
};

export default connect(mapStateToProps, { fetchProduct })(ProductDetail);