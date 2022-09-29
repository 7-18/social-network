import { Navigate } from "react-router-dom";

export const PRIVATE_ROUTES = ({ isAuthenticated, children }) => {
  return isAuthenticated ? children : <Navigate to="/" />;
};
