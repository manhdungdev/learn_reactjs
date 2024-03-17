import React, { useEffect } from 'react';
import { useState } from 'react';
import { flushSync } from 'react-dom';

export default function AutoBatching() {
  const [count, setCount] = useState(1);
  const [flag, setFlag] = useState(true);

  const handleClick = () => {
    flushSync(() => {
      setCount((c) => c + 1);
    });

    flushSync(() => {
      setFlag((f) => !f);
    });
  };

  useEffect(() => {
    setTimeout(() => {
      flushSync(() => {
        setCount((c) => c + 1);
      });

      flushSync(() => {
        setFlag((f) => !f);
      });
    }, 1000);
  }, []);

  console.log('rerender');

  return (
    <div>
      AutoBatching
      <button onClick={() => setCount(1)}>Click me</button>
    </div>
  );
}
