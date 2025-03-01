import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { token, logout } = useContext(AuthContext);

  return (
    <nav className="p-4 bg-red-500 text-white flex justify-between">
      <h1 className="text-lg font-bold">Zomato Clone</h1>
      <div>
        {token ? (
          <button onClick={logout} className="bg-black px-3 py-1 rounded">
            Logout
          </button>
        ) : (
          <>
            <Link to="/login" className="mr-4">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
