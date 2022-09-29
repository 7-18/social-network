import { Route, Routes } from "react-router-dom";
import { Home } from "../components/pages/Home";

export const DASHBOARD_ROUTES = () => {
  return (
    <>
      <Routes>
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  );
};
