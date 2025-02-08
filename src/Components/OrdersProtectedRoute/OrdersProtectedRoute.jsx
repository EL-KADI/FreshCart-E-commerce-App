import { Navigate, useLocation } from 'react-router-dom';

export default function OrdersProtectedRoute({ children }) {
  const location = useLocation();
  const redirectStatus = new URLSearchParams(location.search).get("redirect_status");
  
 
  if (redirectStatus !== "succeeded") {
    return <Navigate to="/FreshCart-E-commerce-App" replace />;
  }
  
  return children;
}