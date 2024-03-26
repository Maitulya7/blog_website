import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/layout';
import IndexPage from './pages/IndexPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
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
        </Route>
      </Routes>
      <ToastContainer/>
    </>

  );
}

export default App;
