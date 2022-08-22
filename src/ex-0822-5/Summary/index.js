function Summary({ calcTotalPrice, calculateTotalNumber }) {
  return (
    <>
      <div className="col-md-4 summary">
        <div>
          <h5>
            <b>Summary</b>
          </h5>
        </div>
        <hr />
        <div className="row">
          <div className="col pl-0">ITEMS: {calculateTotalNumber}</div>
        </div>
        <div className="row bt-1-ptb-2v">
          <div className="col">TOTAL PRICE</div>
          <div className="col text-right">{calcTotalPrice}</div>
        </div>
        <button className="btn">CHECKOUT</button>
      </div>
    </>
  );
}

export default Summary;
