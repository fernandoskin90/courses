import React, { useState } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import PropTypes from 'prop-types';
import './style.scss';

export default function Search({ onSearch }) {
  const [name, setName] = useState('');
  const handleName = event => {
    setName(event.target.value);
  };
  const handleKeyDown = event => {
    if (event.key === 'Enter') onSearch(name);
  };
  return (
    <div className="search">
      <SearchIcon />
      <input
        type="text"
        placeholder="Search all courses"
        value={name}
        onChange={handleName}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
}

Search.propTypes = {
  onSearch: PropTypes.func.isRequired,
};
