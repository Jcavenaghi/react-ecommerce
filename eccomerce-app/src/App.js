import logo from './logo.svg';
import './App.css';
/* importante para los estilos de bootstrap */
import 'bootstrap/dist/css/bootstrap.min.css';

import { PerfumesView } from './components/perfums/PerfumesView'

import { ItemListContainer } from './components/main/ItemListContainer'

import { PerfumeDetalle } from './components/itemDetail/PerfumeDetalle'

import { Contact } from './components/contact/Contact';

import { PerfumeCategory } from './components/categories/PerfumeCategory';

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { CartView } from './components/chart/CartView';

import { NavBar } from './components/header/NavBar';

import { PurchaseForm } from './components/form/PurchaseForm';


import { CartProvider } from './components/context/cartProvider';
function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element= {<ItemListContainer greeting='BIENVENIDO A LA TIENDA ONLINE DE "LA PARFUMERIE"' />} />
          <Route path="/perfumes" element= {<PerfumesView /> } />
          <Route path="/contact" element= {<Contact /> } />
          <Route path="/category/:categoryId" element= {<PerfumeCategory /> }/> 
          <Route path="/item/:itemId" element= {<PerfumeDetalle />} />
          <Route path="/cart" element= {<CartView/>} />
          <Route path="/purchaseForm" element= {<PurchaseForm/>} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
