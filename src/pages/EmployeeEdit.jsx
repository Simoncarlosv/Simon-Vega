import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const EmployeeEdit = () => {
  const { id } = useParams(); // Obtener el ID de la URL
  const navigate = useNavigate();

  const [employee, setEmployee] = useState({
    name: "",
    email: "",
    department: "",
  });

  const [error, setError] = useState("");

  useEffect(() => {
    const fetchEmployee = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        setError("No autorizado. Por favor, inicia sesión.");
        return;
      }

      try {
        const response = await fetch(`http://localhost:5146/api/Employee/${id}`, { 
          method: "GET",
          headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        if (response.status === 401) {
          setError("No autorizado. Tu sesión puede haber expirado.");
          return;
        }

        if (!response.ok) {
          throw new Error("No se pudo obtener la información del empleado");
        }

        const data = await response.json();
        setEmployee(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchEmployee();
  }, [id]);

  const handleChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    try {
      const response = await fetch(`http://localhost:5146/api/Employee/${id}`, {
        method: "PUT",
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(employee),
      });

      if (response.status === 401) {
        setError("No autorizado. Tu sesión puede haber expirado.");
        return;
      }

      if (!response.ok) {
        throw new Error("Error al actualizar el empleado");
      }

      navigate("/employees");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="container boxes-main employee-edit-box">
      <h2>Editar Empleado</h2>
      {error && <p className="alert alert-danger">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Nombre</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={employee.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={employee.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Departamento</label>
          <input
            type="text"
            className="form-control"
            name="department"
            value={employee.department}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Guardar Cambios
        </button>
      </form>
    </div>
  );
};

export default EmployeeEdit;