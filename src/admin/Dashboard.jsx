import { useEffect, useState } from "react";
import { auth, db } from "../firebase.config"; // Ensure auth is imported
import { collection, getDocs, deleteDoc, doc, getDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth"; // ✅ Import onAuthStateChanged

const Dashboard = () => {
    const [users, setUsers] = useState([]);
    const [isAdmin, setIsAdmin] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            if (!user) {
                setLoading(false);
                return;
            }

            try {
                // ✅ Fetch logged-in user role safely
                const userDoc = await getDoc(doc(db, "users", user.uid));
                if (userDoc.exists() && userDoc.data().role === "Admin") {
                    setIsAdmin(true);

                    // ✅ Fetch users only if admin
                    const usersCollection = await getDocs(collection(db, "users"));
                    setUsers(usersCollection.docs.map(doc => ({ id: doc.id, ...doc.data() })));
                }
            } catch (error) {
                console.error("Error fetching user data:", error);
            } finally {
                setLoading(false);
            }
        });

        return () => unsubscribe(); // ✅ Cleanup auth listener
    }, []);

    const deleteUser = async (userId) => {
        if (!isAdmin) return; // Ensure only admins can delete users
        try {
            await deleteDoc(doc(db, "users", userId));
            setUsers(users.filter(user => user.id !== userId));
        } catch (error) {
            console.error("Error deleting user:", error);
        }
    };

    if (loading) return <p>Loading...</p>;
    if (!isAdmin) return <p>Access Denied: You are not an admin.</p>;

    return (
        <div>
            <h2>Dashboard</h2>
            <p>Welcome to the admin dashboard</p>

            <h3>Registered Users</h3>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        {user.email} - {user.role}
                        {user.role !== "Admin" && (
                            <button onClick={() => deleteUser(user.id)}>Remove</button>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Dashboard;
