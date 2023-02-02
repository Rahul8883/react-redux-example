import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { incNumber, decNumber } from "../action/index";

const UpDownCounter = () => {
    const myState = useSelector((state) => state.changeTheNumber);
    const dispatch = useDispatch();

  return (
    <div className="container">
    <div className="child-container">
      <h1>Increment/decrement counter</h1>
      <h4>Using React and Redux</h4>

      <div className="quantity">
        <a
          className="quantity_minus"
          title="Decrement"
          onClick={() => dispatch(decNumber(5))}
        >
          <span>-</span>
        </a>
        <input
          name="quantity"
          type="text"
          className="quantity_input"
          value={myState}
        />
        <a
          className="quantity_plus"
          title="Increment"
          onClick={() => dispatch(incNumber(5))}
        >
          <span>+</span>
        </a>
      </div>
    </div>
  </div>
  )
}

export default UpDownCounter