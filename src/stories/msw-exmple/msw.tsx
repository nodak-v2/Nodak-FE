'use client';

import { useEffect, useState } from 'react';

const Msw = () => {
  const [data, setData] = useState();

  useEffect(() => {
    fetch('posts')
      .then(res => res.json())
      .then(json => setData(json));
  }, []);

  return <div>{JSON.stringify(data)}</div>;
};

export default Msw;
