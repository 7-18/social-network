import { BrowserRouter, Routes, Route } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { PUBLIC_ROUTES } from "./PUBLIC_ROUTES";
import { Login } from "../components/pages/Login";
import { Spinner } from "../components/UI/atoms/Spinner";
import { SignUp } from "../components/pages/SignUp";
import { PRIVATE_ROUTES } from "./PRIVATE_ROUTES";
import { DASHBOARD_ROUTES } from "./DASHBOARD_ROUTES";
import { auth } from "../_config"

export const APP_ROUTES = () => {
  const [check, setCheck] = useState(true);
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user?.uid) {
        setIsLogged(true);
        user.getIdToken().then((token) => {
          return token;
        });
      } else {
        setIsLogged(false);
      }
      setCheck(false);
    });
  }, []);

  if (check) {
    return <Spinner />;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <PUBLIC_ROUTES isAuthenticated={isLogged}>
              <Login />
            </PUBLIC_ROUTES>
          }
        />
        <Route
          path="/accounts/sign-up"
          element={
            <PUBLIC_ROUTES isAuthenticated={isLogged}>
              <SignUp />
            </PUBLIC_ROUTES>
          }
        />
        <Route
          path="/*"
          element={
            <PRIVATE_ROUTES isAuthenticated={isLogged}>
              <DASHBOARD_ROUTES />
            </PRIVATE_ROUTES>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
