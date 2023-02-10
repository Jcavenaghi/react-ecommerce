import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Perfume.css'
import { Link } from 'react-router-dom';

function Perfume(props) {
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
          {props.marca}. { props.descr }
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
  );
}

export { Perfume } ;