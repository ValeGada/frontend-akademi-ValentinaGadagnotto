import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { fetchProduct } from '../store/actions';
import ProductForm from "./ProductForm";
import { Card, StyledImageGrid, StyledHeader, FlexGap, EditIcon, BackIcon, EmptyDiv } from '../styles';


const ProductDetail = ({ selectedProduct, fetchProduct, isLoading }) => {
    const { id } = useParams();
    
    useEffect(() => {
        if (!selectedProduct || selectedProduct.id !== id) {
            fetchProduct(id);
        }
    }, [id, fetchProduct ]);

    if (isLoading) {
        return <p>Cargando...</p>
    }

    // if (!selectedProduct || selectedProduct.id !== parseInt(id)) return <p>Cargando...</p>;

    return (
      <Card>
        <StyledImageGrid>
            <img src={selectedProduct?.image_url} width={300} style={{objectFit: 'contain'}}/>
        </StyledImageGrid>
        <StyledHeader>
            <FlexGap>
                <div><h2><Link to='/'><BackIcon className="ui left arrow icon"/></Link></h2></div>
                <div><h2>Detalle del Producto</h2></div>
                <div><h2><Link to={`/edit-product/${id}`}><EditIcon className="ui edit icon"/></Link></h2></div>                
            </FlexGap>
        </StyledHeader>
        <ProductForm
            product={selectedProduct}
            isEditable={false}
        />
        <EmptyDiv></EmptyDiv>
      </Card>
    );
};

const mapStateToProps = state => {
    return { selectedProduct: state.products.selected, isLoading: state.products.isLoading };
};

export default connect(mapStateToProps, { fetchProduct })(ProductDetail);