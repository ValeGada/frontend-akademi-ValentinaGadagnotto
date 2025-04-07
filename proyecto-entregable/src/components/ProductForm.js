import React, { useState } from 'react';
import { StyledForm, StyledLabel, StyledInput, StyledTextarea, StyledSpan, StyledSelect, StyledImgInput, ButtonsDiv, ConfirmButton, CancelButton } from '../styles';


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

        // URL de imagen
        // if (!formData.image_url) {
        //   newErrors.image_url = '* La url es obligatoria';
        // } else if (formData.image_url.contains(!jpg || !png)) {
        //   newErrors.image_url = '* La url debe direccionar a una imagen .jpg o .png';
        // }
  
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
          <StyledLabel>Nombre:</StyledLabel>
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
          <StyledLabel>Descripción:</StyledLabel>
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
          <StyledLabel>Precio:</StyledLabel>
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
        <StyledLabel>Stock:</StyledLabel>
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
        <StyledLabel>Categoría:</StyledLabel>
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
      <div>
      <StyledLabel>URL de imagen:</StyledLabel>
        <br />
        <StyledImgInput
          type="text"
          name="image_url"
          value={formData.image_url || ''}
          onChange={handleChange}
          readOnly={!isEditable}
        />
      </div>
      <br />
      <ButtonsDiv>
        {isEditable && (
          <>
            <ConfirmButton type="submit">Confirmar</ConfirmButton>
            {onCancel && <CancelButton type="button" onClick={onCancel}>Cancelar</CancelButton>}
          </>
        )}
      </ButtonsDiv>
    </StyledForm>
  );
};

export default ProductForm;