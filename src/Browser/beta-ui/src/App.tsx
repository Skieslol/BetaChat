import { Outlet, Route, Routes } from "react-router-dom";
import { Guild } from "./pages/Guild";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";

function App() {
  return (
    <>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/channels/@me" element={<Guild />} />
        <Route path=":id" element={<div>Name a Server Page</div>} />
      </Routes>
    </>
  );
}

export default App;
