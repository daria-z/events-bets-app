import { Route, Routes } from "react-router-dom";
import AppLayout from "./components/AppLayout"
import Cart from "./pages/Cart";
import Home from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Home />} />
        <Route path="cart" element={<Cart />} />
      </Route>
    </Routes>
  );
}
export default App;





