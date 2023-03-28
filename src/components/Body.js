import React from "react";
import { Route, Routes } from "react-router-dom";
import PrimarySearchAppBar from "./BodyComponents/PrimarySearchAppBar";
import ClickableChipSetting from "./ClickableChipSettings";
import Misc from "./menuComponents/Misc";

export default function Body() {
  return (
    <div className="body_div">
      <PrimarySearchAppBar />
      <Routes>
        <Route path="/" element={<Misc />} />
        <Route path="/misc" element={<Misc />} />
      </Routes>
      <ClickableChipSetting />
    </div>
  );
}
