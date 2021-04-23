import React from 'react';
import Contact from './Contact';

export default function User({name, dob, picture, ...rest }) {
  const {title, first, last} = name
  const {age} = dob
  return (
    <div>
      <img src ={picture.large} alt="name" />
      <p>Name : {title} {first} {last} </p>
      <p>Age : {age} </p>
      <Contact {...rest} />
      <hr /> 
    </div>
  )
}
