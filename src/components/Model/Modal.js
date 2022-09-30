import React from 'react';
import './Modal.css';

function Modal({ closeModal, modelUser }) {
  console.log(modelUser);
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              closeModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title">
          <h1>{modelUser.name}</h1>
        </div>
        <div className="body">
          <img src={modelUser.avatar_url} alt={modelUser.id}></img>
          <p>{modelUser.following}</p>
          <p>{modelUser.followers}</p>
        </div>
        <div className="footer"></div>
      </div>
    </div>
  );
}

export default Modal;
