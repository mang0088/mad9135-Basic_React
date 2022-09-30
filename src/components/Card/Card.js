import React, { useState } from 'react';
import '../Card/Card.css';
import '../Card/Modal.css';
// import { useState } from 'react';
import ReactModal from 'react-modal';

// Modal.setAppElement('#root');

function Card({ item }) {
  let userAvatar = item.avatar_url;
  let userName = item.login;
  let userId = item.id;

  const [modelUser, setModelUser] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);

  async function handlModel(ev) {
    const resp = await fetch(`https://api.github.com/users/${userName}`);
    if (!resp.ok) throw new Error(resp.statusText);
    let modelData = await resp.json();
    setModelUser(modelData.items);
    console.log(modelData);
    setModalOpen(true);
  }

  return (
    <div>
      <div
        className="openModel"
        style={{ listStyle: 'none' }}
        onClick={handlModel}
      >
        <div className="card 1" data-index={userName}>
          <div className="card_image">
            <img src={userAvatar} alt={userId}></img>
          </div>
          <div className="card_title title-white">
            <p>{userName}</p>
          </div>
        </div>
      </div>

      <ReactModal isOpen={modalOpen}>
        <div className="modalBackground">
          <div className="modalContainer">
            <div className="titleCloseBtn">
              <button
                onClick={() => {
                  setModalOpen(false);
                }}
              >
                X
              </button>
            </div>
            <div className="title">
              <h1>{userName}</h1>
            </div>
            <div className="body">
              <img src={userName} alt={userId}></img>
              <p>{item.following}</p>
              <p>{item.followers}</p>
            </div>
            <div className="footer"></div>
          </div>
        </div>
      </ReactModal>
    </div>
  );
}

export default Card;
