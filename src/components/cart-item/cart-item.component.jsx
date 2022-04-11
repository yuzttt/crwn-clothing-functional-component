import "./cart.item.style.scss";

const CartItem = ({ cartItem }) => {
    const { name, imageUrl, price, quantity } = cartItem;
    return (
        <div className="cart-item-container">
            <img src={imageUrl} alt={`${name}`} />
            <div className='otem-details'>
                <span className="name">{name}</span><br/>
                <span className="price">
                 {quantity}*${price}
                </span>
            </div>

        </div>)
};

export default CartItem;
