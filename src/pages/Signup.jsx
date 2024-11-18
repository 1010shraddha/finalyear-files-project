import React, { useState } from "react";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col, Form, FormGroup } from "reactstrap";
import { Link } from "react-router-dom";
import "../style/login.css";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase.config";

const Signup = () => {
  const [Username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [file, setFile] = useState("");
  const [loading, setLoading] = useState(false); // Corrected this line

  const signup = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email, 
        password
      );
      const user = userCredential.user;
      console.log(user);
      
    } catch (error) {
      console.error("Error during signup:", error);
    } finally {
      setLoading(false); // Ensure loading is reset
    }
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  return (
    <Helmet title="Signup">
      <section>
        <Container>
          <Row>
            <Col lg="6" className="m-auto text-center">
              <h3 className="mb-4 fw-bold">Signup</h3>

              <Form className="auth__form" onSubmit={signup}>
                <FormGroup className="form__group">
                  <input
                    type="text"
                    placeholder="Username"
                    value={Username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </FormGroup>

                <FormGroup className="form__group">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </FormGroup>

                <FormGroup className="form__group">
                  <input
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </FormGroup>

                <FormGroup className="form__group d-flex align-items-center">
                  <label className="custom-file-upload me-3">
                    Choose File
                    <input type="file" onChange={handleFileChange} hidden />
                  </label>
                  <span className="file-name">
                    {file ? file.name : "No file chosen"}
                  </span>
                </FormGroup>

                <button type="submit" className="buy__btn auth__btn" disabled={loading}>
                  {loading ? "Creating Account..." : "Create an Account"}
                </button>
                <p>
                  Already have an account? <Link to="/login">Login</Link>
                </p>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Signup;
