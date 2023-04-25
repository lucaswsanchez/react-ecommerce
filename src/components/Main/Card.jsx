import React from "react";
import "./Card.css";
import { ImTruck, ImClock } from "react-icons/im";
import { GoCreditCard } from "react-icons/go";
const Card = () => {
  return (
    <div className="card-container">
      <div className="card">
        <div className="card-icon">
          <ImTruck size={40} color="#9f9f9f" />
        </div>
        <div className="card-text">
          <p className="small-text">Shipping nationwide</p>
          <p className="big-text">MINIMUM PURCHASE AMOUNT</p>
          <p className="big-text">$8000</p>
        </div>
      </div>
      <div className="card">
        <div className="card-icon">
          <GoCreditCard size={40} color="#9f9f9f" />
        </div>
        <div className="card-text">
          <p className="small-text">Payment methods</p>
          <p className="big-text">BANK TRANSFER, CASH, CREDIT OR DEBIT CARD</p>
        </div>
      </div>
      <div className="card" style={{ border:"none" }}>
        <div className="card-icon">
          <ImClock size={40} color="#9f9f9f" />
        </div>
        <div className="card-text">
          <p className="small-text">Same-day deliveries</p>
          <p className="big-text">IN OUR AREA AND NEARBY</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
