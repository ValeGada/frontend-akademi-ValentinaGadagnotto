import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchProduct } from '../store/actions';
import ProductForm from "./ProductForm";
import styled from 'styled-components';

const Detail = styled.div`
    top: 0;
    padding-top: 70px;
    height: 110vh;
    margin: 1.5em 5em;
`
const EditButton = styled.button`
    margin: 12.5em 35.5em;
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

const ProductDetail = ({ products, fetchProduct }) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const product = products.find(p=>p.id === id);
    
    useEffect(() => {
        if (!product) {
            fetchProduct(id);
        }
    }, [product])

    if (!product) return <p>Cargando...</p>;

    return (
      <Detail>
        <h2>Detalle del Producto</h2>
        <ProductForm
            product={product}
            isEditable={false}
        />
        <EditButton onClick={() => navigate(`/edit-product/${id}`)}>Editar</EditButton>
      </Detail>
    );
};

const mapStateToProps = state => {
    return { products: state.products };
};

export default connect(mapStateToProps, { fetchProduct })(ProductDetail);