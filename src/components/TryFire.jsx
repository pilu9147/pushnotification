import React, { useState } from "react";
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  doc,
  setDoc,
} from "firebase/firestore";
import { db } from "../configFirebase";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";
function TryFire() {
  let navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    id: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const uuid = uuidv4();
      const idup = uuidv4();
      
      const userRef = doc(db, "users", uuid);
      await setDoc(userRef, { ...formData, id: uuid });

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        id: "",
      });
      navigate(`/${uuid}`);
      console.log("Data posted to Firestore successfully!");
    } catch (error) {
      console.error("Error posting data to Firestore: ", error);
    }
  };

  return (
    <div>
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
        <br />
        <br />

        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
        <br />
        <br />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <br />
        <br />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <br />
        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default TryFire;
