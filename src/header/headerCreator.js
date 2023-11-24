import { useReducer } from "react";
import "./header.css";
import { useDispatch } from "react-redux";
import { addItem } from "../features/slice";
import { v4 as uuidv4 } from "uuid";

const initialState = { title: "", description: "" };

function reducer(state, action) {
  switch (action.type) {
    case "title":
      return { ...state, title: action.payload };
    case "description":
      return { ...state, description: action.payload };
    default:
      throw new Error();
  }
}

function Header() {
  const dispatch = useDispatch();
  const [state, dispatchState] = useReducer(reducer, initialState);

  const handleSubmit = () => {
    if (state.title) {
      dispatch(
        addItem({
          id: uuidv4(),
          title: state.title,
          description: state.description,
        })
      );
    }
    dispatchState({ type: "title", payload: "" });
    dispatchState({ type: "description", payload: "" });
  };
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <div className="header">
      <input
        onKeyDown={handleKeyDown}
        value={state.title}
        onChange={(e) =>
          dispatchState({ type: "title", payload: e.target.value })
        }
        className="titleInput"
        type="text"
        placeholder="Title..."></input>
      <input
        onKeyDown={handleKeyDown}
        value={state.description}
        onChange={(e) =>
          dispatchState({ type: "description", payload: e.target.value })
        }
        className="titleInput"
        type="text"
        placeholder="Description..."></input>
      <button onClick={handleSubmit} className="addButton">
        Add Card
      </button>
    </div>
  );
}

export default Header;
