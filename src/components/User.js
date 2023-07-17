import React from 'react'
import Greetings from './Greetings';

const user = {
    name: "Zosimo",
    profession: "Web Developer",
    imageUrl: require("../assets/images/hero.jpg"),
    imgSize: 99,
  };

function UserEntity() {
  return (
    <div className='text-center'>
        <h2><Greetings /></h2>
        <p className='fs-3 text-danger'>My name is {user.name} I'm a {user.profession}</p>
        <img src={user.imageUrl} alt={`Me as ${user.name}`} style={{width: user.imgSize, height: user.imgSize}} />
        <h5>Repeat using Props</h5>
    </div>
  )
}

export default UserEntity
export const userName = user.name;