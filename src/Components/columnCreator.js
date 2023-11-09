import { Fragment } from "react";
import "./style.css";
import Card from "./cardCreator";
import { useDispatch, useSelector } from "react-redux";
import { changeStatus, selectContent } from "../features/slice";
import { useDrop } from "react-dnd";

function Column({ status }) {
  const value = useSelector(selectContent);

  const statusCounts = {
    Backlog: 0,
    "In Process": 0,
    "In Review": 0,
    Done: 0,
  };

  value.forEach((item) => {
    const status = item.status;
    if (statusCounts.hasOwnProperty(status)) {
      statusCounts[status]++;
    }
  });
  const statusArray = Object.entries(statusCounts).map(([key, value]) => ({
    status: key,
    count: value,
  }));
  const dispatch = useDispatch();
  const handleSelectChange = (id) => {
    dispatch(
      changeStatus({
        id: id,
        status: status,
      })
    );
  };
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
          <div>
            {statusArray.map((e) => {
              if (e.status === status) {
                return e.count;
              }
            })}
          </div>
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
