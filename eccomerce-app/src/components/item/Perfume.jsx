import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import { Link } from 'react-router-dom';

function Perfume(props) {
  return (
    <Card className="card-perfume" style={{ width: '22rem'}}>
      <Card.Img className="card-img" variant="top" src= {props.image} />
      <Card.Body>
        <Card.Title>
          <Link to={`/item/${props.id}`}>
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