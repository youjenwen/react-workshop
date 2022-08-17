import product from '../ex-0817-3/data/products.json';
//import {}和不加{}差別???

function Product() {
  return (
    <>
      <h1>Product</h1>
      <hr />
      <table className="table table-hover">
        <thead>
          <tr>
            <th>名稱</th>
            <th>價格</th>
          </tr>
        </thead>
        <tbody>
          {product.map((v, i) => {
            return (
              <tr key={v.id}>
                <td>{v.name}</td>
                <td>{v.price}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default Product;
