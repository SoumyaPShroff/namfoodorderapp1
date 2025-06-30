import React from 'react'

function DropdownList({ data = [], labelKey = "label", valueKey = "value", onChange, selectedValue, placeholder = "-- Select --" }, disabled = false) {
return (
    <select
      value={selectedValue}
      onChange={onChange}
      disabled={disabled}
      className="dropdown"
    >
      <option value="" disabled hidden>
        {placeholder}
      </option>
      {data.map((item, index) => (
        <option key={index} value={item[valueKey]}>
          {item[labelKey]}
        </option>
      ))}
    </select>
  )
}

export default DropdownList
