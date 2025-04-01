import React from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import { fetchProducts } from "../actions";


const ProductsList = ({fetchProducts, products}) => {
    useEffect(() => {
      fetchProducts();
    }, [])
    
    return (
        <table>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Categoría</th>
                    <th>Precio</th>
                </tr>
            </thead>
            <tbody>
                {products && products.length > 0 ? (
                    products.map( product => (
                        <tr key={product.id}>
                            <td>{product.name}</td>
                            <td>{product.category}</td>
                            <td>${product.price}</td>
                        </tr>
                        ))
                    ) : (
                    <tr>
                        <td>No hay información disponible</td>
                    </tr>
                )}
            </tbody>
        </table>
    );
    
}

const mapStateToProps = state => {
    return { products: Object.values(state.products) } // Object.values() turns object into an array, so we can .map() it
};

export default connect(mapStateToProps, { fetchProducts })(ProductsList);