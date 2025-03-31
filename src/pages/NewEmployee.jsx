import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";

const NewEmployee = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        department: ''
    });
    const [error, setError] = useState('');

    // Manejar cambios en los inputs
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    // Enviar datos del formulario
    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem("token");
      
        const newEmployee = { // Crear nuevo objeto con los datos del formulario
          name: formData.name,
          email: formData.email,
          department: formData.department,
        };
      
        try {
          const response = await fetch("http://localhost:5146/api/employee", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`, // Agregar token
            },
            body: JSON.stringify(newEmployee),
          });
      
          if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || "Error al registrar empleado");
          }

          navigate("/employees");
          alert("Empleado registrado con éxito");
        } catch (error) {
          console.error("Error:", error);
          alert(error.message);
        }
      };

    return (
            <div className="container register-box boxes-main">
                <h2 className="title-content"><FontAwesomeIcon className="icon-page" icon={faUserPlus} /> Registro de Empleado</h2>
                <form onSubmit={handleSubmit} className="register-form">
                        <div className="mb-3 form-group">
                            <label htmlFor="name" className="form-label">Nombre:</label>
                            <input
                                type="text"
                                className="form-control"    
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-3 form-group">
                            <label htmlFor="department" className="form-label">Departamento:</label>
                            <input
                                type="text"
                                className="form-control"
                                id="department"
                                name="department"
                                value={formData.department}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-3 form-group">
                            <label htmlFor="email" className="form-label">Correo Electrónico:</label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        {error && <p className="error">{error}</p>}
                        <button type="submit" className="btn btn-primary">Agregar Empleado</button>
                </form>
            </div>
    );
};

export default NewEmployee;
