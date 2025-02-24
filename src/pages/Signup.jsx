// import React, { useState } from "react";
// import Helmet from "../components/Helmet/Helmet";
// import { Container, Row, Col, Form, FormGroup } from "reactstrap";
// import { Link } from "react-router-dom";
// import "../style/login.css";
// import { createUserWithEmailAndPassword,updateProfile,   } from "firebase/auth";
// import { ref, uploadBytesResumable,getDownloadUrl} from "firebase/storage";
// import { setDoc,doc } from "firebase/firestore";
// import { db } from "../firebase.config";
// import { auth } from "../firebase.config";
// import { storage } from "../firebase.config";
// import { toast } from "react-toastify";
// import { Download } from "@mui/icons-material";
//  import "../style/login.css";
//  import { useNavigate } from "react-router-dom";


// const Signup = () => {
//   const [Username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [file, setFile] = useState("");
//   const [loading, setLoading] = useState(false); // Corrected this line

//   const navigate = useNavigate()

//   const signup = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     try {
//       const userCredential = await createUserWithEmailAndPassword(
//         auth,
//         email, 
//         password
//       );
      
//       const user = userCredential.user;

//       const storageRef= ref(storage, `images/${Date.now() + username}`)
//       const uploadTask = uploadBytesResumbale(storageRef, file)
      
//       uploadTask.on((error) => {
//           toast.error(error.message); // Handle the error
//         },
//         () => {
//           getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
//             try {
//               // Update user profile
//               await updateProfile(user, {
//                 displayName: Username,
//                 photoURL: downloadURL,
//               });
      
//               // Store user data in Firestore database
//               await setDoc(doc(db, "users", user.uid), {
//                 uid: user.uid,
//                 displayName: Username,
//                 email: email,
//                 photoURL: downloadURL,
//               });
      
//               console.log("User profile updated and data stored successfully!");
//             } catch (error) {
//               console.error("Error saving user data:", error);
//               toast.error("Failed to save user data");
//             }
//           });
//         }
//       );
      

//       setLoading(false)
//       toast.success('Account created')
//       navigate('login')
      
//     } catch (error) {
//       setLoading(false)
//       toast.error("Someone is screwed up!!!")
//     } finally {
//       setLoading(false); // Ensure loading is reset
//     }
//   };

//   const handleFileChange = (e) => {
//     setFile(e.target.files[0]);
//   };

//   return (
//     <Helmet title="Signup">
//       <section>
//         <Container>
//           <Row>
//            {
//             loading? <Col lg='12' className="text-center"><h5 className="fw-bold">Loading.....</h5></Col> : <Col lg="6" className="m-auto text-center">
//             <h3 className="mb-4 fw-bold">Signup</h3>
            
//             <Form className="auth__form" onSubmit={signup}>
//               <FormGroup className="form__group">
//                 <input
//                   type="text"
//                   placeholder="Username"
//                   value={Username}
//                   onChange={(e) => setUsername(e.target.value)}
//                 />
//               </FormGroup>
            
//               <FormGroup className="form__group">
//                 <input
//                   type="email"
//                   placeholder="Enter your email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                 />
//               </FormGroup>
            
//               <FormGroup className="form__group">
//                 <input
//                   type="password"
//                   placeholder="Enter your password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                 />
//               </FormGroup>
            
//               <FormGroup className="form__group d-flex align-items-center">
//                 <label className="custom-file-upload me-3">
//                   Choose File
//                   <input type="file" onChange={handleFileChange} hidden />
//                 </label>
//                 <span className="file-name">
//                   {file ? file.name : "No file chosen"}
//                 </span>
//               </FormGroup>
            
//               <button type="submit" className="buy__btn auth__btn" disabled={loading}>
//                 {loading ? "Creating Account..." : "Create an Account"}
//               </button>
//               <p>
//                 Already have an account? <Link to="/login">Login</Link>
//               </p>
//             </Form>
//             </Col> 
//            }
//           </Row>
//         </Container>
//       </section>
//     </Helmet>
//   );
// };

// export default Signup;


import React, { useState } from "react";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col, Form, FormGroup } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
import { db, auth } from "../firebase.config";
import { toast } from "react-toastify";
import "../style/login.css";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  // Upload image to Cloudinary
  const uploadToCloudinary = async (file) => {
    if (!file) return null;

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "your_upload_preset"); // Replace with actual upload preset
    formData.append("cloud_name", "your_cloud_name"); // Replace with actual Cloudinary cloud name

    try {
      const response = await fetch("https://api.cloudinary.com/v1_1/your_cloud_name/image/upload", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) throw new Error("Failed to upload image");

      const data = await response.json();
      return data.secure_url; // Return uploaded image URL
    } catch (error) {
      console.error("Cloudinary upload failed:", error);
      toast.error("Image upload failed. Please try again.");
      return null;
    }
  };

  // Handle user signup
  const signup = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      
      let photoURL = "";
      if (file) {
        photoURL = await uploadToCloudinary(file);
      }

      // Update user profile in Firebase Auth
      await updateProfile(user, {
        displayName: username,
        photoURL: photoURL || "",
      });

      // Save user details to Firestore
      await setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        displayName: username,
        email,
        photoURL: photoURL || "",
      });

      toast.success("Account created successfully!");
      navigate("/login");
    } catch (error) {
      console.error("Signup error:", error);
      toast.error(error.message || "Signup failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Helmet title="Signup">
      <section>
        <Container>
          <Row>
            {loading ? (
              <Col lg="12" className="text-center">
                <h5 className="fw-bold">Loading...</h5>
              </Col>
            ) : (
              <Col lg="6" className="m-auto text-center">
                <h3 className="mb-4 fw-bold">Signup</h3>

                <Form className="auth__form" onSubmit={signup}>
                  <FormGroup className="form__group">
                    <input
                      type="text"
                      placeholder="Username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      required
                    />
                  </FormGroup>

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

                  <FormGroup className="form__group d-flex align-items-center">
                    <label className="custom-file-upload me-3">
                      Choose File
                      <input type="file" onChange={(e) => setFile(e.target.files[0])} hidden />
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
            )}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Signup;
