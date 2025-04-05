import React, { useState } from "react";
import { Container, Row } from "reactstrap";
//import useAuth from "../custom-hooks/useAuth";
import "../style/admin-nav.css";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../asset/image/logo3.jpeg";


const admin_nav = [
  { display: "Dashboard", path: "/dashboard", icon: "ri-dashboard-line" },
  { display: "Add Products", path: "/dashboard/add-products", icon: "ri-file-list-line" },
  { display: "Users", path: "/dashboard/users", icon: "ri-user-line" },
];

const AdminNav = () => {
  //const { currentUser } = useAuth();
  const navigate = useNavigate();
  const [showActions, setShowActions] = useState(false);

  const toggleProfileActions = () => {
    setShowActions((prev) => !prev);
  };

  



  return (
    <>
      <header className="admin_header">
        <div className="admin_nav-top">
          <Container>
            <div className="admin_nav-wrapper-top">
            <div className="logo">
  <div className="icon">
    <img src={logo} alt="Shrinath Furnitures Logo" />
  </div>
  <h2>Shrinath Furnitures</h2>
</div>

             

              <div className="admin_nav-top-right">
                

                {/* Profile Section */}
                <div className="admin_profile">
                  <i className="ri-user-line user_icon"
                     onClick={toggleProfileActions}></i> {/* User Icon */}
                  {showActions && (
                    <div className="admin_profile-actions">
                      <span onClick={() => navigate("/home")}>Go to Home</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </Container>
        </div>
      </header>

      <section className="admin_menu p-0">
        <Container>
          <Row>
            <div className="admin_navigation">
              <ul className="admin_menu-list">
                {admin_nav.map((item, index) => (
                  <li className="admin_menu-item" key={index}>
                    <NavLink to={item.path} className={({ isActive }) => (isActive ? "active__admin-menu" : "")}>
                      <i className={item.icon}></i> {item.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default AdminNav;
