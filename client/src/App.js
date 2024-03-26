import { Route, Routes } from 'react-router-dom';
import './App.css';
import IndexPage from './pages/IndexPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
    <ToastContainer/>
      <Routes>
        
          <Route index element={
            <IndexPage />
          } />
          <Route
            path='/login'
            element={
              <LoginPage />
            }
          />
          <Route
            path='/register'
            element={
              <RegisterPage />
            }
          />
      </Routes>
      
    </>

  );
}

export default App;
