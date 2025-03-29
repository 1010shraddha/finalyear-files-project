import React, { useState } from "react";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col, Form, FormGroup } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import "../style/login.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase.config"; // ✅ Import Firestore
import { doc, getDoc } from "firebase/firestore"; // ✅ Import Firestore functions
import { toast } from "react-toastify";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const signIn = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Check if email is verified
      if (!user.emailVerified) {
        toast.error("Please verify your email before logging in.");
        setLoading(false);
        return;
      }

      // ✅ Check user role in Firestore
      const userDoc = await getDoc(doc(db, "users", user.uid));
      const userRole = userDoc.exists() ? userDoc.data().role : "User"; // Default to "User" if no role found

      toast.success("Successfully logged in");

      // ✅ Redirect based on role
      if (userRole === "Admin") {
        navigate("/dashboard"); // Redirect Admins
      } else {
        navigate("/home"); // Redirect Regular Users
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Helmet title="Login">
      <section>
        <Container>
          <Row>
            {loading ? (
              <Col lg="12" className="text-center">
                <h5 className="fw-bold">Loading.....</h5>
              </Col>
            ) : (
              <Col lg="6" className="m-auto text-center">
                <h3 className="mb-4 fw-bold">Login</h3>

                <Form className="auth__form" onSubmit={signIn}>
                  <FormGroup className="form__group">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </FormGroup>
                  <FormGroup className="form__group">
                    <input
                      type="password"
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </FormGroup>

                  <button type="submit" className="buy__btn auth__btn" disabled={loading}>
                    {loading ? "Logging in..." : "Login"}
                  </button>
                  <p>
                    Don't have an account? <Link to="/signup">Create an account</Link>
                  </p>
                </Form>
              </Col>
            )}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Login;
