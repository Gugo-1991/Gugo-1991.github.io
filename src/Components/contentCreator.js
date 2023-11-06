import { Fragment } from "react";
import "./style.css";
import CustomDropdown from "./dropdown";
import { selectContent } from "../features/slice";
import { useSelector } from "react-redux";

function Content({ item }) {
  // const value = useSelector(selectContent);

  // const defaultOption = "To-do";
  return (
    <Fragment>
      <div className="content" key={Math.random()}>
        <div className="" key={Math.random()}>
          {item.title}
        </div>
        <CustomDropdown status={item.status} />
        <div className="" key={Math.random()}>
          {item.description ? item.description : "no desctiption"}
        </div>
      </div>
    </Fragment>
  );
}

export default Content;
