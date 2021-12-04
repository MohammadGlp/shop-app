import { CartItemContainer, CartItemImage, ItemDetailsContainer, NameContainer } from './cart-item.styles';

const CartItem = ({ item: {name, price, imageUrl, quantity}}) => {
    return (
        <CartItemContainer>
            <CartItemImage src={imageUrl} alt="item"/>
            <ItemDetailsContainer>
                <NameContainer>{name}</NameContainer>
                <span>{quantity} x {price}</span>
            </ItemDetailsContainer>
        </CartItemContainer>
    );
}

export default CartItem;