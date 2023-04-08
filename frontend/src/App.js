import './App.css';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useAuthContext } from './context_hooks/AuthContext';
import Navbar from './Components/Navbar';
import Home from './pages/Home';

function App() {
  const user = useAuthContext();

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
