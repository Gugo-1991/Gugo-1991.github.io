import { Fragment } from "react";
import "./style.css";

function Button({ name }) {
  return (
    <Fragment>
      <button className="addButton" key={Math.random()}>
        {name}
      </button>
    </Fragment>
  );
}

export default Button;
