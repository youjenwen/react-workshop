//props接住Parent傳的屬性 & 屬性值
//解構方法二 寫在Child(這裡)在Parent.js可以快速知道要傳甚麼給Child
function Child({ name = '無名人士', text = '你好', total = 100 }) {
  // console.log(props);
  //通常直接解構
  //解構方法一
  //   const { name, text, total } = props;
  return (
    <>
      <h1>Child</h1>
      {/* {props.name},{props.text}
      <p>總共:{props.total}元</p> */}
      {name},{text}
      <p>總共:{total}元</p>
    </>
  );
}
// Child.defaultProps = {
//   name: '無名人士',
//   text: '你好',
//   total: 100,
// };

export default Child;
