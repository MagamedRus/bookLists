import React from "react";
import HomePage from "./pages/HomePage/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { basePath, newBook } from "./constants/routePath";

const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path={basePath} element={<HomePage />} />
      <Route path={newBook} element={<p />} />
    </Routes>
  </BrowserRouter>
);

export default AppRouter;
