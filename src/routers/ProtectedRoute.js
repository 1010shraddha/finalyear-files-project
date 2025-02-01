// // src/components/ProtectedRoute.js
// import React from "react";
// import { Navigate } from "react-router-dom";
// import { auth } from "../firebase.config";

// const ProtectedRoute = ({ children }) => {
//   const user = auth.currentUser; // Check if the user is authenticated

//   // If the user is not authenticated, redirect to login
//   if (!user) {
//     return <Navigate to="/login" />;
//   }

//   // If the user is authenticated, render the child components (Checkout page)
//   return children;
// };

// export default ProtectedRoute;

// import { Navigate, Outlet } from "react-router-dom";
// import useAuth from "../custom-hooks/useAuth";

// const ProtectedRoute = () => {
//   const { currentUser } = useAuth(); // Get user authentication status

//   console.log("Protected Route - Current User:", currentUser); // Debugging

//   return currentUser ? <Outlet /> : <Navigate to="/login" replace />;
// };

// export default ProtectedRoute;
import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../custom-hooks/useAuth";

const ProtectedRoute = () => {
    const { currentUser, loading } = useAuth();

    if (loading) return <p>Loading...</p>; // Prevent redirect while Firebase loads

    return currentUser ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;






