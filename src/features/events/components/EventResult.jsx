import { useDispatch } from "react-redux";
import { addToCart } from "../../cart/cartSlise";

function EventResult({ id, name, results, isInCart }) {
  const dispatch = useDispatch();
  return (
    <li>
      <button
        className="bg-white p-2 rounded-md"
        onClick={() =>
          dispatch(
            addToCart({ id, name, coef: results.coef, result: results.result })
          )
        }
        disabled={isInCart}
      >
        {results.result}
      </button>
    </li>
  );
}

export default EventResult;
