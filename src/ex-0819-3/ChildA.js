function ChildA(props) {
  return (
    <>
      <h1>ChildA</h1>
      {/* <p>來自{props.pData}</p> //來自parent */}
      <p>來自Child B的資料:{props.dataFromChildB}</p>
    </>
  );
}

export default ChildA;
