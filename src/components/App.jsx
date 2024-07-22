import { Route, Routes } from "react-router-dom";
import Registro from './Registro';
import PaginaInicial from "./PaginaInicial";
import Footer from "./Footer";
import Header from "./Header";
import Login from "./Login";
import Perfil from "./Perfil";
import Agendamento from "./Agendamento";
import MeusAgendamentos from "./MeusAgendamentos"


function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<PaginaInicial/>}/>
        <Route path="/registro" element={<Registro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/perfil" element={<Perfil/>}/>
        <Route path="/agendar" element={<Agendamento/>}/>
        <Route path="/agendamentos" element={<MeusAgendamentos/>}/>
      </Routes>
    <Footer/>
    </div>
    
  );
}

export default App;
