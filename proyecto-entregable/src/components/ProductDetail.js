import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { editProduct, fetchProduct, setMessage } from '../store/actions';
import ProductForm from "./ProductForm";
import { Card, StyledImageGrid, StyledHeader, FlexGap, EditIcon, BackIcon, EmptyDiv } from '../styles';


const ProductDetail = ({ selectedProduct, fetchProduct, isLoading, editProduct, setMessage }) => {
    const [isEditable, setIsEditable] = useState(false);
    const { id } = useParams();
    const navigate = useNavigate();
    
    useEffect(() => {
        if (!selectedProduct || selectedProduct.id !== id) {
            fetchProduct(id);
        }
    }, [id, fetchProduct ]);

    if (isLoading) {
        return <p>Cargando...</p>
    }

    // Manejar el envío del formulario
    const handleEditProduct = (updatedProduct) => {
        const productId = selectedProduct.id;
        editProduct(productId, updatedProduct); // Envía los datos a Redux y JSON Server
        setMessage('Producto editado correctamente');
        navigate('/');
    };

    const handleCancel = () => {
        setIsEditable(false);
        fetchProduct(id);
    }

    return (
      <Card>
        <StyledImageGrid>
            <img src={selectedProduct?.image_url} width={300} style={{objectFit: 'contain'}}/>
        </StyledImageGrid>
        <StyledHeader>
            <FlexGap>
                <div><h2>{!isEditable ? <Link to='/'><BackIcon className="ui left arrow icon"/></Link> : null}</h2></div>
                <div><h2>{isEditable ? 'Editar Producto' : 'Detalle del Producto'}</h2></div>
                <div><h2>{!isEditable ? <EditIcon onClick={()=>{setIsEditable(true)}} className="ui edit icon"/> : null}</h2></div>
            </FlexGap>
        </StyledHeader>
        <ProductForm
            onSubmit={handleEditProduct}
            product={selectedProduct}
            isEditable={isEditable}
            onCancel={() => handleCancel()}
        />
        <EmptyDiv></EmptyDiv>
      </Card>
    );
};

const mapStateToProps = state => {
    return { selectedProduct: state.products.selected, isLoading: state.products.isLoading };
};

export default connect(mapStateToProps, { fetchProduct, editProduct, setMessage })(ProductDetail);