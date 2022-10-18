import "./App.css";
import "./assets/scss/register.scss";
import "./assets/scss/navbar.scss";
import "./assets/scss/home.scss";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import PrivateRoutes from "./components/PrivateRoutes";
import ClientLayout from "./components/ClientLayout";
import Dashboard from "./pages/Dashboard";
import AddPostPage from "./pages/AddPostPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ClientLayout />}>
          <Route element={<PrivateRoutes />}>
            <Route index element={<Home />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="add_post" element={<AddPostPage />} />
          </Route>
        </Route>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;