import React, { useState, useEffect, useRef, useContext } from 'react';
import './RecipeItem.css';
import { useNavigate } from 'react-router-dom';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../context/StoreContext';

const RecipeItem = ({ id, name, price, description, image, category }) => {
  const [isExpanded, setIsExpanded] = useState(false); // State for expanding the recipe item
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const { cartItems, addtoCart, removefromCart } = useContext(StoreContext);

  // Get the current count of the item from the cart
  const itemCount = cartItems[id] || 0;


  // Add item to cart
  const incrementItemCount = (e) => {
    e.stopPropagation();
    addtoCart(id);
  };

  // Remove item from cart
  const decrementItemCount = (e) => {
    e.stopPropagation();
    if (itemCount > 0) removefromCart(id);
  };

  return (
    <div
      className={`food-item ${isExpanded ? 'expanded' : ''}`}

      ref={containerRef}
    >
      {/* Image and cart controls */}
      <div className="food_item_img_container">
        <img
          className={`food-item-image ${isExpanded ? 'expanded' : ''}`}
          src={image}
          alt={name}
        />
        {itemCount === 0 ? (
          <img
            id='add_icon'
            src={assets.black_add}
            onClick={incrementItemCount}
            className='add'
            alt="Add"
          />
        ) : (
          <div className='food-item-counter'>
            <img id='remove' onClick={decrementItemCount} src={assets.red_remove} alt="Remove" />
            <p>{itemCount}</p>
            <img id='green' onClick={incrementItemCount} src={assets.green_add} alt="Add" />
          </div>
        )}
      </div>

      {/* Recipe item information */}
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img id="stars" src={assets.star_rating} alt="Star Rating" />
        </div>
        <p className="food-item-desc">{description}</p>
        <p className='food-item-price'>${price}</p>
        <p className="food-item-category">{category}</p>
        {/* Uncomment the button below for detailed view navigation */}
        {/* <button className="view-details-button" onClick={handleViewDetails}>
          View Details
        </button> */}
      </div>
    </div>
  );
};

export default RecipeItem;









