import Cookies from "js-cookie";
import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from "react-router-dom"
import { Home, Leads, Login, Profile, Registration } from './pages'


function App() {
  const ProtectedRoute = () =>{
    const checkAuthCookie =  Cookies.get('Authorization')
    if(!checkAuthCookie) {
      alert('Autenticação nescessária')
      return <Navigate to="/" replace />
    }

    return <Outlet />
  }


  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route element = {<ProtectedRoute />}>
          <Route path="/home" element={<Home />} />
          <Route path="/leads" element={<Leads />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
