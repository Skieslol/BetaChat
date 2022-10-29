import { Outlet, Route, Routes } from 'react-router-dom';
import { Register } from './pages/Register';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Register />}></Route>
        <Route
          path="guilds"
          element={
            <div>
              <div>Guilds</div>
              <Outlet />
            </div>
          }
        >
          <Route path=":id" element={<div>Name a Server Page</div>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
