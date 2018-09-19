import React from 'react';
import Card from './Card';


// a dumb component 
const CardList = ({ robots }) => {
  //Error Boundry Uncomment for Production

  // if (true) {
  //   throw new Error("NOOOOOOOOO")
  // }

  return (
    <div>
      {
        robots.map((user, i) => {
          return (
            <Card
              key={i}
              id={robots[i].id}
              name={robots[i].name}
              email={robots[i].email}
              />
          );
        })
      }
    </div>
  );
}

export default CardList;