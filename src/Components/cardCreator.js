import { Fragment } from "react";
import "./style.css";
import CustomDropdown from "./dropdown";
import { useDispatch } from "react-redux";
import { deleteItem } from "../features/slice";

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
        className={item.rule}
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
        <CustomDropdown items={item} />
      </div>
    </Fragment>
  );
}

export default Card;
