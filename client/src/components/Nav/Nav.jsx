import "./Nav.css";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/user/list">
          <li>User List</li>
        </Link>
        <Link to="/user/create">
          <li>Create User</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
