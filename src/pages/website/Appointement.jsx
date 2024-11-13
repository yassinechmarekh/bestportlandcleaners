import AppointementForm from "@/components/AppointementForm";
import TopPage from "@/components/TopPage";
import React from "react";

export default function Appointement() {
  return (
    <>
      <TopPage page="make an appointement" />
      <AppointementForm/>
    </>
  );
}
