import { Routes, Route, Outlet } from "react-router-dom";
import Navbar from './Component/Navbar';
import Home from './Component/Home';
import About from './Component/About';
import Contact from './Component/Contact';
import Product from './Component/Product';
import Footer from './Component/Footer';
import AdminNavbar from './Admin/AdminNavbar';
import Dashboard from './Admin/Dashboard';
import AdminProduct from './Admin/AdminProduct';
import Addproduct from "./Admin/Addproduct";


function App() {
  return (
    
    <Routes>

      {/* USER ROUTES */}
      <Route element={
        <>
          <Navbar />
          <Outlet />
          <Footer />
        </>
      }>

           <Route path="/" element={<Home />} />
           
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<Product />} />
          <Route path="/contact" element={<Contact />} />
      </Route>

      {/* ADMIN ROUTES */}
      <Route 
      path="/Admin" 
      element={
        <>
            <AdminNavbar />
            <Outlet />
            <Footer />
        </>
      }>

          <Route path="Dashboard" element={<Dashboard />} />
          <Route path="AdminProduct" element={<AdminProduct />} />
          <Route path="AddProduct" element={<Addproduct/>} />
        </Route>

    </Routes>
  );
}

export default App;


    

