import React, { useEffect, useState } from 'react';
import fetchAPI from './api';

export default function useGetUser() {
  const [data, setName] = useState({});
  useEffect(() => {
    fetchAPI().then((res) => {
      setName(res.data);
    });
  });
  return data;
}
