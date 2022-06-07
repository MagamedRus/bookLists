import React from "react";
import HomePage from "./pages/HomePage/HomePage";
import NewBookPage from "./pages/NewBookPage/NewBookPage";
import { HashRouter, Routes, Route } from "react-router-dom";
import { basePath, newBookPath } from "./constants/routePath";

const AppRouter = () => (
  <HashRouter>
    <Routes>
      <Route path={basePath} element={<HomePage />} />
      <Route path={newBookPath} element={<NewBookPage />} />
    </Routes>
  </HashRouter>
);

export default AppRouter;
