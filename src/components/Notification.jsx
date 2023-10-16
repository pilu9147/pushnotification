
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import the styles
import { onMessageListener } from "../configFirebase"


const Notification = () => {
  useEffect(() => {
    const unsubscribe = onMessageListener().then((payload) => {
    
      const notification = {
        title: payload?.notification?.title,
        body: payload?.notification?.body,
      };

      if (notification.title && notification.body) {
        toast.info(`${notification.title}: ${notification.body}`);
      }
    });

    return () => {
      unsubscribe.catch((err) => console.log("Unsubscribe failed", err));
    };
  }, []);

  return (
    <div>
      <ToastContainer />
    </div>
  );
};

export default Notification;


