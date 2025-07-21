import React from "react";
import HeroHistoric from "../components/historic/HeroHistoric";
import AboutHistoric from "../components/historic/AboutHistoric";
import GraduationsHistoric from "../components/historic/GraduationsHistoric";
import LineDivider from "../components/historic/LineDivider";
import Trajectory from "../components/historic/Trajectory";

export default function Historico() {
  return (
    <>
      <HeroHistoric />
      <AboutHistoric />
      <GraduationsHistoric />
      <LineDivider />
      <Trajectory />
    </>
  );
}
