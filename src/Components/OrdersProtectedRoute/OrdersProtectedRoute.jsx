import { Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';

export default function OrdersProtectedRoute({ children }) {
  const shippingAddress = Cookies.get("shippingAddress");
  
  if (!shippingAddress) {
    return <Navigate to="/" replace />;
  }
  
  return children;
}