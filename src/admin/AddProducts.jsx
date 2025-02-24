
// import React,{useState} from 'react'
// import {Container, Row, Col, Form ,FormGroup} from "reactstrap";
// import '../style/addproducts.css';
// import {toast} from 'react-toastify';

// import {db,storage} from '../firebase.config';
// import { ref,uploadBytesResumable,getDownloadURL} from 'firebase/storage';
// import { addDoc, collection} from "firebase/firestore";
// import { useNavigate } from 'react-router-dom';
// //import { Download } from '@mui/icons-material';



// const AddProducts = () => {

//   const [enterTitle,setEnterTitle]=useState('');
//   const [enterShortDesc,setEnterShortDesc]=useState('');
//   const [enterDescription,setEnterDescription]=useState('');
//   const [enterCategory,setEnterCategory]=useState('');
//   const [enterPrice,setEnterPrice]=useState('');
//   const [enterProductImg,setEnterProductImg]=useState(null);
//   //const [loading,setLoading]=useState(false);
// const navigate=useNavigate()
//   const addProduct=async(e)=>{
//     e.preventDefault()

//     // const product ={
//     //   title: enterTitle,
//     //   shortDesc: enterShortDesc,
//     //   description: enterDescription,
//     //   category: enterCategory,
//     //   price: enterPrice,
//     //   imgUrl: enterProductImg
//     // };

//     //===== add products to the firebase
//     try{
//       const docRef=await collection(db,'products')
//       const storageRef=ref(storage,`productImages/${Date.now()+ enterProductImg.name }`
//       )
//       const uploadTask=uploadBytesResumable(storageRef,enterProductImg)

//       uploadTask.on(()=>{
//         toast.error('images not uploaded!')
//       },()=>{

//         getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURL)=>{
//           await addDoc(docRef,{
//             title: enterTitle,
//             shortDesc: enterShortDesc,
//             description: enterDescription,
//             category: enterCategory,
//             price: enterPrice,
//             imgUrl: downloadURL,
//           });
//         });
      
//       }
//     );
//     toast.success('product successfully added!')
//     navigate('/dashboard/all-products')
//     }
//     catch(error){
//    toast.error("product not added!")
//     }
    


//     // console.log(product);
//   };
//   return (
//     <section>
//       <Container>
//         <Row>
//           <Col lg="12">
//           <h4 className='mb-5'>Add Product</h4>
//           <Form onSubmit={addProduct}>
//              <FormGroup className="form_group">
//               <span>Product title</span>
//               <input type="text" placeholder="Double sofa" value=
//               {enterTitle} onChange={e=> setEnterTitle(e.target.value)} required/>
//              </FormGroup>

//              <FormGroup className="form_group">
//              <span>Short Description</span>
//              <input type="text" placeholder="lorem...." value={enterShortDesc} onChange={e=> setEnterShortDesc(e.target.value)} required/>
//              </FormGroup>

//              <FormGroup className="form_group">
//              <span>Description</span>
//              <input type="text" placeholder="Description..." value={enterDescription} onChange={e=> setEnterDescription(e.target.value)} required/>
//              </FormGroup>

//               <div className='d-flex align-items-center justify-content-between gap-5'>
//               <FormGroup className="form_group w-50">
//              <span>Price</span>
//              <input type="number" placeholder="Rs.10000" value={enterPrice} onChange={e=> setEnterPrice(e.target.value)} required/>
//              </FormGroup>

//              <FormGroup className="form_group w-50" value={enterCategory} onChange={e=> setEnterCategory(e.target.value)} required>
//               <span>Category</span>
//               <select className='w-100 p-2'>
//                 <option value="Chair">Chair</option>
//                 <option value="Sofa">Sofa</option>
//                 <option value="Cabinet">Cabinet</option>
//                 <option value="Bench">Bench</option>
//                 <option value="Matress">Matress</option>
//                 <option value="Study Table">Study Table</option>
                

//               </select>
//              </FormGroup>
//               </div> 

//               <div>
//               <FormGroup className="form_group">
//              <span>Product Image</span>
//              <input type="file" onChange={e => setEnterProductImg(e.target.files[0])} required/>
//              </FormGroup>
//               </div>

//               <button className="buy_btn" type="submit">Add Product</button>
//           </Form>
//           </Col>
//         </Row>
//       </Container>
//     </section>
//   )
// }

// export default AddProducts

import React, { useState } from "react";
import { Container, Row, Col, Form, FormGroup } from "reactstrap";
import "../style/addproducts.css";
import { toast } from "react-toastify";
import { db } from "../firebase.config";
import { addDoc, collection } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const AddProducts = () => {
  const [enterTitle, setEnterTitle] = useState("");
  const [enterShortDesc, setEnterShortDesc] = useState("");
  const [enterDescription, setEnterDescription] = useState("");
  const [enterCategory, setEnterCategory] = useState("Sofa"); // Default category
  const [enterPrice, setEnterPrice] = useState("");
  const [enterProductImg, setEnterProductImg] = useState(null);
  const navigate = useNavigate();

  // Upload Image to Cloudinary
  const uploadToCloudinary = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "your_upload_preset"); // Change to your Cloudinary upload preset

    try {
      const response = await fetch(
        "https://api.cloudinary.com/v1_1/your_cloud_name/image/upload",
        {
          method: "POST",
          body: formData,
        }
      );
      const data = await response.json();

      if (!data.secure_url) {
        throw new Error("Cloudinary upload failed");
      }

      return data.secure_url;
    } catch (error) {
      console.error("Cloudinary Upload Error:", error);
      toast.error("Image upload failed!");
      return null;
    }
  };

  // Add Product to Firestore
  const addProduct = async (e) => {
    e.preventDefault();

    // Validation before submission
    if (!enterTitle || !enterShortDesc || !enterDescription || !enterCategory || !enterPrice || !enterProductImg) {
      toast.error("Please fill in all fields.");
      return;
    }

    try {
      toast.info("Uploading image... Please wait.");
      const imageUrl = await uploadToCloudinary(enterProductImg);
      if (!imageUrl) return;

      // Upload product details to Firestore
      await addDoc(collection(db, "products"), {
        title: enterTitle,
        shortDesc: enterShortDesc,
        description: enterDescription,
        category: enterCategory,
        price: parseFloat(enterPrice), // Ensure price is a number
        imgUrl: imageUrl,
      });

      toast.success("Product added successfully!");
      navigate("/dashboard/all-products");
    } catch (error) {
      console.error("Error adding product:", error);
      toast.error("Product not added!");
    }
  };

  return (
    <section>
      <Container>
        <Row>
          <Col lg="12">
            <h4 className="mb-5">Add Product</h4>
            <Form onSubmit={addProduct}>
              <FormGroup className="form_group">
                <span>Product Title</span>
                <input
                  type="text"
                  placeholder="Enter product title"
                  value={enterTitle}
                  onChange={(e) => setEnterTitle(e.target.value)}
                  required
                />
              </FormGroup>

              <FormGroup className="form_group">
                <span>Short Description</span>
                <input
                  type="text"
                  placeholder="Enter short description"
                  value={enterShortDesc}
                  onChange={(e) => setEnterShortDesc(e.target.value)}
                  required
                />
              </FormGroup>

              <FormGroup className="form_group">
                <span>Description</span>
                <input
                  type="text"
                  placeholder="Enter full product description"
                  value={enterDescription}
                  onChange={(e) => setEnterDescription(e.target.value)}
                  required
                />
              </FormGroup>

              <div className="d-flex align-items-center justify-content-between gap-5">
                <FormGroup className="form_group w-50">
                  <span>Price (Rs.)</span>
                  <input
                    type="number"
                    placeholder="Enter price"
                    value={enterPrice}
                    onChange={(e) => setEnterPrice(e.target.value)}
                    required
                  />
                </FormGroup>

                <FormGroup className="form_group w-50">
                  <span>Category</span>
                  <select
                    className="w-100 p-2"
                    value={enterCategory}
                    onChange={(e) => setEnterCategory(e.target.value)}
                    required
                  >
                    <option value="Chair">Chair</option>
                    <option value="Sofa">Sofa</option>
                    <option value="Cabinet">Cabinet</option>
                    <option value="Bench">Bench</option>
                    <option value="Mattress">Mattress</option>
                    <option value="Study Table">Study Table</option>
                  </select>
                </FormGroup>
              </div>

              <FormGroup className="form_group">
                <span>Product Image</span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => setEnterProductImg(e.target.files[0])}
                  required
                />
              </FormGroup>

              <button className="buy_btn" type="submit">
                Add Product
              </button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AddProducts;



