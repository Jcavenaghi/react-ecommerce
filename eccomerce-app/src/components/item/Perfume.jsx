import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Perfume.css'
import { Link } from 'react-router-dom';
import { useEffect, useState, useContext } from "react";
import { CartContext } from '../context/cartProvider';
function Perfume(props) {
  const { addItem } = useContext(CartContext);
  
  return (
    <div className='container d-flex justify-content-center mt-5 mb-2'>
      <Card className="card-perfume">
        <Card.Img className="card-img" variant="top" src= {props.image}/>
        <Card.Body>
          <Card.Title className="card-text" >
            <Link to={`/item/${props.id}`} style={{ textDecoration: 'none' }}>
              { props.title }
            </Link>
          </Card.Title>
          <Card.Text className="card-text">
            {props.marca}. { props.descr }.
          </Card.Text>
          <Card.Text className="card-text">
            $ {props.price}
          </Card.Text>
          { props.stock > 0
            ? <Button variant="dark" className="chart-button btn-block w-100 fw-bold" onClick={() => addItem({id: props.id, title: props.title, marca: props.marca, descr: props.descr, price: props.price, cant: 1} ) }>Añadir al carrito</Button>
            : <Card.Text className="card-text">Sin stock</Card.Text>}
        </Card.Body>
      </Card>
    </div>
  );
}

export { Perfume } ;