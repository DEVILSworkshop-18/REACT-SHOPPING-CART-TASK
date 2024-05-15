import React, { useState } from "react";
import './Style/Card.css'
const Cards = ({ item , setValue}) => {
  const [status, setstatus] = useState(true);
  const handleInc = () => {
    setstatus(false);
    setValue((preval) => preval + 1)
  }
  const handleDec = () => {
    setstatus(true);
    setValue((preval) => preval - 1)
  }
  return (
    <div key={item.id}>
    <div className="col mb-5">
      <div className="card h-100">
        <img
          className="card-img-top"
          src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
          alt="..."
        />

        <div className="card-body p-4">
          <div className="text-center">
            <h5 className="fw-bolder">{item.item}</h5>
            {item.rate}
          </div>
        </div>

        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div className="text-center">
            {status ? 
              <button onClick={handleInc} className="btn btn-outline-dark mt-auto cardAddToCard">Add To Cart</button>
             : 
              <button onClick={handleDec} className="btn btn-outline-dark mt-auto cardRemoveFromCart">
                Remove From Cart
              </button>
            }
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Cards;
