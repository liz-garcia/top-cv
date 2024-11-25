import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="w-full border-b pb-2">
      <ul className="m-auto flex w-fit space-x-8 text-zinc-400">
        <Link to="/" className="hover:text-white hover:underline">
          <li className="p-2">Home</li>
        </Link>
        <Link to="/user/list" className="hover:text-white hover:underline">
          <li className="p-2">User List</li>
        </Link>
        <Link to="/user/create" className="hover:text-white hover:underline">
          <li className="p-2">Create User</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
