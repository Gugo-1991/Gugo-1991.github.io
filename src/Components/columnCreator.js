import { Fragment } from "react";
import "./style.css";
import Content from "./contentCreator";
import { useSelector } from "react-redux";
import { selectContent } from "../features/slice";

function Column({ status }) {
  const value = useSelector(selectContent);
  return (
    <Fragment>
      <div className="column">
        <div className="statusName" key={Math.random()}>
          {status}
        </div>
        {value.map((item) => {
          if (item.status === status) {
            return <Content key={Math.random()} item={item} />;
          }
          return null;
        })}
      </div>
    </Fragment>
  );
}
export default Column;
