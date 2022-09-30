import React from 'react';
import Card from '../Card/Card.js';

const Main = ({ user }) => {
  if (user.length === 0) {
    return (
      <>
        <h2>Welcome!</h2>
        <p>Please Enter any name to search it in Github</p>
        <p>Clicking on image will show you more details</p>
      </>
    );
  } else {
    return (
      <div>
        {user.map((item) => (
          // console.log(` List of ${item}`)
          <Card key={item.login} item={item} />
        ))}
      </div>
    );
  }
};

export default Main;
