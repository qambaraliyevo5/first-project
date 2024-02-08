import React from 'react';
import { BrowserRouter, Route, Routes,   } from 'react-router-dom';
import Layout from './components/admin/Layout';
import Login from './components/admin/auth/sigin';


function App() {

  return (
    <>
<BrowserRouter>
      <Routes>
        <Route index element={<h1>Home Page</h1>} />
        <Route path="/admin" element={<Login/>} />
            <Route element={<Layout />}>
              <Route path="/admin/home" element={<h1>Admin</h1>} />
              <Route path="/admin/order" element={<h1>order</h1>} />
              <Route path="/admin/subcategories" element={<h1>subcategories</h1>} />
              <Route path="/admin/banners" element={<h1>banners</h1>} />
              <Route path="/admin/dashbord" element={<h1>dashbord</h1>} />
              <Route path="/admin/discount" element={<h1>discount</h1>} />
              <Route path="/admin/products" element={<h1>products</h1>} />
              <Route path="/admin/deliveries" element={<h1>deliveries</h1>} />
              <Route path="/admin/categories" element={<h1>categories</h1>} />
              <Route path="/admin/note" element={<h1>note</h1>} />
            </Route>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;