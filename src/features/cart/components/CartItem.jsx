import { AiOutlineDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { removeBet } from "../cartSlise";
function CartItem({ id, name, result, coef }) {

  const dispatch = useDispatch()

  return (
    <>
      <div className="flex mb-5 bg-lightGrey1 rounded-2xl p-5">
        <div>
          <div className="flex gap-2">
            <b>Событие</b>
            <span>{name}</span>
          </div>
          <div className="flex gap-2">
            <b>Исход</b>
            <span>{result}</span>
          </div>
          <div className="flex gap-2">
            <b>Коэффициент</b>
            <span>{coef}</span>
          </div>
        </div>
        <AiOutlineDelete
          role="button"
          className="text-[20px] ml-auto pl-1 hover:opacity-60"
          onClick={() => dispatch(removeBet(id))}
        />
      </div>
    </>
  );
}

export default CartItem;
