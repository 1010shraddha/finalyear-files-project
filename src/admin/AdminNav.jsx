import React from 'react'; 
import { Container } from 'reactstrap';
import useAuth from "../custom-hooks/useAuth";
import "../style/admin-nav.css";

const AdminNav = () => {
  const { currentUser } = useAuth();

  return (
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
                <span className="default-avatar">A</span> // Fallback UI
              )}
            </div>
          </div>
        </Container>      
      </div>
    </header>
  );
};

export default AdminNav;
