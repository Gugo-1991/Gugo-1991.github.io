import { Fragment, useId, useState } from "react";
import "./header.css";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../features/slice";
import { v4 as uuidv4 } from "uuid";

function Header() {
  const dispatch = useDispatch();
  const [titleValue, setTitleValue] = useState("");
  const [descriptionValue, setDescriptionValue] = useState("");
  const handleSubmit = () => {
    if (titleValue) {
      dispatch(
        addItem({
          id: uuidv4(),
          title: titleValue,
          description: descriptionValue,
        })
      );
    }
    setTitleValue("");
    setDescriptionValue("");
  };

  return (
    <form className="header" onSubmit={handleSubmit}>
      <button onClick={handleSubmit} className="addButton">
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
    </form>
  );
}

export default Header;
