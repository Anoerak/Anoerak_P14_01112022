import React from 'react';

import './SearchBar.css';

const SearchBar = () => {
	return (
		<div className="searchBar">
			<input type="text" id="header-search" placeholder="search" name="s" />
		</div>
	);
};

export default SearchBar;
