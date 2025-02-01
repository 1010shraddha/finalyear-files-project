import React from "react";
//import Header from "../components/Header/Header"; // ✅ Fix import path

const Dashboard = () => {
    return (
        <>
            {/* <Header /> ✅ Ensure Header appears on Dashboard */}
            <div>
                <h2>Dashboard</h2>
                <p>Welcome to the admin dashboard</p>
            </div>
        </>
    );
};

export default Dashboard;
