import React from "react";
import HomePage from "./pages/HomePage/HomePage";
import NewBookPage from "./pages/NewBookPage/NewBookPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { basePath, newBookPath } from "./constants/routePath";

const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path={basePath} element={<HomePage />} />
      <Route path={newBookPath} element={<NewBookPage />} />
    </Routes>
  </BrowserRouter>
);

export default AppRouter;
