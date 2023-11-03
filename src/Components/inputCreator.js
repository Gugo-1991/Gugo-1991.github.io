import { Fragment } from "react";

function Input({ title }) {
  return (
    <Fragment>
      <input
        className="titleInput"
        key={Math.random()}
        type="text"
        placeholder={title}></input>
    </Fragment>
  );
}
export default Input;
