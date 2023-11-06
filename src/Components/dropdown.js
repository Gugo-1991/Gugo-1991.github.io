import React, { useState } from "react";

function CustomDropdown({ status }) {
  const [selectedValue, setSelectedValue] = useState("");
  const options = ["To-do", "In process", "Done"];

  const handleSelectChange = (newValue) => {
    setSelectedValue(newValue);
  };

  const item = options.map((e) => (
    <option key={e} value={e}>
      {e}
    </option>
  ));

  return (
    <div className="custom-dropdown">
      <select
        defaultValue={status}
        // value={selectedValue}
        onChange={(e) => handleSelectChange(e.target.value)}>
        {item}
      </select>
    </div>
  );
}

export default CustomDropdown;
