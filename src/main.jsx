import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PaginaInicial from './PaginaInicial';
import Detalhes from './Detalhes';
import SobreMim from './SobreMim';
import PaginaErro from './PaginaErro';
import MenuSuperior from './MenuSuperior';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <MenuSuperior />
      <Routes>
        <Route path='/' element={<PaginaInicial />} />
        <Route path='/asteroides/:id' element={<Detalhes />} />
        <Route path='/sobre-mim' element={<SobreMim />} />
        <Route path='*' element={<PaginaErro />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
