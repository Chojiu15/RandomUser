import React from 'react';

export default function Contact({location, email, cell}) {
    const {city, postcode, state, country, street} = location
    return (
    <div>
 <p>Address: {street.name} {street.number}, {postcode} {city} {state} {country} </p>      
 <p>Email: {email} </p>
      <p>Phone number: {cell} </p>
    </div>
  )
}
