import React from 'react';
import productImg from '../imgs/image-product-desktop.jpg';
import cartImg from '../imgs/icon-cart.svg';

const Card = () => {
    return (
        <div className='card'>
            <img className="product-img" src={productImg} alt="perfume"></img>
            <div className='card-content'>
                <div>
                    <h2 className='type'>PERFUME</h2>
                </div>
                <div>
                    <h1 className='title'>Gabrielle Essence Eau De Parfum</h1>
                </div>
                <div>
                    <h3 className='info'>A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.</h3>
                </div>
                <div className='price'>
                    <span className='new-price'>$149.99</span> <span className='old-price'>$169.99</span>
                </div>
                <button className='cart-button'>
                    <img className="cart-img" src={cartImg} alt="cart"></img>
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default Card;