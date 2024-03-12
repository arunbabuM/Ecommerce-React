import React from 'react';
import './DescriptionBox.css';

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">
                Description
            </div>
            <div className="descriptionbox-nav-box fade">
                Reviews(122)
            </div>
        </div>
        <div className="descriptionbox-description">
            <p>
                Discover a world of endless possibilities at our premier online marketplace. 
                Browse curated collections, shop from top brands, and find unique products tailored to your lifestyle. 
                Enjoy seamless navigation, secure transactions, and swift delivery for a hassle-free shopping experience.
                Elevate your online shopping journey with us today. Welcome to a new era of convenience and style
            </p>
            <p>
                Browse curated collections, shop from top brands, and find unique products tailored to your lifestyle. 
                Enjoy seamless navigation, secure transactions, and swift delivery for a hassle-free shopping experience.
                Elevate your online shopping journey with us today. Welcome to a new era of convenience and style
            </p>
        </div>
    </div>
  )
}

export default DescriptionBox;