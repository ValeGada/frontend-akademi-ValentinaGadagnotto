import React, { useState } from 'react';
import styled from 'styled-components';

const StyledForm = styled.form`
    height: 17vh;
    margin: 1.5em 5em;
    justify-self: center;
`

const StyledInput = styled.input`
    background:rgba(224, 225, 226, 0);
    border: none;
    font-size: 16px;
    padding: 3px 10px 18px 4px;
    font-weight: bold;
`

const StyledSelect = styled.select`
    color:rgb(0, 0, 0);
    background:rgba(224, 225, 226, 0);
    border: none;
    font-size: 16px;
    padding: 3px 10px 0 0;
    font-weight: bold;
    align-self: center;
    justify-self: center;
`

const FormButton = styled.button`
    padding: 3px 10px;
    margin-left: 5px;
    cursor: pointer;
    background: #e0e1e2;
    color: #555555;
    transition: all .3s ease;
    border: 3px solid #e0e1e2;
    border-radius: 5px;

    &:hover{
    text-decoration: none;
    color: #f1f1f1;
    background: #555555;
    border: 3px solid #555555;
    }
`

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
            newErrors.name = 'El nombre debe contener al menos 5 caracteres';
        }

        // Nombre
        if (!formData.description) {
          newErrors.description = 'La descripción es obligatorio';
        } else if (formData.description.length < 5) {
          newErrors.description = 'La descripción debe contener al menos 5 caracteres';
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
      <StyledForm onSubmit={handleSubmit}>
        <div>
          <label>Nombre:</label>
          <br />
          <StyledInput
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
          <label>Descripción:</label>
          <br />
          <StyledInput
            type="text"
            name="description"
            min={5}
            value={formData.name || ''}
            onChange={handleChange}
            readOnly={!isEditable}
          />
          {errors.name && <span>{errors.name}</span>}
        </div>
        <div>
          <label>Precio:</label>
          <br />
          <StyledInput
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
        <br />
        <StyledInput
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
        <br />
        <StyledSelect 
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
        </StyledSelect>
      </div>
      <br />
      {isEditable && (
        <>
          <FormButton type="submit">Confirmar</FormButton>
          {onCancel && <FormButton type="button" onClick={onCancel}>Cancelar</FormButton>}
        </>
      )}
    </StyledForm>
  );
};

export default ProductForm;