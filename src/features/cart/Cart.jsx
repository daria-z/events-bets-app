import { useSelector } from "react-redux";
import { selectAllCart } from "./cartSlise";
import { nanoid } from "@reduxjs/toolkit";

import Layout from "../../components/Layout";
import HeaderLink from "../../components/HeaderLink";
import { AiOutlineHome } from "react-icons/ai";
import CartItem from "./components/CartItem";
import CartForm from "./components/CartForm";

const Cart = () => {
  const cart = useSelector(selectAllCart);
  console.log(cart);

  const renderItems = cart.bets.map((bet) => {
    return (
      <CartItem
        id={bet.id}
        name={bet.name}
        result={bet.result}
        coef={bet.coef}
        key={nanoid()}
      />
    );
  });

  const renderEmptyCart = (
    <h2 className="text-2xl text-center mb-3">
      Тут пока пусто. Нужно выбрать хотя бы одно событие
    </h2>
  );


  return (
    <Layout
      title="Cart"
      link={
        <HeaderLink
          linkTo="/"
          icon={<AiOutlineHome className="text-[25px]" />}
        />
      }
    >
      <div className="max-w-xl">
        {cart.bets.length < 1 ? renderEmptyCart : renderItems}
       <p className="text-center mb-2">
          Суммарный коэффициент корзины: {cart.coefSum}
        </p>
      </div>
      <CartForm />
    </Layout>
  );
};

export default Cart;













