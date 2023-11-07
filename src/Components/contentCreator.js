import { Fragment } from "react";
import "./style.css";
import CustomDropdown from "./dropdown";
import { useDrag } from "react-dnd";
function Content({ item }) {
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
