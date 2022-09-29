import { Route, Routes } from "react-router-dom";
import { Home } from "../components/pages/Home";
import { Nav } from "../components/UI/organism/Nav";

export const DASHBOARD_ROUTES = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  );
};
