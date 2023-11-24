import { Fragment } from "react";
import "./style.css";
import CustomDropdown from "./dropdown";
import { useDispatch } from "react-redux";
import { changeStatus, deleteItem } from "../features/slice";

function Card({ item }) {
  const dispatch = useDispatch();

  const handleSubmit = (id) => {
    dispatch(
      deleteItem({
        id: id,
      })
    );
  };
  function dragstart(e, item) {
    e.dataTransfer.setData("dragItem", item);
  }

  return (
    <Fragment>
      <div
        draggable={true}
        onDragStart={(e) => {
          dragstart(e, item.id);
        }}
        className="content"
        key={Math.random()}>
        <div className="itemTitle" key={item.id}>
          {item.title}
          <button className="deleteCard" onClick={() => handleSubmit(item.id)}>
            x
          </button>
        </div>

        <div className="description" key={Math.random()}>
          {item.description ? item.description : "no desctiption"}
        </div>
        <CustomDropdown status={item.status} id={item.id} />
      </div>
    </Fragment>
  );
}

export default Card;
