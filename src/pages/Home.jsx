import Layout from "../components/Layout";
import HeaderLink from "../components/HeaderLink";
import { AiOutlineShoppingCart } from "react-icons/ai";
import EventsList from "../features/events/EventsList";

const Home = () => {
  return (
    <Layout
      title="Cart"
      link={
        <HeaderLink
          linkTo="cart"
          icon={<AiOutlineShoppingCart className="text-[25px]" />}
        />
      }
    >
      <EventsList />
    </Layout>
  );
};

export default Home;
