import './App.css';
import App from './main.js';
import About from './landing/about';
import Login from './login';
import Contact from './contact';
import SignUp from './signup';
import {Route, Routes} from 'react-router-dom';
function Router() {
  return (
  <Routes>
    <Route path="/" element={<App />}/>
    <Route path="*" element={<h1>Error: link not found.</h1>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/signup" element={<SignUp/>}/>
  </Routes>
  );
}

export default Router;
