import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className="ui secondary pointing menu">
            <Link to="/" className="item">
                Lista de Productos
            </Link>
            <div className="right menu">
                
                <Link to="/add-product" className="item">
                    <button className="ui blue button"> +  Add Product</button>
                </Link>
            </div>
        </div>
    );
};

export default NavBar;