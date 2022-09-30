import React, { useState } from 'react';
import '../Card/Card.css';
// import { useState } from 'react';
import Modal from 'react-model';

Modal.setAppElement('#root');

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

      <Modal isOpen={modalOpen}>
        <p>hi this is modal</p>
      </Modal>
    </div>
  );
}

export default Card;
