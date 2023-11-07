import { Fragment } from "react";
import "./style.css";
import Content from "./contentCreator";
import { useSelector } from "react-redux";
import { selectContent } from "../features/slice";

function Column({ items }) {
  const value = useSelector(selectContent);
  return (
    <Fragment>
      <div className="column">
        <div className="statusName" key={Math.random()}>
          {items.name}
          <div>{items.count}</div>
        </div>
        {value.map((item) => {
          if (item.status === items.name) {
            return <Content key={Math.random()} item={item} />;
          }
          return null;
        })}
      </div>
    </Fragment>
  );
}
export default Column;
