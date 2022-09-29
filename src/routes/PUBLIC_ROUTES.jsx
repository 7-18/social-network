import { Navigate } from "react-router-dom";

export const PUBLIC_ROUTES = ({ isAuthenticated, children }) => {
  return !isAuthenticated ? children : <Navigate to="/home" />;
};
