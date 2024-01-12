import { useSelector } from "react-redux/es/hooks/useSelector";

import CartItem from "../cart-item";

import { selectProductsTotalPrice } from "../../redux/cart/cart.selectors";

// Styles
import * as Styles from "./styles";

const Cart = ({ isVisible, setIsVisible }) => {
  const handleEscapeAreaClick = () => setIsVisible(false);

  const productsTotalPrice = useSelector(selectProductsTotalPrice);

  const { products } = useSelector((rootReducer) => rootReducer.cartReducer);

  return (
    <Styles.CartContainer isVisible={isVisible}>
      <Styles.CartEscapeArea onClick={handleEscapeAreaClick} />
      <Styles.CartContent>
        <Styles.CartTitle>Seu Carrinho</Styles.CartTitle>
        {products.map((product) => (
          <CartItem product={product} key={product.id} />
        ))}
        <Styles.CartTotal>Total: R${productsTotalPrice}</Styles.CartTotal>
      </Styles.CartContent>
    </Styles.CartContainer>
  );
};

export default Cart;
