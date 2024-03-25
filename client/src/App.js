import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/layout';
import IndexPage from './pages/IndexPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

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

    </>

  );
}

export default App;
