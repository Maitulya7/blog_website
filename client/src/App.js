import { Route, Routes } from 'react-router-dom';
import './App.css';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { UserContextProvider } from './userContext';
import CreatePost from './components/createPost';
import BlogPage from './pages/blogPage';
import HomePage from './pages/HomePage';
import LandingPage from './pages/LandingPage';

function App() {
  return (
    <>
      <UserContextProvider>
        <ToastContainer />
        <Routes>
        <Route index element={<LandingPage />} />
          <Route path='/home' element={<HomePage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/create-blog' element={<CreatePost />} />
          <Route path='/blog-page' element={<BlogPage />} />
        </Routes>
      </UserContextProvider>
    </>

  );
}

export default App;
