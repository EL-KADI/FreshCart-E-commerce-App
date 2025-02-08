import { Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';

export default function OrdersProtectedRoute({ children }) {
  const paymentStatus = Cookies.get("paymentStatus");
  

  if (paymentStatus !== "completed") {
    return <Navigate to="/" replace />;
  }
  
  return children;
}