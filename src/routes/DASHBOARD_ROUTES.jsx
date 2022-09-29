import { Route, Routes } from "react-router-dom";
import { Home } from "../components/pages/Home";
import { Users } from "../components/pages/Users";
import { Nav } from "../components/UI/organism/Nav";

export const DASHBOARD_ROUTES = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/:home" element={<Home />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </>
  );
};
