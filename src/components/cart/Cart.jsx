import { useCart } from "../../customHooks/useCart";
import CartOrderSummary from "./CartOrderSummary";
import CartProducts from "./CartProducts";


function Cart() {
  const { cart } = useCart();
  return (
    <div  className="flex flex-col items-center p-8">
      <h1 className="receipt-title text-2xl font-bold text-center mb-4">Cart</h1>
      <p>Items</p>
      <CartProducts/>
      <CartOrderSummary/>

    </div>
  );
}

export default Cart;
