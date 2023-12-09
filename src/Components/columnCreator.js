import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { changeStatus, selectContent } from "../features/slice";
import Card from "./cardCreator";

function Column({ status }) {
  const dispatch = useDispatch();
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

  const handleSelectChange = (id, itemStatus) => {
    dispatch(
      changeStatus({
        id: id,
        status: itemStatus,
      })
    );
  };

  function drop(e, status) {
    const dragFlag = e.dataTransfer.getData("dragItem");
    handleSelectChange(dragFlag, status);
  }
  function dragOver(e) {
    e.preventDefault();
  }

  return (
    <div>
      <div
        key={Math.random()}
        className="column"
        onDrop={(e) => drop(e, status)}
        onDragOver={(e) => dragOver(e)}>
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
    </div>
  );
}
export default Column;
