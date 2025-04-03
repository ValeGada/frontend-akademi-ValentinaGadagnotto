import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchProduct, deleteProduct } from '../store/actions';
import Modal from './Modal';
import ProductForm from './ProductForm';

const ProductDelete = ({ products, fetchProduct, deleteProduct }) => {
    const [isModalOpen, setIsModalOpen] = useState(true);
    const { id } = useParams();
    const navigate = useNavigate();
    const product = products.find(p=>p.id === id);    

    useEffect(() => {
        if (!product) {
            fetchProduct(id);
        }
    }, [fetchProduct, id]);

    const confirmDelete = () => {  
        const productId = product.id;      
        deleteProduct(productId);
        alert('Producto eliminado correctamente'); // Pasar a modal
        navigate("/");
    }
    
    const comeBack = () => {
        navigate("/");
    }

    return (
        <div>
            <Modal isOpen={isModalOpen}>
                <h2>Eliminar Producto</h2>
                <ProductForm
                    product={product}
                    isEditable={false}
                    onCancel={() => navigate('/')}
                />
                <p>¿Confirma que desea eliminar este producto?</p>
                <button className="ui button" onClick={confirmDelete}>Eliminar</button>
                <button className="ui button" onClick={comeBack}>Cancelar</button>
            </Modal>
        </div>
    );
};

const mapStateToProps = state => {
    return { products: state.products };
};

export default connect(mapStateToProps, { fetchProduct, deleteProduct}) (ProductDelete);