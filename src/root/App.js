import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from '../components/admin/Layout/index';
import Login from '../components/admin/auth/sigin';
import CategoriesCrud from '../components/admin/CategoriesCrud/table';
import ProductTable from '../components/admin/productCrud/product';
import TableCom from '../components/admin/subCategories/tableCom';
import Order from '../components/admin/order/order';
import ClientLayout from '../components/client/Layout';
import Home from '../components/client/home/home.';
// import Home from "../components/client/home/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Client Side Routes */}
        <Route path="/" element={<ClientLayout />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<h1>Shop</h1>} />
          <Route path="contact" element={<h1>contact</h1>} />
          <Route path="signUp" element={<h1>Sign Up </h1>} />
        </Route>

        {/* Admin Panel Routes */}
        <Route path="/admin" element={<Login />}>
          <Route path="home" element={<Layout />}>
            <Route index element={<h1>Admin</h1>} />
            <Route path="order" element={<Order />} />
            <Route path="subcategories" element={<TableCom />} />
            <Route path="banners" element={<h1>Banners</h1>} />
            <Route path="dashbord" element={<h1>Dashbord</h1>} />
            <Route path="discount" element={<h1>Discount</h1>} />
            <Route path="products" element={<ProductTable />} />
            <Route path="deliveries" element={<h1>Deliveries</h1>} />
            <Route path="categories" element={<CategoriesCrud />} />
            <Route path="note" element={<h1>Note</h1>} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
