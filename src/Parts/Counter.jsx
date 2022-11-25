import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  decrement,
  increment,
  incrementByAmount,
} from '../stores/counterSlice';

function Counter() {
  const [num, setNum] = useState(0);

  const count = useSelector(state => state.counter.value);
  console.log(count);
  const dispatch = useDispatch();

  return (
    <div>
      <p>{count}</p>
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        decrease -{' '}
      </button>
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        increase +{' '}
      </button>
      <button
        onClick={() => {
          dispatch(incrementByAmount(5));
        }}
      >
        increase by 5{' '}
      </button>
    </div>
  );
}

export default Counter;
