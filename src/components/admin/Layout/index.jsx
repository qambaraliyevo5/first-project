import React from "react";
import {  Outlet } from "react-router-dom";
import Sidebar from "../sidebar/sidebar";


export default function Layout() {
  const token = "1";

  return (
        <div className="flex">
          < Sidebar/>
          <div className="w-full layout">
            <Outlet />
          </div>
        </div>
  );
}