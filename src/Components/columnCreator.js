import { Fragment } from "react";
import "./style.css";
import Content from "./contentCreator";

function Column({ status }) {
  return (
    <Fragment>
      <div className="column" key={Math.random()}>
        <div className="statusName" key={Math.random()}>
          {status}
        </div>
        <Content />
      </div>
    </Fragment>
  );
}

export default Column;
