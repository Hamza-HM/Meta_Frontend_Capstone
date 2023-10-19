
import { Link } from 'react-router-dom';
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMotorcycle } from '@fortawesome/free-solid-svg-icons';

const Card = ({ imgSrc, title, price, description }) => {
    const imageSize = {
      width: '100%', // Set your desired width
      height: '180px', // Set your desired height
    };

    return (
      <div className="card" style={{ width: '18rem' }}>
        <div className="d-flex align-items-center">
          <img src={imgSrc} className="img img-centered rounded" alt="..." style={imageSize} />
        </div>
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-center mt-3">
            <div>
              <h5 className="card-title">{title}</h5>
            </div>
            <div>
              <h5 className="card-title text-warning">{price}</h5>
            </div>
          </div>
          <p className="card-text mt-5">{description}</p>
        </div>
        <Link href="#" className="nav-link mt-5 m-3">
          Order a delivery <FontAwesomeIcon icon={faMotorcycle} />
        </Link>
      </div>
    );
  };

  export default Card;

