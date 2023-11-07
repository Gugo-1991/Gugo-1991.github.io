import { Fragment, useState } from "react";
import "./header.css";
import { useDispatch, useSelector } from "react-redux";
import { addItem, selectContent } from "../features/slice";

function Header() {
  const dispatch = useDispatch();
  const item = useSelector(selectContent);

  const [titleValue, setTitleValue] = useState("");
  const [descriptionValue, setDescriptionValue] = useState("");
  const handeSubmit = () => {
    if (titleValue) {
      dispatch(
        addItem({
          id: item.length + 1,
          title: titleValue,
          description: descriptionValue,
        })
      );
    }
    setTitleValue("");
    setDescriptionValue("");
  };

  return (
    <section className="header">
      <button onClick={handeSubmit} className="addButton">
        +
      </button>

      <input
        value={titleValue}
        onChange={(e) => setTitleValue(e.target.value)}
        className="titleInput"
        type="text"
        placeholder="Title..."></input>
      <input
        value={descriptionValue}
        onChange={(e) => setDescriptionValue(e.target.value)}
        className="titleInput"
        type="text"
        placeholder="Description..."></input>
    </section>
  );
}

export default Header;
