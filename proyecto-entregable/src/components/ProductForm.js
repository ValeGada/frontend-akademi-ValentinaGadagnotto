import React, { useState } from 'react';
import styled from 'styled-components';

const StyledForm = styled.form`
    justify-self: center;
`

const StyledInput = styled.input`
    background:rgba(250, 252, 255, 0.65);
    border: none;
    font-size: 16px;
    padding: 3px 10px 3px 5px;
    margin-bottom: 5px;
    font-weight: bold;
`

const StyledTextarea = styled.textarea`
    background:rgba(250, 252, 255, 0.65);
    border: none;
    font-size: 16px;
    padding: 3px 10px 3px 5px;
    margin-bottom: 5px;
    font-weight: bold;
`

const StyledSpan = styled.span`
    padding: 3px 2px 3px 5px;
`

const StyledSelect = styled.select`
    color:rgb(0, 0, 0);
    background:rgba(250, 252, 255, 0.65);
    border: none;
    font-size: 16px;
    padding: 3px 10px 0 0;
    font-weight: bold;
    align-self: center;
    justify-self: center;
`

const FormButton = styled.button`
    justify-self: center;
    padding: 3px 10px;
    margin: 1em;
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
            newErrors.name = '* El nombre es obligatorio';
        } else if (formData.name.length < 5) {
            newErrors.name = '* El nombre debe contener al menos 5 caracteres';
        }

        // Descripción
        if (!formData.description) {
          newErrors.description = '* La descripción es obligatoria';
        } else if (formData.description.length < 5) {
          newErrors.description = '* La descripción debe contener al menos 5 caracteres';
        }
  
        // Precio
        if (!formData.price || formData.price <= 0) {
            newErrors.price = '* El precio debe ser un número mayor a 0';
        }
  
        // Stock
        if (!formData.stock || formData.stock < 0) {
            newErrors.stock = '* El stock no puede ser negativo';
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
          <div>{errors.name && <StyledSpan>{errors.name}</StyledSpan>}</div>
        </div>
        
        <div>
          <label>Descripción:</label>
          <br />
          <StyledTextarea
            type="text"
            name="description"
            min={5}
            value={formData.description || ''}
            onChange={handleChange}
            readOnly={!isEditable}
            rows={5}
          />
          <div>{errors.description && <StyledSpan>{errors.description}</StyledSpan>}</div>
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
          <div>{errors.price && <StyledSpan>{errors.price}</StyledSpan>}</div>
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
        <div>{errors.stock && <StyledSpan>{errors.stock}</StyledSpan>}</div>
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