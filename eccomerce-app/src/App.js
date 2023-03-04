import logo from './logo.svg';
import './App.css';
/* importante para los estilos de bootstrap */
import 'bootstrap/dist/css/bootstrap.min.css';

import { Perfumes } from './components/categories/Perfumes';

import { ItemListContainer } from './components/main/ItemListContainer'

import { PerfumeDetalle } from './components/itemDetail/PerfumeDetalle'

import { PerfumeCategory } from './components/categories/PerfumeCategory';

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { CartView } from './components/chart/CartView';

import { NavBar } from './components/header/NavBar';

import { PurchaseForm } from './components/form/PurchaseForm'; 

import { Footer } from './components/footer/Footer'

import { CartProvider } from './components/context/cartProvider';
function App() {
  return (
    <>
      <div className='App'>
        <CartProvider>
          <BrowserRouter>
            <NavBar/>
            <Routes>
              <Route path="/" element= {<ItemListContainer greeting='BIENVENIDO A LA TIENDA ONLINE DE "LA PARFUMERIE"' />} />
              <Route path="/perfumes" element= {<Perfumes/> } />
              <Route path="/category/:categoryId" element= {<PerfumeCategory /> }/> 
              <Route path="/item/:itemId" element= {<PerfumeDetalle />} />
              <Route path="/cart" element= {<CartView/>} />
              <Route path="/purchaseForm" element= {<PurchaseForm/>} />
            </Routes>
            <Footer/>
          </BrowserRouter>
        </CartProvider>
      </div>
    </>
  );
}

export default App;
