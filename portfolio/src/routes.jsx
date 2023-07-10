import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Container from "./components/Container";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Projetos from "./pages/Projetos";
import Contatos from "./pages/Contatos";
import Page404 from "./pages/Page404";
import PageBase from "./pages/PageBase";

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PageBase />}>
          <Route index element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/projetos" element={<Projetos />} />
          <Route path="/contatos" element={<Contatos />} />
          <Route path="*" element={<Page404 />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default AppRoutes;
