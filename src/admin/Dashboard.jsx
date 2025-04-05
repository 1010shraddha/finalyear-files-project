import React, { useState, useEffect } from "react";
import { auth, db } from "../firebase.config"; // Firebase config must be inside src/
import { collection, getDocs } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import "../style/dashboard.css"; // Make sure this path is correct

const Dashboard = () => {
    const [activeTab, setActiveTab] = useState("home");
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isAdmin, setIsAdmin] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const savedTab = localStorage.getItem("activeAdminTab");
        if (savedTab) setActiveTab(savedTab);
    }, []);

    useEffect(() => {
        localStorage.setItem("activeAdminTab", activeTab);
    }, [activeTab]);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            if (user) {
                const querySnapshot = await getDocs(collection(db, "users"));
                const userData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                const currentUser = userData.find(u => u.id === user.uid);
                setIsAdmin(currentUser?.role === "Admin");
                setUsers(userData);
                setLoading(false);
            } else {
                navigate("/login");
            }
        });

        return () => unsubscribe();
    }, [navigate]);

    

    if (loading) return <div className="dashboard-loading">Loading...</div>;
    if (!isAdmin) return <div className="dashboard-unauthorized">You are not authorized to access this page.</div>;

    const totalUsers = users.length;
    const adminUsers = users.filter(u => u.role === "Admin").length;
    const regularUsers = totalUsers - adminUsers;

    return (
        <div className="dashboard-container">
            <div className="dashboard-navbar">
                <h1 className="dashboard-title">Admin Dashboard</h1>
                <button
                    onClick={() => {
                        auth.signOut();
                        navigate("/login");
                    }}
                    className="dashboard-logout"
                >
                    Logout
                </button>
            </div>

            <div className="dashboard-tabs">
                <button className={activeTab === "home" ? "active" : ""} onClick={() => setActiveTab("home")}>Home</button>
                <button className={activeTab === "users" ? "active" : ""} onClick={() => setActiveTab("users")}>Users</button>
            
            </div>

            {activeTab === "home" && (
                <div className="dashboard-stats">
                    <h2>Welcome, Admin!</h2>
                    <div className="dashboard-grid">
                        <div className="dashboard-card bg-blue">Total Users: {totalUsers}</div>
                        <div className="dashboard-card bg-green">Admin Users: {adminUsers}</div>
                        <div className="dashboard-card bg-yellow">Regular Users: {regularUsers}</div>
                    </div>
                </div>
            )}

            {activeTab === "users" && (
                <div className="dashboard-users">
                    <h2>All Users</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                               
                            </tr>
                        </thead>
                        <tbody>
                            {users.map(user => (
                                <tr key={user.id}>
                                   <td>{user.displayName || 'N/A'}</td>
                                    <td>{user.email}</td>
                                    <td>{user.role}</td>
                                    
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

            {activeTab === "products" && (
                <div className="dashboard-products">
                    <h2>Add Products</h2>
                    <p>Product form can go here.</p>
                </div>
            )}
        </div>
    );
};

export default Dashboard;
