
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import { Perfume } from '../item/Perfume';
import { useState, useEffect } from 'react';

import './PerfumesView.css'
import { perfumesService } from "../../services/perfumes"
import Container from 'react-bootstrap/esm/Container';

function PerfumesView() {
  const [articles, setArticles] = useState([])

  useEffect(() => {
    perfumesService.getAll().then(myPerfums => setArticles(myPerfums))
  }, []) // [] quiere decir que se realiza on mount, cada vez que se carga. 
  return (
    <Container className='mt-4 Main'>
      <Row className="row-cols-sm-1 row-cols-md-2 g-4">
        {articles.map(art => 
          <Col className='Main-card'>
            <Perfume image={`/images/${art.img}`}  title={art.name}  marca={art.marca} descr={art.descr} />
          </Col>
        )}
      </Row>
    </Container>

  );
}

export { PerfumesView } ;