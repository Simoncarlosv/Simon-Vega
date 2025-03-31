import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { UserProvider } from "./context/UserContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import EmployeesList from "./pages/EmployeesList";
import NewEmployee from "./pages/NewEmployee";
import EmployeeEdit from "./pages/EmployeeEdit";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Simulación de carga inicial
  setTimeout(() => setIsLoading(false), 1000);

  if (isLoading) {
    return <div className="loading-screen">Cargando...</div>;
  }

  return (
    <UserProvider>
      <Router>
        <div className="d-flex flex-column vh-100 w-100">
          <div className="d-flex flex-grow-1 w-100">
            <Header className="sidebar bg-dark text-white p-3 vh-100" />
            <main className="flex-grow-1 p-4 overflow-auto background-main">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/employees" element={<EmployeesList />} />
                <Route path="/employees/new" element={<NewEmployee />} />
                <Route path="/employees/edit/:id" element={<EmployeeEdit />} />
              </Routes>
            </main>
          </div>
          <Footer className="bg-dark text-white text-center p-3 w-100 footer" />
        </div>
      </Router>
    </UserProvider>
  );
};

export default App;