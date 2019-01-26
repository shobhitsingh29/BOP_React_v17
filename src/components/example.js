import React from "react";
import { useState } from 'react';
import E  from './e';
import * as s from "./example.scss"

export  default  function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
      <div className={s.a}>
        <E></E>
        <p> You clicked {count} times</p>
        <button  onClick={() => setCount(count + 1)}>
          Click me
        </button>
      </div>
  );
}

module.hot.accept();