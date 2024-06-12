import { Route, Routes } from 'react-router-dom';
import './App.css';
import Signup from './Components/Sign/Signup';
import Landing from './pages/landing/Landing';
import Login from './Components/login/Login';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />}>
          <Route path="/" element={<Signup />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
