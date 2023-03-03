import Layout from "../components/Layout";
import HeaderLink from "../components/HeaderLink";
import { AiOutlineHome } from "react-icons/ai";
import CartContent from "../features/cart/CartContent";

const Cart = () => {


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
      <CartContent />
    </Layout>
  );
};

export default Cart;


















