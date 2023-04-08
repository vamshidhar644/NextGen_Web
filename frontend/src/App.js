import './App.css';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useAuthContext } from './hooks/useAuthContext';
import Navbar from './Components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import EditBanner from './AdminPages/EditBanner';
function App() {
  const user = useAuthContext();

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />

            <Route path="/admin-createbanner" element={<EditBanner />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
