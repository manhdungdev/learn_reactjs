import React, { useEffect, useState } from 'react';
import fetchAPI from './api';
import useGetUser from './useGetUser';

export default function Navigation() {
  //   const [data, setName] = useState({});
  //   useEffect(() => {
  //     fetchAPI().then((res) => {
  //       setName(res.data);
  //     });
  //   });

  const data = useGetUser();
  return <div>Navigation {data?.user}</div>;
}
