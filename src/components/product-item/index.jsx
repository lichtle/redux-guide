import { BsCartPlus } from "react-icons/bs";
import { useDispatch } from "react-redux";

// Actions
import { addProductToCart } from "../../redux/cart/actions";

// Components
import CustomButton from "../custom-button/index";

// Styles
import * as Styles from "./styles";

// Utilities

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();

  const handleProductClick = () => {
    dispatch(addProductToCart(product)); // A função addProductToCart criada no arquivo actions.js tem como parâmetro "payload", ou seja, as informações necessárias que serão passadas para o reducer para que ele altere o estado da aplicação, como por exemplo o nome, preço e imagem do produto clicado. Aqui passamos como argumento "product", parâmetro já existente na função construtora do componente ProductItem. Ele mesmo já indica qual produto está sendo adicionado ao carrinho, e esta é a informação (que será como o payload) que o reducer usará
  };

  return (
    <Styles.ProductContainer>
      <Styles.ProductImage imageUrl={product.imageUrl}>
        <CustomButton startIcon={<BsCartPlus />} onClick={handleProductClick}>
          Adicionar ao carrinho
        </CustomButton>
      </Styles.ProductImage>

      <Styles.ProductInfo>
        <p>{product.name}</p>
        <p>R${product.price}</p>
      </Styles.ProductInfo>
    </Styles.ProductContainer>
  );
};

export default ProductItem;
