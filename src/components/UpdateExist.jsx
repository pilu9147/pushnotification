
import React, { useEffect, useState } from 'react';
import { initializeApp } from 'firebase/app';
import {  doc, setDoc, updateDoc, FieldValue,getDocs,collection } from 'firebase/firestore'; 
import { db } from '../configFirebase';
import { v4 as uuidv4 } from 'uuid';
import { useParams, useNavigate } from 'react-router-dom';

function UpdateExist() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [eventsData, setEventsData] = useState([]);
  console.log(eventsData,'eventsdata');
  const [newObjectData, setNewObjectData] = useState({
    height: 0,
    color: '',
    lang: '',
  });

  console.log(id, 'id');
  const fetchdata = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'users'));
      const events = querySnapshot.docs.map(doc => doc.data());
      console.log('LOG 1', events);
      setEventsData(events);
    } catch (error) {
      console.error('Error fetching events:', error);
    }
  };
  useEffect(
    ()=>{
      fetchdata()
    }
    ,[]
  )
 
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewObjectData({
      ...newObjectData,
      [name]: value,
    });
  };

  const handleUpdateClick = async () => {
    try {
      const newUUID = uuidv4();
      const userDocRef = doc(db, 'users', id);
      await updateDoc(userDocRef, {
        [newUUID]: {...newObjectData,id:newUUID},
      });

      console.log('Document updated successfully!');
    
    } catch (error) {
      console.error('Error updating document:', error);
    }
  };

  return (
    <>

    
    <div>
      <h2>Update Existing Object</h2>
      <form>
        <label htmlFor="height">Height:</label>
        <input
          type="number"
          id="height"
          name="height"
          value={newObjectData.height}
          onChange={handleInputChange}
        />
        <br />

        <label htmlFor="color">Color:</label>
        <input
          type="text"
          id="color"
          name="color"
          value={newObjectData.color}
          onChange={handleInputChange}
        />
        <br />

        <label htmlFor="lang">Lang:</label>
        <input
          type="text"
          id="lang"
          name="lang"
          value={newObjectData.lang}
          onChange={handleInputChange}
        />
      </form>
      <button onClick={handleUpdateClick}>Update Document</button>
    </div>


    <div>
      {
        eventsData.map((e,i)=>{
          return (
            <div style={{display:'flex',justifyContent:'space-between'}} key={i}>
              <p>{e.firstName}</p>
              <p>{e.lastName}</p>
              <p>
                {e.id}
              </p>
            </div>
          )
        })
      }
    </div>
    </>
  );
}

export default UpdateExist;
