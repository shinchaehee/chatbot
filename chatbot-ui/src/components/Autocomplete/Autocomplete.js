import React from 'react';
import './Autocomplete.css';

export default function AutocompleteToggle({ isChecked, onToggle }) {
  return (
    <div className="auto-toggle">
      <label htmlFor="autocomplete-toggle">자동완성</label>
      <label className="switch">
        <input
          type="checkbox"
          id="autocomplete-toggle"
          checked={isChecked}
          onChange={onToggle}
        />
        <span className="slider round"></span>
      </label>
    </div>
  );
}

