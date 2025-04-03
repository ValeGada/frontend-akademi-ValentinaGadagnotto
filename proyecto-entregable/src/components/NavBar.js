import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className="ui secondary pointing menu">
            <div className="item">
                <Link to="/" >
                    Lista de Productos
                </Link>
            </div>
            
            <div className="right menu">
                <Link to="/add-product" className="item">
                    <button className="ui blue button"> + Agregar Producto</button>
                </Link>
            </div>
        </div>
    );
};

export default NavBar;