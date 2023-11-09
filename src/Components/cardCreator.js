import { Fragment } from "react";
import "./style.css";
import CustomDropdown from "./dropdown";
import { useDrag } from "react-dnd";
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
  const [{ isDraging }, drag] = useDrag(() => ({
    type: "content",
    item: { id: item.id },
    collect: (monitor) => ({
      isDraging: !!monitor.isDragging(),
    }),
  }));

  return (
    <Fragment>
      <div className="content" key={Math.random()} ref={drag}>
        <div className="itemTitle" key={Math.random()}>
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
