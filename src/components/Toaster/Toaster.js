import React from 'react';
import { ToastContainer, toast } from 'react-toastify';

export default function Controls(props) {

    

  return (
    <ToastContainer
        position="top-center"
        autoClose={7000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover />
  );
}
