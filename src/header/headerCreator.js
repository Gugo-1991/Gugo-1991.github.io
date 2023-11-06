import { Fragment, useState } from "react";
import "./header.css";
import { useDispatch } from "react-redux";
import { addItem } from "../features/slice";

function Header() {
  const dispatch = useDispatch();
  const [titleValue, setTitleValue] = useState("");
  const [descriptionValue, setDescriptionValue] = useState("");
  const handeSubmit = () => {
    dispatch(
      addItem({
        title: titleValue,
        description: descriptionValue,
      })
    );
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
