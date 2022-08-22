function ProductItem({ id, name, price, img, count, setCount, deleteProduct }) {
  return (
    <>
      <div className="row border-top border-bottom">
        <div className="row main align-items-center">
          <div className="col-2">
            <img className="img-fluid" src={img} alt="" />
          </div>
          <div className="col">
            <div className="row text-muted">Shirt</div>
            <div className="row">{name}</div>
          </div>
          <div className="col">
            <a
              href="#/"
              onClick={() => {
                setCount(count <= 0 ? 0 : count - 1);
              }}
            >
              -
            </a>
            <a href="#/" className="border">
              {count}
            </a>
            <a
              href="#/"
              onClick={() => {
                setCount(count + 1);
              }}
            >
              +
            </a>
          </div>
          <div className="col">
            {price}
            <button
              className="close"
              onClick={() => {
                deleteProduct(id);
                // console.log({ id });
                // const newProducts = deleteItem.filter((v, i) => {
                //   return id !== v.id;
                // });
                // setDeleteItem(newProducts);
              }}
            >
              &#10005;
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductItem;
