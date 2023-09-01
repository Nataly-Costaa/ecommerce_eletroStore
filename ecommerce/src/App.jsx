import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ListProducts } from "./pages/listProducts";
import { NewProduct } from './pages/newProduct';
import { PutDeleteProduct } from './pages/putDeleteProduct';
import { EditProduct } from './pages/editProduct';
import Navbar from './components/navbar';
import { Footer } from './components/footer/Footer';


import "./App.css"

function App() {
 
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route index element={<ListProducts/>}/>
          <Route path="/newProduct" element={<NewProduct/>}/>
          <Route path="/putDeleteProduct" element={<PutDeleteProduct/>}/>
          <Route path="/editar/:id" element={<EditProduct/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;


