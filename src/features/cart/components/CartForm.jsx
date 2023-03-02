import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAllCart, placeNewBet, clearCart } from "../cartSlise";

function CartForm() {
  const dispatch = useDispatch();

  const cart = useSelector(selectAllCart);

  const [sum, setSum] = useState("");
  const [winAmount, setWinAmount] = useState(0);
  const [addRequestStatus, setAddRequestStatus] = useState("idle");

  const onSumChange = (e) => {
    setSum(e.target.value);
    setWinAmount(() => (e.target.value * cart.coefSum).toFixed(2));
  };

  const canPlace =
    Boolean(sum > 0 || cart.bets.length > 1) && addRequestStatus === "idle";;


   const placeBetClicked = () => {
     if (canPlace) {
       try {
         setAddRequestStatus("pending");
         dispatch(placeNewBet({ ...cart, betAmount: sum }));
         dispatch(clearCart());
         setSum("");
         setWinAmount(0);
         console.log("Ставка сделана")
       } catch (err) {
         console.error("Не получилось сделать ставку, попробуйте ещё раз", err);
       } finally {
         setAddRequestStatus("idle");
       }
     }
  };

  return (
    <>
      <p className="text-center mb-2">
        Суммарный коэффициент корзины: {(cart.coefSum).toFixed(2)}
      </p>
      <form className="text-center">
        <label htmlFor="sum">Сумма ставки: </label>
        <input
          type="number"
          id="sum"
          name="sum"
          value={sum}
          onChange={onSumChange}
          autoFocus
          placeholder="введите сумму"
          className="border-2 border-gray-500 p-2 mb-2 rounded-md w-full focus:border-tail-400 focus:ring-tail-400"
        />
        <p>Возможный выигрыш: {winAmount} ₽</p>

        <button
          disabled={!canPlace}
          onClick={placeBetClicked}
          type="button"
          className={`bg-white hover:bg-lightGrey2 text-gray-800 font-semibold mt-3 py-2 px-4 border border-gray-400 rounded shadow ${
            !canPlace && "opacity-50 cursor-not-allowed hover:bg-opacity-0"
          }`}
        >
          Сделать ставку
        </button>
      </form>
    </>
  );
}

export default CartForm;
