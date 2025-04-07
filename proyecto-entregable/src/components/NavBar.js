import { Link } from 'react-router-dom';
import { NavBarMenu, ListLink, AddButton } from '../styles';
import { connect } from 'react-redux';
import { changePage } from '../store/actions';

const NavBar = ({ changePage }) => {

    return (
        <NavBarMenu>
            <ListLink to="/" onClick={() => changePage(1)}>
                Lista de Productos
            </ListLink>
            <Link to="/add-product">
                <AddButton> + Agregar Producto</AddButton>
            </Link>
        </NavBarMenu>
    );
};

export default connect(null, { changePage })(NavBar);