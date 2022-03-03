import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddTutorial from "../pages/add/AddTutorial";
import EditTutorial from "../pages/edit/EditTutorial";
import DetailTutorial from "../pages/detail/DetailTutorial";
import Home from "../pages/home/Home";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />

        <Route path="add" element={<AddTutorial />} />

        <Route path="edit">
          <Route path=":tutorialId" element={<EditTutorial />}></Route>
        </Route>

        <Route path="detail">
          <Route path=":tutorialId" element={<DetailTutorial />}></Route>
        </Route>

        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
