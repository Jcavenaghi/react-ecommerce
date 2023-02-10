import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './ItemListContainer.css'
function ItemListContainer(props) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <>
      <Carousel activeIndex={index} onSelect={handleSelect} className="m-2 caja">
        <Carousel.Item className='box'>
          <img
            style={{objectFit: 'contain'} }
            src="/carousel-img/parfumerie_logo_1.png"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3 className='text-black fw-bold fs-4'> {props.greeting}</h3>
            <p className='text-black fw-bold fs-5'>Nos complace darle la bienvenida a nuestro mundo de fragrancias de alta calidad. 
              Aquí, nos enorgullece ofrecerle una amplia selección de productos cuidadosamente 
              seleccionados y formulados con los ingredientes más finos.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className='box'>
          <img
            style={{objectFit: 'contain'} }
            src="/carousel-img/sauvage.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3 className='fw-bold fs-4' >SAUVAGE</h3>
            <p className='fw-bold fs-5'>
              No dude en navegar por nuestro catálogo en línea para descubrir la fragancia perfecta para usted.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className='box'>
          <img
            src="/carousel-img/irresistible.jpeg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3 className='fw-bold fs-4'>IRRESISTIBLE</h3>
            <p className='fw-bold fs-5'>¡Gracias por visitar nuestra tienda en línea y esperamos hacer negocios con usted!</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  )
}


export { ItemListContainer }
