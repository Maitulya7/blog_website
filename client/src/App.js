import { Route, Routes } from 'react-router-dom';
import './App.css';
import IndexPage from './pages/IndexPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { UserContextProvider } from './userContext';
import CreatePost from './components/createPost';

function App() {
  return (
    <>
      <UserContextProvider>
        <ToastContainer />
        <Routes>
          <Route index element={<IndexPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/create-blog' element={<CreatePost />} />
        </Routes>
      </UserContextProvider>
    </>

  );
}

export default App;
