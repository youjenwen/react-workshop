import { useEffect, useState } from 'react';

function ChildB(props) {
  const [cData, setCdata] = useState('data in Child B');

  //   useEffect(() => {
  //     //資料傳回parent
  //     props.setDataFromChildB(cData);
  //   }, []);
  return (
    <>
      <h1>ChildB</h1>
      <button
        onClick={() => {
          props.setDataFromChildB(cData);
        }}
      >
        傳資料
      </button>
    </>
  );
}

export default ChildB;
