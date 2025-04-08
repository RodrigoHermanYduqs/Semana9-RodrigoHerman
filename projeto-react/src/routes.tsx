import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CadUsuario from './pages/CadUsuario';
import Menu from './components/Menu';
import Login from './pages/Login';
import ListaUsuario from './pages/ListaUsuario';
import CadProduto from './pages/CadProduto';

export default function AppRouter(){
    return(
        <main>
        <Router>
            <Menu/>
          <Routes>
              <Route path='/login' element={<Login/>} />
              <Route path='/cadusuario' element={<CadUsuario />} />
              <Route path='/cadusuario/:id' element={<CadUsuario />} />
              <Route path='/listausuario' element={<ListaUsuario />} />
              <Route path='/cadproduto' element={<CadProduto />} />
              <Route path='/cadproduto/:id' element={<CadProduto />} />
              <Route path='*' element={<Login />} />
          </Routes>
        </Router>
      </main>
    );
}