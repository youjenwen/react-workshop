// import { useState } from 'react';
import ProductItem from './ProductItem';

function OrderList({ products, setProducts }) {
  // const [deleteItem, setDeleteItem] = useState('');

  const deleteProduct = (id) => {
    setProducts(products.filter((v2, i2) => id !== v2.id));
  };

  return (
    <>
      <div className="col-md-8 cart">
        <div className="title">
          <div className="row">
            <div className="col">
              <h4>
                <b>Shopping Cart</b>
              </h4>
            </div>
            <div className="col align-self-center text-right text-muted">
              3 items
            </div>
          </div>
        </div>
        {products.map((v, i) => {
          const { id, name, price, img, count } = v;
          return (
            <ProductItem
              key={id}
              id={id}
              name={name}
              price={price}
              img={img}
              count={count}
              setCount={(newCount) => {
                const newProducts = products.map((v2, i2) => {
                  return id === v2.id ? { ...v2, count: newCount } : { ...v2 };
                });
                setProducts(newProducts);
              }}
              deleteProduct={deleteProduct}
            />
          );
        })}

        <div className="back-to-shop">
          <span className="text-muted">Back to shop</span>
        </div>
      </div>
    </>
  );
}

export default OrderList;
