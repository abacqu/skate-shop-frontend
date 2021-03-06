import { useParams, useNavigate } from "react-router-dom";

const CartItems = (props) => {
  const { id } = useParams();
  const history = useNavigate();

  const handleRemoveCartItem = (id) => {
    props.deleteCartItems(id);
    history('/cart');
  };

  const loaded = () => {
    return props.cartItems.map((items) => (
      <div className="cart-items--list">
        {props.user && // short-circuit
          <>
          <section className="cart-items--list-img">
          <img src={items.buildId.boardId.bigImg} />
          </section>
          <section className="cart-items--list-name">
            {items.buildId.name}
          </section>
          <section className="cart-items--list-delete">
            <button onClick={() => handleRemoveCartItem(items._id)}>Delete</button>
          </section>
          <div className="hr">
          </div>
          </>
        }
      </div>
    ));
  };

  const loading = () => {
    return <h1>Login to view cart</h1>
  };

  return props.cartItems ? loaded() : loading();
}

export default CartItems