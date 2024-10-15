import React, { useContext } from 'react';
import './Cart.css';
import { StoreContext } from '../../context/StoreContext';
import Footer from '../../components/Footer/Footer';

const Cart = () => {
    // Accessing cart items and recipe list from the context
    const { cartItems, recipe_list, removefromCart } = useContext(StoreContext);

    // Calculate the subtotal by summing up the prices of items in the cart
    const subtotal = recipe_list.reduce((acc, item) => {
        if (cartItems[item._id] > 0) {
            return acc + item.price * cartItems[item._id];
        }
        return acc;
    }, 0);

    // Define delivery fee and calculate the total amount
    const deliveryFee = 2;
    const total = subtotal + deliveryFee;

    return (
        <div className='cart'>
            <div className="cart-items">
                <div className="cart-items-title">
                    <p>Items</p>
                    <p>Title</p>
                    <p>Price</p>
                    <p>Quantity</p>
                    <p>Total</p>
                    <p>Remove</p>
                </div>
                <hr />
                {recipe_list.map((item, index) => {
                    // Render items in the cart if their quantity is greater than zero
                    if (cartItems[item._id] > 0) {
                        return (
                            <div key={index} className="cart-items-item">
                                <img src={item.image} alt={item.name} />
                                <p>{item.name}</p>
                                <p>${item.price.toFixed(2)}</p>
                                <p>{cartItems[item._id]}</p>
                                <p>${(item.price * cartItems[item._id]).toFixed(2)}</p>
                                {/* Click to remove item from cart */}
                                <p onClick={() => removefromCart(item._id)} className='cross'>x</p>
                            </div>
                        );
                    }
                    return null; // If item quantity is zero, return null
                })}
                <hr />
            </div>

            <div className="cart-bottom">
                <div className="cart-total">
                    <h2>Total</h2>
                </div>
                <div className="cart-total-container">
                    <div className="cart-total-details">
                        <p>Subtotal</p>
                        <p>${subtotal.toFixed(2)}</p>
                    </div>
                    <hr />
                    <div className="cart-total-details">
                        <p>Total</p>
                        <p>${total.toFixed(2)}</p>
                    </div>
                </div>
            </div>
            <Footer /> {/* Render footer component */}
        </div>
    );
}

export default Cart;

