import { useState } from 'react';

import ChildA from './ChildA';
import ChildB from './ChildB';

function Parent() {
  // const [pData, setPdata] = useState('data in Parent');

  const [dataFromChildB, setDataFromChildB] = useState('');
  return (
    <>
      <h1>Parent</h1>
      {/* <p>來自ChildB 的資料:{dataFromChildB}</p>
      <ChildA pData={pData} /> */}
      <ChildA dataFromChildB={dataFromChildB} />
      <ChildB setDataFromChildB={setDataFromChildB} />
    </>
  );
}

export default Parent;
