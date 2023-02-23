import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Perfume.css'
import { Link } from 'react-router-dom';
import { useEffect, useState, useContext } from "react";
import { CartContext } from '../context/cartProvider';
function Perfume(props) {
  const [stock, setStock]  = useState();
  const { total, setTotal } = useContext(CartContext);
  function addToCart() {
    setStock(stock - 1);
    setTotal(total+ 1)
  }
  return (
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
        </Card.Text>
        { props.stock > 0
          ? <Button variant="primary" onClick={addToCart}>+</Button>
          : <Card.Text className="card-text">Sin stock {props.stock} </Card.Text>}
      </Card.Body>
    </Card>
  );
}

export { Perfume } ;