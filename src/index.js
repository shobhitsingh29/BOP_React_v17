import React from "react";
import ReactDOM from "react-dom";
import style from "./search.scss"

const Index = () => {
  return <div className={style.nameOfYourCSSClass}>Hello React !</div>;
};

ReactDOM.render(<Index />, document.getElementById("index"));
