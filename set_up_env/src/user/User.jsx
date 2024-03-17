import React, { createContext, useEffect, useState } from 'react';
import UserProfile from './UserProfile';

const initialAdd = () => {
  console.log('rerender');

  return {
    nation: 'VN',
    city: {
      name: 'Ha Noi',
      street: 'Nguyen Trai'
    }
  };
};

const getAddress = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        nation: 'USA',
        city: {
          name: 'Washington DC',
          street: 'Cambridge'
        }
      });
    }, 3000);
  });
};

export const UserContext = createContext({
  address: {
    nation: 'England',
    city: {
      name: 'London',
      street: 'Circus'
    }
  },
  firstName: 'Linh Hoang',
  age: 100,
  increaseAge: () => {}
});

export default function User() {
  const [firstName, setFirstName] = useState('DungHM');
  const [age, setAge] = useState(24);
  const [, forceRender] = useState(0);
  const [address, setAddress] = useState(initialAdd);

  const reRender = () => {
    forceRender((preveState) => preveState + 1);
  };

  const increaseAge = () => {
    setAge((prevState) => prevState + 1);
  };

  const changeCity = () => {
    const newCityName = { ...address.city, name: 'Singapore' };
    setAddress((prevState) => ({
      ...prevState,
      city: newCityName
    }));
  };

  const changeStreet = () => {
    const newCity = { ...address.city, street: 'Nga Tu So' };
    setAddress((prevState) => ({
      ...prevState,
      city: newCity
    }));
  };

  // useEffect(() => {
  //   console.log('useEffect is same componentDidUpdate');
  // });

  useEffect(() => {
    // console.log('useEffect is same componentDidMount');
    getAddress().then((res) => {
      setAddress((prevState) => {
        const newAddress = { ...prevState };
        newAddress.city = res.city;
        return newAddress;
      });
    });

    return () => {
      // console.log('Huy call API');
    };
  }, []);

  useEffect(() => {
    // console.log('age', age);

    return () => {
      // console.log('Huy call API age');
    };
  }, [age]);

  return (
    <div>
      <UserContext.Provider
        value={{
          address,
          age,
          increaseAge,
          firstName
        }}
      >
        <UserProfile />
      </UserContext.Provider>

      <button onClick={reRender}>Rerender</button>
      <button onClick={changeCity}>Change City</button>
      <button onClick={changeStreet}>Change Street</button>
    </div>
  );
}
