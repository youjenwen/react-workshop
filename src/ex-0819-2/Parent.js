import Child from './Child';

function Parent() {
  return (
    <>
      <h1>Parent</h1>
      <Child text="Hello" name="Amy" total={123} />
      <Child text="Bye" name="Allen" total={567} />
      <Child />
    </>
  );
}

export default Parent;
