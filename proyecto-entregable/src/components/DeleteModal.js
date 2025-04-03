import { deleteProduct } from "../store/actions";
import { Link } from "react-router-dom";

const DeleteModal = () => {
    const confirmDelete = () => {
        deleteProduct();
        return (
            <div>El 'producto' ha sido eliminado con éxito</div>
        );
        // Redireccionar a 'ProductsList' (path="/")
    }

    const comeBack = () => {
        // Redireccionar a 'ProductsList' (path="/")

    }

    return(
        <div>
            ¿Confirma que desea eliminar 'producto'?
            <button onClick={()=> comeBack()}>
                <Link to="/">No</Link>
            </button>
            <button onClick={()=> confirmDelete()}>
                <Link to="/">Sí</Link>
            </button>
        </div>
    );
}

export default DeleteModal;