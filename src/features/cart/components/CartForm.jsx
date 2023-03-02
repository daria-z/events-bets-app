import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAllCart, setBetAmount } from "../cartSlise";

function CartForm() {
  const cart = useSelector(selectAllCart);

  console.log(cart.betAmount);
  const dispatch = useDispatch();

  const [sum, setSum] = useState("");
  const [winAmount, setWinAmount] = useState(sum * cart.coefSum);

  const onSumChange = (e) => {
    setSum(e.target.value);
    setWinAmount(() => (e.target.value * cart.coefSum).toFixed(2));
  };

  const buttonDisabled = Boolean(!sum > 0 || cart.bets.length < 1);

  const placeBet = () => {
    console.log("place");
  };

  return (
    <>
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
          disabled={buttonDisabled}
          onClick={placeBet}
          type="submit"
          className={`bg-white hover:bg-lightGrey2 text-gray-800 font-semibold mt-3 py-2 px-4 border border-gray-400 rounded shadow ${
            buttonDisabled && "opacity-50 cursor-not-allowed hover:bg-opacity-0"
          }`}
        >
          Готово
        </button>
      </form>
    </>
  );
}

export default CartForm;
