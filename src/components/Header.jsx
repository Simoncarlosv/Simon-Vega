import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBuilding, faRightToBracket, faList, faUserPlus, faRightFromBracket, faHouse } from "@fortawesome/free-solid-svg-icons";

library.add(faBuilding, faRightToBracket, faList, faUserPlus, faRightFromBracket, faHouse);

const Header = () => {
  const { user, logout } = useContext(UserContext);
  const navigate = useNavigate();

  return (
    <nav className="sidebar bg-dark text-white">
      <h3 className="logo"><FontAwesomeIcon icon="building" /> Logo</h3>
      <ul className="nav">
        <li className="nav-item button-nav">
          <Link className="nav-link text-white" to="/"><FontAwesomeIcon className="icon-menu" icon="house" /> Inicio</Link>
        </li>
        {user ? (
          <>
            <li className="nav-item button-nav">
              <Link className="nav-link text-white" to="/employees"><FontAwesomeIcon className="icon-menu" icon="list" /> Lista de empleados</Link>
            </li>
            <li className="nav-item button-nav">
              <Link className="nav-link text-white" to="/employees/new"><FontAwesomeIcon className="icon-menu" icon="user-plus" /> Agregar empleado</Link>
            </li>
            <li className="nav-item logout">
              <button className="btn btn-danger mt-3" onClick={() => logout(navigate)}>
                <FontAwesomeIcon className="icon-menu" icon="right-from-bracket" /> Cerrar sesión
              </button>
            </li>
          </>
        ) : (
          <>
            <li className="nav-item button-nav">
              <Link className="nav-link text-white" to="/login"><FontAwesomeIcon className="icon-menu" icon="right-to-bracket" /> Iniciar sesión</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Header;