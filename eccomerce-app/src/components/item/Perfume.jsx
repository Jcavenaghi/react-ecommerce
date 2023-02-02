import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Perfume(props) {
  return (
    <Card className="card-perfume" style={{ width: '22rem'}}>
      <Card.Img className="card-img" variant="top" src= {props.image} />
      <Card.Body>
        <Card.Title>{ props.title }</Card.Title>
        <Card.Text className="card-text">
          {props.marca}. { props.descr }
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
  );
}

export { Perfume } ;