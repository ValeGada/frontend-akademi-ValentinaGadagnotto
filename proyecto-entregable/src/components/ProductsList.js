import { useEffect } from "react";
import { connect } from "react-redux";
import { fetchProducts } from "../actions";


const ProductsList = ({fetchProducts, products}) => {
    useEffect(() => {
      fetchProducts();
    }, [])
    
    return (
        <div>
            <h2>Productos</h2>
            <div className="ui celled list">
                {products && products.length > 0 ? (
                    products.map(product => (
                    <div className="item" key={product.id}>
                        <div className="content">
                            {product.name}
                            <div className="description">{product.description}</div>
                        </div>
                    </div>
                    ))
                ) : (
                    <p>No hay productos disponibles</p>
                )}
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return { products: Object.values(state.products) } // Object.values() turns object into an array, so we can .map() it
};

export default connect(mapStateToProps, { fetchProducts })(ProductsList);