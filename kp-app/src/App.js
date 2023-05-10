import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/login';
import Home from './pages/home';
import Admin from './pages/admin';
function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route exact path="/*" element={<Home />} />
          <Route exact path="/login/*" element={<Login />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
