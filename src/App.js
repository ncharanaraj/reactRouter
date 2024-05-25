import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { useAuth } from "./context/AuthContext";
import "./styles.css";

export default function App() {
  const { isLoggedIn, setIsLoggedIn } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const handleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
    navigate(location?.state?.from?.pathname);
  };

  return (
    <div>
      <ul>
        <Link to="/home">Home</Link>
        <Link to="/category">Category</Link>
        <Link to="/checkout">Checkout</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/address">Address</Link>
        <button onClick={handleLogin}>{isLoggedIn ? "Logout" : "Login"}</button>
      </ul>
      <div>
        <Outlet />
      </div>
    </div>
  );
}
