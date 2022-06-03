import './App.css';
import App from './main.js';
import About from './about.js';
import {Route, Routes} from 'react-router-dom';
function Router() {
  return (
  <Routes>
    <Route path="/" element={<App />}/>
    <Route path="*" element={<h1>Error: link not found.</h1>}/>
    <Route path="/about" element={<About/>}/>
  </Routes>
  );
}

export default Router;
