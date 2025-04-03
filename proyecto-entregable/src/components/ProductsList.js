import React from 'react';
import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchProducts } from '../store/actions';
import { Link } from 'react-router-dom';


const ProductsList = ({fetchProducts, products}) => {
    // Filtros / Orden
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [sortOrder, setSortOrder] = useState('asc');
    const [sortBy, setSortBy] = useState('');
    const [category, setCategory] = useState('');
    const [searchTerm, setSearchTerm] = useState('');

    // Paginación
    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage, setProductsPerPage] = useState(5);
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

    useEffect(() => {
      fetchProducts();
    }, [fetchProducts])

    // useEffect para que haga rerender si hay cambios, pero hace falta realmente? 
    useEffect(() => {
        let tempProducts = [...products];

        // Filtrado por categoría
        if (category) {
            tempProducts = tempProducts.filter(p => p.category.toLowerCase() === category.toLowerCase());
        }
        
        // Búsqueda por nombre
        if (searchTerm) {
            tempProducts = tempProducts.filter(p => 
                p.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                p.category.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        // Ordenamiento asc/desc (precio) o alfabético (nombre)
        if (sortBy === 'price') {
            tempProducts.sort((a, b) => sortOrder === 'asc' ? a.price - b.price : b.price - a.price);
        } else if (sortBy === 'name') {   
            tempProducts.sort((a, b) => sortOrder === 'asc' ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name));
        }

        setFilteredProducts(tempProducts);
    }, [products, category, searchTerm, sortBy, sortOrder]);


    // OnClick events (orden)
    const priceOrder = () => {
        setSortBy('price');
        setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    }

    const nameOrder = () => {
        setSortBy('name');
        setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    }


    return (
        <div>
            <div className="ui secondary pointing menu">
                <div className='item'>
                    Filtrar por categoría:
                    <select onChange={e => setCategory(e.target.value)}>
                        <option value=''></option>
                        <option value='Smartphone'>Smartphone</option>
                        <option value='Tablet'>Tablet</option>
                        <option value='Auriculares'>Auriculares</option>
                        <option value='Pad'>Pad</option>
                        <option value='Parlante'>Parlante</option>
                        <option value='Consola'>Consola</option>
                        <option value='Notebook'>Notebook</option>
                        <option value='Componente'>Componente</option>
                        <option value='Mouse'>Mouse</option>
                        <option value='Teclado'>Teclado</option>
                        <option value='Smartwatch'>Smartwatch</option>
                        <option value='Streaming'>Streaming</option>
                        <option value='Smart Home'>Smart Home</option>
                        <option value='Cámara'>Cámara</option>
                    </select>
                </div>
                <div className='item'>
                    Ordenar por:
                    <button onClick={() => priceOrder('price')}>
                        Precio {sortBy === 'price' ?( sortOrder === 'asc' ? 
                        <i className='small down arrow icon' /> : 
                        <i className='small up arrow icon' />) : null}
                    </button>
                    <button onClick={() => nameOrder('name')}>
                        Nombre {sortBy === 'name' ?( sortOrder === 'asc' ? 
                        <i className='small down arrow icon' /> : 
                        <i className='small up arrow icon' />) : null}
                    </button>
                </div>
                <div className='item'>
                    <input 
                        type='text' 
                        placeholder='Buscar producto'
                        value={searchTerm}
                        minLength={5}
                        onChange={e => setSearchTerm(e.target.value)}
                    />
                </div>
                <div className='item'>
                    Productos por página: 
                    <span style={{textDecoration: 'underline'}} onClick={()=>setProductsPerPage(5)}>5</span> - 
                    <span style={{textDecoration: 'underline'}} onClick={()=>setProductsPerPage(10)}>10</span>
                </div>                            
            </div>
            <table className="ui table medium">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Categoría</th>
                        <th>Precio</th>
                        <th>Stock disponible</th>
                        <th>Ver</th>
                        <th>Editar</th>
                        <th>Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredProducts && filteredProducts.length > 0 ? (
                        currentProducts.map(product => (
                            <tr key={product.id}>
                                <td>
                                    <Link to={`/product/${product.id}`}>
                                        {product.name}
                                    </Link>
                                </td>
                                <td>{product.category}</td>
                                <td>${product.price}</td>
                                <td>{product.stock}</td>
                                <td>
                                    <Link to={`/product/${product.id}`}>
                                        <i className='ui eye icon' />
                                    </Link>
                                </td>
                                <td>
                                    <Link to={`/edit-product/${product.id}`}>
                                        <i className="ui pencil icon" />
                                    </Link>
                                </td>
                                <td>
                                    <Link to={"/delete-product"}>
                                        <i className="ui trash icon" />
                                    </Link>
                                </td>
                            </tr>
                            ))
                        ) : (
                        <tr>
                            <td colSpan='6' style={{textAlign: 'center'}}>No hay productos disponibles</td>
                        </tr>
                    )}
                </tbody>
            </table>
            {/* Paginación */}
            <div>
                {Array.from({ length: totalPages }, (_, i) => (
                    <button className="ui button" key={i} onClick={() => setCurrentPage(i + 1)}>
                        {i + 1}
                    </button>                   
                ))}
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return { products: state.products };
};

export default connect(mapStateToProps, { fetchProducts })(ProductsList);