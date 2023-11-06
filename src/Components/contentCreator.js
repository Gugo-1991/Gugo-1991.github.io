import { Fragment } from "react";
import "./style.css";
import CustomDropdown from "./dropdown";

function Content({ item }) {
  return (
    <Fragment>
      <div className="content" key={Math.random()}>
        <div className="" key={Math.random()}>
          {item.title}
        </div>
        <CustomDropdown status={item.status} id={item.id} />
        <div className="" key={Math.random()}>
          {item.description ? item.description : "no desctiption"}
        </div>
      </div>
    </Fragment>
  );
}

export default Content;
