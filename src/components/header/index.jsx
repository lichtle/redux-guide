import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// Components
import Cart from "../cart/index";

// Styles
import * as Styles from "./styles";

// Utilities
import { loginUser, logoutUser } from "../../redux/user/actions";
import {
  selectProductsCount,
} from "../../redux/cart/cart.selectors";

function Header() {
  const [cartIsVisible, setCartIsVisible] = useState(false);

  const dispatch = useDispatch();

  const { currentUser } = useSelector((state) => state.userReducer); // Pegando o valor de currentUser do arquivo reducer (pasta user). Se dermos um console.log em currentUser, obteremos o valor atual do estado userReducer, que é null. Este valor pode ser usado para realizar a renderização condicional de determinado elemento. Neste exemplo, se currentUser for null, o botão que aparece para o usuário é "sair". Se for true, o botão que aparece é o de "login"

  const productsCount = useSelector(selectProductsCount); // Criando uma variável que armazenará a quantia de produtos no carrinho. Essa quantidade será atualizada toda vez que a chave products (do reducer cartReducer) for alterada por alguma ação, como por exemplo a de acrescentar um produto no carrinho. Um dado gerado através da mudança de um estado é chamado de derived data, ou seja, um dado que deriva de outro dado que está dentro do reducer. Para trabalhar com esse tipo de dado usamos os selectors. Criamos um arquivo separado para eles e, nesse caso, aplicamos um método para obter o número total de itens de um array para ser exibido ao usuário. Abaixo temos uma variável (totalPrice) também utilizando o conceito de selectors

  const handleCartClick = () => {
    setCartIsVisible(true);
  };

  const handleLoginClick = () => {
    dispatch(loginUser({ name: "Felipe Rocha", email: "felipe@rocha.com" }));
  };

  const handleLogoutClick = () => {
    dispatch(logoutUser());
  };

  return (
    <Styles.Container>
      <Styles.Logo>Redux Shopping</Styles.Logo>
      <Styles.Buttons>
        {currentUser ? (
          <div onClick={handleLogoutClick}>Sair</div>
        ) : (
          <div onClick={handleLoginClick}>Login</div>
        )}
        <div onClick={handleCartClick}>Carrinho ({productsCount})</div>
      </Styles.Buttons>

      <Cart isVisible={cartIsVisible} setIsVisible={setCartIsVisible} />
    </Styles.Container>
  );
}

export default Header;
