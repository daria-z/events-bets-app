import { useSelector } from "react-redux";
import { selectAllCart } from "./cartSlise";
import { nanoid } from "@reduxjs/toolkit";

import CartItem from "./components/CartItem";
import CartForm from "./components/CartForm";

const CartContent = () => {
  const cart = useSelector(selectAllCart);

  const renderItems = cart.bets.map((bet) => {
    return (
      <>
        <CartItem
          id={bet.id}
          name={bet.name}
          result={bet.result}
          coef={bet.coef}
          key={nanoid()}
        />
      </>
    );
  });

  const renderContent = (
    <>
      {renderItems}
      <CartForm />
    </>
  );

  const renderEmptyCart = (
    <h2 className="text-2xl text-center mb-3">
      Тут пока пусто. Нужно выбрать хотя бы одно событие чтобы сделать ставку
    </h2>
  );


  return (
      <div className="max-w-xl">
        {cart.bets.length < 1 ? renderEmptyCart : renderContent}
      </div>
  );
};

export default CartContent;


















