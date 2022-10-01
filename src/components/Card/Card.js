import React, { useState } from 'react';
import '../Card/Card.css';

import ReactModal from 'react-modal';

ReactModal.setAppElement('#root');

function Card({ item }) {
  let userAvatar = item.avatar_url;
  let userName = item.login;
  let userId = item.id;

  const [modelUser, setModelUser] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  console.log(modelUser);
  async function handlModel(ev) {
    const resp = await fetch(`https://api.github.com/users/${userName}`);
    if (!resp.ok) throw new Error(resp.statusText);
    let modelData = await resp.json();
    setModelUser(modelData);
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
        <div className="modalContainer">
          <div className="title">
            <h1>{modelUser.name}</h1>
          </div>
          <div className="bodyModel">
            <img src={userAvatar} alt={userId}></img>
            <p>{modelUser.bio}</p>
            <p>
              {' '}
              <span>Company: </span> {modelUser.company}
            </p>
            <p>
              {' '}
              <span>Followers: </span> {modelUser.followers}
            </p>
            <p>
              {' '}
              <span>Following: </span>
              {modelUser.following}
            </p>
          </div>
          <div className="titleCloseBtn">
            <button
              className="closeBtn"
              onClick={() => {
                setModalOpen(false);
              }}
            >
              Close
            </button>
          </div>
        </div>
      </ReactModal>
    </div>
  );
}

export default Card;
