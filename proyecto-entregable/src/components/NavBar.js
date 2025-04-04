import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavBarMenu = styled.div`
    top: 0;
    position: fixed;
    font-size: 16px;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 65px;
    background:rgb(114, 114, 114); 
    z-index: 1000;   
`
const NavBarLink = styled(Link)`    
    text-decoration: none;
    font-weight: 00;
    color: #f1f1f1;
    margin: 1.25em;
    float: left;
    
    &:hover {
        color: #f1f1f1;
        text-decoration: underline;
    }
`
const NavBarButton = styled.button`
    float: right;
    background: #e0e1e2;
    color: #555555;
    cursor: pointer;
    font-size: 1em;
    margin: 1em;
    padding: 4px 12px;
    border: 1px solid #e0e1e2;
    border-radius: 5px;
    transition: all .3s ease;

    &:hover {
        color: #f1f1f1;
        background: #555555;
        border: 1px solid #555555;
    }
`

const NavBar = () => {
    return (
        <NavBarMenu>
            <NavBarLink to="/" >
                Lista de Productos
            </NavBarLink>
            <Link to="/add-product">
                <NavBarButton> + Agregar Producto</NavBarButton>
            </Link>
        </NavBarMenu>
    );
};

export default NavBar;