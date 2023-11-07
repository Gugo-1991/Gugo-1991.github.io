import { Fragment } from "react";
import "./style.css";
import Card from "./cardCreator";
import { useDispatch, useSelector } from "react-redux";
import { changeStatus, selectContent } from "../features/slice";
import { useDrop } from "react-dnd";

function Column({ status }) {
  const dispatch = useDispatch();
  const handleSelectChange = (id) => {
    dispatch(
      changeStatus({
        id: id,
        status: status,
      })
    );
  };
  const value = useSelector(selectContent);
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "content",
    drop: (item) => addContentToBoard(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));
  const addContentToBoard = (id) => {
    handleSelectChange(id);
  };

  return (
    <Fragment>
      <div className="column" ref={drop}>
        <div className="statusName" key={Math.random()}>
          {status}
          {/* <div>{items}</div> */}
        </div>
        {value.map((item) => {
          if (item.status === status) {
            return <Card key={Math.random()} item={item} />;
          }
          return null;
        })}
      </div>
    </Fragment>
  );
}
export default Column;
