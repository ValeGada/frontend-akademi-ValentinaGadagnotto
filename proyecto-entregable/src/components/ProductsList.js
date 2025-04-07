import React from 'react';
import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchProducts, deleteProduct, changePage, setMessage } from '../store/actions';
import { Link } from 'react-router-dom';
import { ListDiv, SearchInput, BarDiv, FilterDiv, FilterSelect, OrderButton, NumbersSpan, Paging, PageButton } from '../styles'
import Modal from './Modal';


const ProductsList = ({fetchProducts, products, deleteProduct, currentPage, changePage, setMessage}) => {
    // Filtros / Orden
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [sortOrder, setSortOrder] = useState('asc');
    const [sortBy, setSortBy] = useState('');
    const [category, setCategory] = useState('');
    const [searchTerm, setSearchTerm] = useState('');

    // Paginación
    // const [currentPage, setCurrentPage] = useState(1); --> pasado a estado redux
    const [productsPerPage, setProductsPerPage] = useState(5);
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

    // Modal states
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    

    useEffect(() => {
      fetchProducts();
    }, [fetchProducts]);

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

    const handleSort = (param) => {
        if (sortBy === param){
            setSortOrder(sortOrder === "asc" ? "desc" : "asc")
        } else {
            setSortBy(param)
            setSortOrder("asc")
        }
    }

    const openDeleteModal = (product) => {
        setSelectedProduct(product);
        setIsModalOpen(true);
    }

    const confirmDelete = () => {
        deleteProduct(selectedProduct.id);
        setIsModalOpen(false);
        setMessage('Producto eliminado correctamente');
        if (currentPage > 1 && currentProducts.length == 1){ // 1 y no 0, creo que tarda en cargar los cambios post eliminación
            changePage(currentPage - 1);
        }
    }

    return (
        <>
            <ListDiv>
                <div className="ui secondary pointing menu">
                    <div className='item'>
                        <SearchInput 
                            type='text' 
                            placeholder='Buscar producto...'
                            value={searchTerm}
                            onChange={e => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <BarDiv>
                        <FilterDiv>
                            Filtrar por categoría:
                            <FilterSelect onChange={e => setCategory(e.target.value)}>
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
                            </FilterSelect>
                        </FilterDiv>
                    <div>
                        Ordenar por:
                        <OrderButton onClick={() => handleSort('price')}>
                            Precio {sortBy === 'price' ?( sortOrder === 'asc' ? 
                            <i className='small down arrow icon' /> : 
                            <i className='small up arrow icon' />) : null}
                        </OrderButton>
                        <OrderButton onClick={() => handleSort('name')}>
                            Nombre {sortBy === 'name' ?( sortOrder === 'asc' ? 
                            <i className='small down arrow icon' /> : 
                            <i className='small up arrow icon' />) : null}
                        </OrderButton>
                        </div>
                    </BarDiv>                       
                </div>
                <table className="ui table medium">
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Categoría</th>
                            <th>Descripción</th>
                            <th>Precio</th>
                            <th>Stock disponible</th>
                            <th>Ver/Editar</th>
                            <th>Eliminar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentProducts && currentProducts.length > 0 ? (
                            currentProducts.map(product => (
                                <tr key={product.id}>
                                    <td>
                                        <Link to={`/product/${product.id}`}>
                                            {product.name}
                                        </Link>
                                    </td>
                                    <td>{product.category}</td>
                                    <td>{product.description}</td>
                                    <td>${product.price}</td>
                                    <td>{product.stock}</td>
                                    <td>
                                        <Link to={`/product/${product.id}`}>
                                            <i className='ui eye icon' />
                                            <i className='ui edit icon' />
                                        </Link>
                                    </td>
                                    <td>
                                        <i 
                                            className="ui trash icon" 
                                            onClick={() => openDeleteModal(product)}
                                            style={{ cursor: 'pointer', color: '#4183c4' }}
                                        />
                                    </td>
                                </tr>
                                ))
                            ) : (
                            <tr>
                                <td colSpan='8' style={{textAlign: 'center'}}>No hay productos disponibles</td>
                            </tr>
                        )}
                    </tbody>
                </table>
                {/* Paginación */}
                    <Paging>
                        Productos por página: 
                        <NumbersSpan onClick={()=>setProductsPerPage(5)}>5</NumbersSpan> - 
                        <NumbersSpan onClick={()=>setProductsPerPage(10)}>10</NumbersSpan>
                    </Paging>
                    <Paging>
                    {filteredProducts.length > 0 && Array.from({ length: totalPages }, (_, i) => (
                        <PageButton 
                            key={i} 
                            onClick={() => changePage(i + 1)}
                            style={currentPage === i + 1 ? { background: '#555555', color: '#f1f1f1' } : {}}
                        >
                            {i + 1}
                        </PageButton>                   
                    ))}
                    </Paging>
            </ListDiv>
            <Modal isOpen={isModalOpen}>
                <h2>¿Confirma que desea eliminar este producto?</h2>
                <h3 style={{textAlign: 'center'}}>{selectedProduct?.name}</h3>
                <div><img src={selectedProduct?.image_url} height={100} /></div>
                <br />
                <button className="ui button negative" onClick={confirmDelete} style={{justifySelf: 'center'}}>Eliminar</button>
                <button className="ui button" onClick={() => setIsModalOpen(false)} style={{justifySelf: 'center'}}>Cancelar</button>
            </Modal>
        </>
    );
}

const mapStateToProps = state => {
    return {
        products: state.products.all,
        currentPage: state.products.currentPage
    };
};

export default connect(mapStateToProps, { fetchProducts, deleteProduct, changePage, setMessage })(ProductsList);