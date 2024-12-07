// src/components/ProtectedRoute.js
import React from "react";
import { Navigate } from "react-router-dom";
import { auth } from "../firebase.config";

const ProtectedRoute = ({ children }) => {
  const user = auth.currentUser; // Check if the user is authenticated

  // If the user is not authenticated, redirect to login
  if (!user) {
    return <Navigate to="/login" />;
  }

  // If the user is authenticated, render the child components (Checkout page)
  return children;
};

export default ProtectedRoute;
