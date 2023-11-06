import { Fragment } from "react";
import "./style.css";
import CustomDropdown from "./dropdown";

function Content({ item }) {
  return (
    <Fragment>
      <div className="content" key={Math.random()}>
        <div className="itemTitle" key={Math.random()}>
          {item.title}
        </div>

        <div className="description" key={Math.random()}>
          {item.description ? item.description : "no desctiption"}
        </div>
        <CustomDropdown status={item.status} id={item.id} />
      </div>
    </Fragment>
  );
}

export default Content;
