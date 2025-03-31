import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const EmployeesList = () => {
  const [employees, setEmployees] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
  
    if (token) {
      fetch("http://localhost:5146/api/employee", {
        headers: { Authorization: `Bearer ${token}`, 
        "Content-Type": "application/json" 
      },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Empleados obtenidos:", data);
          setEmployees(data);
        })
        .catch((error) => setError(error.message));
    }
  }, []);

  const handleDelete = async (id) => {
    const token = localStorage.getItem("token");
  
    try {
      const response = await fetch(`http://localhost:5146/api/Employee/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Error al eliminar empleado");
      }
  
      setEmployees((prevEmployees) => prevEmployees.filter((employee) => employee.id !== id)); // Actualizamos lista de empleados
    } catch (error) {
      console.error("Error al eliminar empleado:", error);
      setError(error.message);
    }
  };

  return (
    <div className="container boxes-main">
      <h2 className="mb-4">Lista de Empleados</h2>
      {error && <p className="alert alert-danger">{error}</p>}
      <table className="table table-striped table-bordered">
        <thead className="table-dark">
          <tr>
            <th>Nombre</th>
            <th>Email</th>
            <th>Departamento</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.name}</td>
              <td>{employee.email}</td>
              <td>{employee.department}</td>
              <td>
                <Link to={`/employees/edit/${employee.id}`} className="btn btn-warning btn-sm me-2">
                  Editar
                </Link>
                <button className="btn btn-danger btn-sm" onClick={() => handleDelete(employee.id)}>
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="text-center mt-4">
        <Link to="/employees/new" className="btn btn-primary">
          Agregar Nuevo Empleado
        </Link>
      </div>
    </div>
  );
};

export default EmployeesList;