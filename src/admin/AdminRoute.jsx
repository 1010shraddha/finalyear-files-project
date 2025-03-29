import { useEffect, useState } from "react";
import { auth, db } from "../firebase.config.js";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const AdminRoute = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const checkAdmin = async () => {
      const user = auth.currentUser;
      if (!user) {
        setLoading(false);
        return;
      }

      try {
        const userDoc = await getDoc(doc(db, "users", user.uid));
        if (userDoc.exists() && userDoc.data().role === "Admin") {
          setIsAdmin(true);

          // Ensure admin is also added to the "admins" collection
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
        console.error("Error fetching user role:", error);
      }

      setLoading(false);
    };

    checkAdmin();
  }, []);

  if (loading) return <p>Loading...</p>;

  return isAdmin ? <Outlet /> : <Navigate to="/" state={{ from: location }} replace />;
};

export default AdminRoute;
