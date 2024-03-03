import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Company from "./components/pages/Company";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import NewProject from "./components/pages/NewProject";

import Container from "./components/layouts/Container";

function App() {
  return (
    <Router>
      <div>
        <Link to='/'>Início</Link>
        <Link to='/company'>Empresa</Link>
        <Link to='/contact'>Contato</Link>
        <Link to='/newproject'>Novo Projeto</Link>
      </div>
      <Container customClass='min-heigth'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/company" element={<Company />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/newproject" element={<NewProject />} />
        </Routes>
      </Container>

      <footer>
        footer
      </footer>
    </Router>
  );
}

export default App;