import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Admin from "./pages/admin/Admin";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

function App() {
  const { user } = useContext(AuthContext);

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/users/:id" element={<Home />} />
        <Route
          path="/login"
          element={user ? <Navigate to="/users/:id" /> : <Login />}
        />
      </Routes>
    </Router>
  );
}

export default App;
