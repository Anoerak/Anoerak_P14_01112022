import React from 'react';
import { useDispatch } from 'react-redux';
import { setSearchValue } from '../../features/Employees/employees.slice';

import './SearchBar.css';

/**
 *
 * @returns SearchBar component with the search input
 */

const SearchBar = () => {
	// Get the dispatch function from the redux store
	const dispatch = useDispatch();

	// Handle the change event of the search input
	const handleChange = (e) => {
		dispatch(setSearchValue(e.target.value));
	};

	return (
		<form className="searchBar">
			<input type="text" id="header-search" placeholder="search" name="searchBar" onChange={handleChange} />
		</form>
	);
};

export default SearchBar;
