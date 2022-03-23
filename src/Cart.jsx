import React from "react";
import { useSelector, useDispatch} from "react-redux";

const Cart = () => {
  const basketItems = useSelector((state) => state.basketItems);
  const dispatch = useDispatch()
  const handleClick = (id) => {
    dispatch({type: "REMOVE_FROM_CART", payload: id})
  }

  return (
    <div className="container">
      {basketItems &&
        basketItems.map((item) => (
          <div className="item" key={item.id}>
            <img src={item.url} />
            <div className="content">
              <h1>{item.title}</h1>
              <button className="btn" onClick={() => handleClick(item.id)}>Remove from basket</button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Cart;
