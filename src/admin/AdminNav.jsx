import React from 'react'; 
import { Container, Row } from 'reactstrap'; 
import useAuth from "../custom-hooks/useAuth"; 
import "../style/admin-nav.css"; 
import { NavLink } from "react-router-dom";

const admin_nav = [
  {
    display: 'Dashboard',
    path:'/dashboard'
  },
  {
    display: 'Orders',
    path:'/dashboard/orders'
  },
  {
    display: 'Users',
    path:'/dashboard/users'
  },
];

const AdminNav = () => {
  const { currentUser } = useAuth();

  return (
    <>
      <header className="admin_header">
        <div className="admin_nav-top">
          <Container>
            <div className="admin_nav-wrapper-top">
              <div className="logo">
                <h2 className="name">Shrinath Furnitures</h2>
              </div>

              <div className="search_box">
                <input type="text" placeholder="Search..." />
                <span><i className="ri-search-2-line"></i></span>
              </div>

              <div className="admin_nav-top-right">
                <span><i className="ri-notification-2-line"></i></span>
                <span><i className="ri-settings-4-line"></i></span>
                
                {currentUser && currentUser.photoURL ? (
                  <img src={currentUser.photoURL} alt="User" />
                ) : (
                  <span><i className="ri-user-line"></i></span>
                )}
              </div>
            </div>
          </Container>      
        </div>
      </header>

      <section className="admin_menu" p-0>
        <Container>
          <Row>
            <div className="admin_navigation">
              <ul className="admin_menu-list">
                {admin_nav.map((item, index) => (
                  <li className="admin_menu-item" key={index}>
                    <NavLink 
                      to={item.path} 
                      className={navClass => navClass.isActive ? "active__admin-menu" : ""}
                    >
                      {item.display}
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
