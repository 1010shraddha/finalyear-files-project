import { useEffect, useState } from "react";
import { auth, db } from "../firebase.config.js";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth"; // ✅ Ensures real-time user auth check

const AdminRoute = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (!user) {
        setLoading(false);
        return;
      }

      try {
        const userDocRef = doc(db, "users", user.uid);
        const userDoc = await getDoc(userDocRef);

        if (userDoc.exists() && userDoc.data().role === "Admin") {
          setIsAdmin(true);

          // ✅ Only add to "admins" if not already present
          const adminDocRef = doc(db, "admins", user.uid);
          const adminDoc = await getDoc(adminDocRef);
          if (!adminDoc.exists()) {
            await setDoc(adminDocRef, {
              name: userDoc.data().displayName || "Admin User",
              email: userDoc.data().email,
              id: user.uid,
              role: "Admin",
              linkedCollections: ["users", "products", "carts"],
            });
          }
        }
      } catch (error) {
        console.error("Error checking admin role:", error);
      } finally {
        setLoading(false);
      }
    });

    return () => unsubscribe(); // ✅ Cleanup auth listener to prevent memory leaks
  }, []);

  if (loading) return <p>Loading...</p>;

  return isAdmin ? <Outlet /> : <Navigate to="/" state={{ from: location }} replace />;
};

export default AdminRoute;
