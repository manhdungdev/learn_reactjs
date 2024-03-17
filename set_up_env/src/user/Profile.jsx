import React, { useContext } from 'react';
import { UserContext } from './User';

export default function Profile() {
  const { firstName, age, address } = useContext(UserContext);
  return (
    <div>
      <h1>User functional component</h1>
      <h2>FirstName: {firstName}</h2>
      <h2>Age: {age}</h2>
      <h2>Nation: {address.nation}</h2>
      <h2>City: {address.city.name}</h2>
      <h2>Street: {address.city.street}</h2>
    </div>
  );
}
