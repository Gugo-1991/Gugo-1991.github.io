import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { changeStatus } from "../features/slice";
import { statuses } from "./status";

function CustomDropdown({ status, id }) {
  const dispatch = useDispatch();
  const [selectedValue, setSelectedValue] = useState(status);

  const handleSelectChange = (newValue, id) => {
    setSelectedValue(newValue);
    dispatch(
      changeStatus({
        id: id,
        status: newValue,
      })
    );
  };

  const item = statuses.map((e) => (
    <option key={e} value={e}>
      {e}
    </option>
  ));

  return (
    <div className="custom-dropdown">
      <select
        id={id}
        defaultValue={selectedValue}
        // value={selectedValue}
        onChange={(e) => handleSelectChange(e.target.value, id)}>
        {item}
      </select>
    </div>
  );
}

export default CustomDropdown;
