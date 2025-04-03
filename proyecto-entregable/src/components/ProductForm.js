import React, { useState } from 'react';

const ProductForm = ({ product, onSubmit, isEditable, onCancel }) => {
    const [formData, setFormData] = useState(product || {});
    const [errors, setErrors] = useState({});

    // Manejar cambios en los campos del formulario
    const handleChange = (e) => {
    const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleCategory = (e) => {
        const { value } = e.target;
        setFormData({
            ...formData,
            category: value
        });
    };

    // Validacaión del formulario
    const validate = () => {
        const newErrors = {};

        // Nombre
        if (!formData.name) {
            newErrors.name = 'El nombre es obligatorio';
        } else if (formData.name.length < 5) {
            newErrors.name = 'El nombre debe tener al menos 5 caracteres';
        }
  
        // Precio
        if (!formData.price || formData.price <= 0) {
            newErrors.price = 'El precio debe ser un número mayor a 0';
        }
  
        // Stock
        if (!formData.stock || formData.stock < 0) {
            newErrors.stock = 'El stock no puede ser negativo';
        }
  
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0; // Si pasa la validación, return true
    };

    // Manejar el envío del formulario
    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
        onSubmit(formData);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
        <div>
        <label>Nombre:</label>
        <input
          type="text"
          name="name"
          min={5}
          value={formData.name || ''}
          onChange={handleChange}
          readOnly={!isEditable}
        />
        {errors.name && <span>{errors.name}</span>}
      </div>
      <div>
        <label>Precio:</label>
        <input
          type="number"
          name="price"
          min={0}
          value={formData.price || ''}
          onChange={handleChange}
          readOnly={!isEditable}
        />
        {errors.price && <span>{errors.price}</span>}
      </div>
      <div>
        <label>Stock:</label>
        <input
          type="number"
          name="stock"
          min={0}
          value={formData.stock || ''}
          onChange={handleChange}
          readOnly={!isEditable}
        />
        {errors.stock && <span>{errors.stock}</span>}
      </div>
      <div>
        <label>Categoría:</label>
        <select 
            name="category"
            value={formData.category || ''} 
            onChange={handleCategory} 
            disabled={!isEditable}
        >
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
      {isEditable && (
        <>
          <button type="submit">Guardar</button>
          {onCancel && <button type="button" onClick={onCancel}>Cancelar</button>}
        </>
      )}
    </form>
  );
};

export default ProductForm;