import logo from './logo.svg';
import './App.css';
/* importante para los estilos de bootstrap */
import 'bootstrap/dist/css/bootstrap.min.css';

import { PerfumesView } from './components/perfums/PerfumesView'

import { ItemListContainer } from './components/main/ItemListContainer'

import { PerfumeDetalle } from './components/itemDetail/PerfumeDetalle'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { NavBar } from './components/header/NavBar';

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element= {<PerfumeDetalle />} />
        <Route path="/" element= {<PerfumeDetalle />} />
        <Route path="/category/:id" element= {<PerfumeDetalle /> }/> 
        <Route path="/item/:id" element= {<PerfumeDetalle />} />
      </Routes>
      <PerfumesView/>
      <ItemListContainer greeting="hola"/>
    </BrowserRouter>
  );
}

export default App;
