import React from 'react';
import bannerImg from '../assets/restauranfood.jpg';

const lorem = `Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500.`;

const Banner = () => {
  return (
      <div className="bg-dark text-white mt-5 p-2">
        <div className='container px-5 mt-4'>
      <div className="d-md-flex justify-content-md-center align-items-center flex-wrap">
        <div className="col-md-6 banner-text">
          <h1 className="display-4 text-warning">Little Lemon</h1>
          <h3 className="banner-subheading">Chicago</h3>
          <p className="line-length">{lorem}</p>
          <button className="btn btn-warning fw-bold rounded">
            Reserve a Table
          </button>
        </div>
        <div className="col-md-6 text-end">
          <img
            className='img-fluid rounded'
            src={bannerImg} alt="Restaurant Banner"
            style={
                {
                maxHeight: '400px',
                transform: 'translateY(80px)'
            }
    }
          />
        </div>
      </div>
    </div>
    </div>
  );
};

export default Banner;
