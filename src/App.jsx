import './App.css';
import Gaming from './components/body/category/Gaming';
import Laptop from './components/body/category/Laptop';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import AllCategories from './components/body/AllCategories';
import Printer from './components/body/category/Printer';
import Software from './components/body/category/Software';
import GPU from './components/body/category/GPU';
import Monitor from './components/body/category/Monitor';
import Camera from './components/body/category/Camera';
import Speaker from './components/body/category/Speaker';
import ProductviewPage from './components/product/ProductviewPage';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/laptop" element={<Laptop />} />
        <Route path="/gaming" element={<Gaming />} />
        <Route path="/printer" element={<Printer />} />
        <Route path="/software" element={<Software />} />
        <Route path="/gpu" element={<GPU />} />
        <Route path="/monitor" element={<Monitor />} />
        <Route path="/camera" element={<Camera />} />
        <Route path="/speaker" element={<Speaker />} />
        <Route path="/all-categories" element={<AllCategories />} />
        <Route path="/product/:name" element={<ProductviewPage />} />
      </Routes>
    </Router>
  );
}

export default App;
