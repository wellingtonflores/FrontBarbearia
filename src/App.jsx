import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Registro from '../src/components/Registro';
import PaginaInicial from "../src/components/PaginaInicial";
import Footer from "../src/components/Footer";
import Header from "../src/components/Header";
import Login from "../src/components/Login";
import Perfil from "../src/components/Perfil";
import Agendamento from "../src/components/Agendamento";
import MeusAgendamentos from "../src/components/MeusAgendamentos";


function App() {
  return (
      <Router>
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
      </Router>
  );
}

export default App;
