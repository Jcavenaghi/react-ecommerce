
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import { Perfume } from '../item/Perfume';

import './PerfumesView.css'
import Container from 'react-bootstrap/esm/Container';

function PerfumesView(props) {
  return (
    <Container className='mt-4 Main'>
      <Row className="row-cols-sm-1 row-cols-md-2 row-cols-lg-3 g-4">
        {props.articles.map(art => 
          <Col className='Main-card'>
            <Perfume id={art.id} image={`/images/${art.img}`}  title={art.name}  marca={art.marca} descr={art.descr} stock= {art.stock} price={art.price}/>
          </Col>
        )}
      </Row>
    </Container>

  );
}

export { PerfumesView } ;