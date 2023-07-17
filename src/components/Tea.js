import React from 'react'

function Cup({guest}) {
    return <h2> Teac cup for guest #{guest}</h2>
}

function Tea() {
    let cups = [];

    for (let i = 1; i <= 6; i++) {
        cups.push(<Cup key={i} guest={i} />);
    }
  return <div>{cups}</div>;
}

export default Tea