import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import useGetData from '../custom-hooks/useGetData';

import { deleteDoc, doc } from 'firebase/firestore';
import { db } from '../firebase.config';
import { toast } from 'react-toastify';

const User = () => {
  const { data: usersData, loading } = useGetData('users');

  const deleteUser = async (id) => {
    console.log('Deleting user with ID:', id);
    try {
      await deleteDoc(doc(db, 'users', id));
      toast.success('User deleted!');
    } catch (error) {
      console.error('Error deleting user:', error.message);
      toast.error('Failed to delete user: ' + error.message);
    }
  };

  return (
    <section>
      <Container>
        <Row>
        <Col lg="12" className="d-flex justify-content-center">
  <h4 className="fw-bold">Users</h4>
</Col>

          <Col lg="12" className="pt-5">
            <table className="table">
              <thead>
                <tr>
                  <th>Username</th>
                  <th>Email</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr>
                    <td colSpan="3">
                      <h5 className="pt-5 fw-bold">Loading.......</h5>
                    </td>
                  </tr>
                ) : (
                  usersData?.map((user) => (
                    <tr key={user.id}> {/* Use Firestore document ID */}
                      <td>{user.displayName || 'N/A'}</td>
                      <td>{user.email || 'N/A'}</td>
                      <td>
                        <button
                          className="btn btn-danger"
                          onClick={() => {
                            deleteUser(user.id);
                          }}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default User;
