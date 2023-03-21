import * as React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Triage from "./components/Triage/Triage";

export default function DrawerAppBar() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/triage" element={<Triage />} />
        <Route path="/cpt" element={<Triage />} />
      </Routes>
    </>
  );
}
