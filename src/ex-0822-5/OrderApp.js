import { array } from 'prop-types';
import { useState } from 'react';
import './OrderApp.css';
import OrderList from './OrderList';
import Summary from './Summary';

const sampleData = [
  {
    id: 1,
    name: '紅色T-shirt',
    price: 100,
    img: 'https://i.imgur.com/1GrakTl.jpg',
  },
  {
    id: 2,
    name: '灰色T-shirt',
    price: 150,
    img: 'https://i.imgur.com/ba3tvGm.jpg',
  },
  {
    id: 3,
    name: '黑色T-shirt',
    price: 200,
    img: 'https://i.imgur.com/pHQ3xT3.jpg',
  },
];

//擴充product物件多一個count

function OrderApp() {
  const [products, setProducts] = useState(
    sampleData.map((v, i) => ({ ...v, count: 1 }))
  );

  const calculateTotalNumber = () => {
    let total = 0;
    for (let i = 0; i < products.length; i++) {
      total += products[i].count;
    }
    return total;
  };

  const calcTotalPrice = () => {
    let total = 0;
    for (let i = 0; i < products.length; i++) {
      total += products[i].count * products[i].price;
    }
    return total;
  };

  return (
    <>
      <div className="card">
        <div className="row">
          <OrderList products={products} setProducts={setProducts} />
          {/* 帶進來直接呼叫 */}
          <Summary
            calcTotalPrice={calcTotalPrice()}
            calculateTotalNumber={calculateTotalNumber()}
          />
        </div>
      </div>
    </>
  );
}

export default OrderApp;
