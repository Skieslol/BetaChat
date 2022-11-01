import { Outlet, Route, Routes } from "react-router-dom";
import { Guild } from "./pages/Guild";
import { GuildChannel } from "./pages/GuildChannel";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";

function App() {
  return (
    <>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="guilds" element={<Guild />}>
          <Route path="guilds/:id" element={<GuildChannel />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
