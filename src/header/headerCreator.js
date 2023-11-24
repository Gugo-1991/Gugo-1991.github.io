import { useReducer } from "react";
import "./header.css";
import { useDispatch } from "react-redux";
import { addItem } from "../features/slice";
import { v4 as uuidv4 } from "uuid";
import { rule } from "../Components/status";

const initialState = { title: "", description: "", rule: "Task" };

function reducer(state, action) {
  switch (action.type) {
    case "title":
      return { ...state, title: action.payload };
    case "description":
      return { ...state, description: action.payload };
    case "rule":
      return { ...state, rule: action.payload };
    case "clear":
      return { ...state, title: "", description: "", rule: "Task" };
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
          rule: state.rule,
        })
      );
    }
    dispatchState({ type: "clear" });
  };
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSubmit();
    }
  };
  const item = rule.map((e) => (
    <option key={e} value={e}>
      {e}
    </option>
  ));
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
      <div className="rule">
        <label className="label-for-drp">Select Rule </label>
        <div className="rule-dropdown">
          <select
            key={Math.random()}
            value={state.rule}
            onChange={(e) =>
              dispatchState({ type: "rule", payload: e.target.value })
            }>
            {item}
          </select>
        </div>
      </div>
      <button onClick={handleSubmit} className="addButton">
        Add Card
      </button>
    </div>
  );
}

export default Header;
