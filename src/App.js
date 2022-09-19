import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Equipos from "./pages/Equipos";
import Estadios from "./pages/Estadios";
import Jugadores from "./pages/Jugadores";
import Layout from "./components/Layout";
import { transitions, positions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import Editar from "./pages/Editar";

// optional configuration
const options = {
  // you can also just use 'bottom center'
  position: positions.BOTTOM_CENTER,
  timeout: 5000,
  offset: "30px",
  // you can also just use 'scale'
  transition: transitions.SCALE,
};

function App() {
  return (
    <AlertProvider template={AlertTemplate} {...options}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/equipos" element={<Equipos />} />
            <Route path="/equipos/editar" element={<Editar />} />

            <Route path="/jugadores" element={<Jugadores />} />
            <Route path="/jugadores/editar" element={<Editar />} />

            <Route path="/estadios" element={<Estadios />} />
            <Route path="/estadios/editar" element={<Editar />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </AlertProvider>
  );
}

export default App;
