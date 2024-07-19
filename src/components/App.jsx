import { Route, BrowserRouter, Routes } from "react-router-dom";
import Registro from './Registro';
import PaginaInicial from "./PaginaInicial";
import Footer from "./Footer";
import Header from "./Header";
import Login from "./Login";
import Perfil from "./Perfil";
import Agendamento from "./Agendamento";


function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<PaginaInicial/>}/>
        <Route path="/registro" element={<Registro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/perfil" element={<Perfil/>}/>
        <Route path="/agendamento" element={<Agendamento/>}/>
      </Routes>
    <Footer/>
    </div>
    
  );
}

export default App;
