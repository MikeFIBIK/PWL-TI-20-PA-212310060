import React from "react";
import { Routes, Route } from "react-router-dom";
import { ChapterTwo } from "../modules/chapter-2/Index";

export default function BaseRoute() {
  return (
    <React.Suspense>
      <Routes>
        <Route index element={<ChapterTwo />} />
        <Route path="home" element={<Home />} />
      </Routes>
    </React.Suspense>
  );
}

const Home = () => {
  return <h3>Ini home looo…</h3>;
};
