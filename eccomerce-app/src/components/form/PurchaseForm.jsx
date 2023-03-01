import React, { useContext, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { CartContext } from '../context/cartProvider';
import { perfumesService } from '../../services/perfumes';

function PurchaseForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    confirmEmail: '',
  });

  const { productos, totalPrice } = useContext(CartContext)

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí podrías enviar los datos del formulario a un servidor
    let buyer = {
      email: `${formData.email}`, 
      name: `${formData.name}`
    }
    perfumesService.add({ buyer, items: productos, total: totalPrice })
  };

  return (
    <div className='container mt-5'>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicName">
          <Form.Label>Usuario</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingresa tu Usuario"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Correo electrónico</Form.Label>
          <Form.Control
            type="email"
            placeholder="Ingresa tu correo electrónico"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="formBasicConfirmEmail">
          <Form.Label>Confirmación de correo electrónico</Form.Label>
          <Form.Control
            type="email"
            placeholder="Confirma tu correo electrónico"
            name="confirmEmail"
            value={formData.confirmEmail}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Button variant="success" className="mt-4 chart-button btn-block w-100"type="submit">
          Finalizar Compra
        </Button>
      </Form>
    </div>
  );
}

export { PurchaseForm };