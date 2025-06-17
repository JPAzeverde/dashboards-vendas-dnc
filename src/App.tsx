import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<>Login</>} />
        <Route path="/home" element={<>home</>} />
        <Route path="/cadastro" element={<>cadastro</>} />
        <Route path="/leads" element={<>leasds</>} />
        <Route path="/perfil" element={<>perfil</>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
